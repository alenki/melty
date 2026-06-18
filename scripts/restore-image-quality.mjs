// Restore display-image quality lost in the Jun-2026 "image optimization" passes.
//
// The optimize pass (commit 155485a) downscaled every photo to 1600px and
// re-encoded at webp q80 (hero/OG melty.webp to 1200px/q82). On the large
// surfaces — the gallery lightbox, the menu modal, the About-page photos — that
// reads as soft, slightly blocky images. This rebuilds each full image from its
// pre-optimization git original (rev 155485a~1) at a higher-quality target.
// Afterwards `generate-thumbnails.mjs --force` rebuilds the -sm/-md variants
// from the restored fulls.
//
// Policy per file, chosen so we never stack a needless second generation of loss:
//   logo.webp / logo_dark.webp : LOGO  -> 1600px, lossless webp (flat graphic)
//   melty.webp                 : OG    -> 1200px, q88 (social card only, off-page)
//   everything else            : PHOTO -> if the original is webp and already
//                                <=2048px, restore it byte-for-byte ("like it
//                                was"); otherwise downscale the camera original
//                                to 2048px / q85.
//
//   node scripts/restore-image-quality.mjs --dry   # report, write nothing
//   node scripts/restore-image-quality.mjs         # apply
//
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ORIG_REV = '155485a~1';            // last commit before the first downscale pass
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DRY = process.argv.includes('--dry');

const PHOTO = { maxEdge: 2048, quality: 85 };
const OG = { maxEdge: 1200, quality: 88 };
// q92 is visually identical to lossless on the flat script-on-disc logo (verified
// against lossless on the cream hero bg) at ~1/5 the bytes — and the LCP hero logo
// must stay light. Native logo art is ~1600px, so this also out-resolves the old 1000px.
const LOGO = { maxEdge: 1600, quality: 92 };

const VARIANT_RE = /-(sm|md)\.webp$/i;

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, maxBuffer: 1 << 30 });
}
function gitLines(rev) {
  // -z: NUL-separated, no path quoting — safe for the Cyrillic/space filenames.
  return git(['ls-tree', '-r', '-z', '--name-only', rev, '--', 'public/data'])
    .toString('utf8')
    .split('\0')
    .filter(Boolean);
}
function gitBytes(rev, path) {
  return git(['show', `${rev}:${path}`]);
}
const stem = (p) => p.replace(/\.[^.]+$/, '');
const kb = (b) => (b / 1024).toFixed(1).padStart(7) + 'KB';
const roleFor = (p) => {
  const n = p.split('/').pop().toLowerCase();
  if (n === 'logo.webp' || n === 'logo_dark.webp') return 'LOGO';
  if (n === 'melty.webp') return 'OG';
  return 'PHOTO';
};

// --- build original lookup: stem -> original path (prefer the .webp twin) ----
const origPaths = gitLines(ORIG_REV).filter((p) => /\.(webp|jpe?g|png)$/i.test(p) && !VARIANT_RE.test(p));
const origByStem = new Map();
for (const p of origPaths) {
  const k = stem(p);
  const cur = origByStem.get(k);
  if (!cur || (/\.webp$/i.test(p) && !/\.webp$/i.test(cur))) origByStem.set(k, p);
}

const currentFulls = gitLines('HEAD').filter((p) => /\.webp$/i.test(p) && !VARIANT_RE.test(p));

async function buildOutput(srcBuf, role, isWebpOrig, longEdge) {
  if (role === 'LOGO') {
    return { buf: await sharp(srcBuf).resize(LOGO.maxEdge, LOGO.maxEdge, { fit: 'inside', withoutEnlargement: true }).webp({ quality: LOGO.quality, effort: 6 }).toBuffer(), action: 'logo 1600/q92' };
  }
  if (role === 'OG') {
    return { buf: await sharp(srcBuf).resize(OG.maxEdge, OG.maxEdge, { fit: 'inside', withoutEnlargement: true }).webp({ quality: OG.quality, effort: 6 }).toBuffer(), action: 'og 1200/q88' };
  }
  // PHOTO
  if (isWebpOrig && longEdge <= PHOTO.maxEdge) {
    return { buf: srcBuf, action: 'verbatim webp<=2048' };
  }
  return { buf: await sharp(srcBuf).resize(PHOTO.maxEdge, PHOTO.maxEdge, { fit: 'inside', withoutEnlargement: true }).webp({ quality: PHOTO.quality, effort: 6 }).toBuffer(), action: `downscale->2048/q85` };
}

let written = 0, bytesBefore = 0, bytesAfter = 0;
const noOriginal = [];
const rows = [];

for (const cur of currentFulls) {
  const role = roleFor(cur);
  const absCur = join(ROOT, cur);
  const curSize = statSync(absCur).size;
  bytesBefore += curSize;

  // resolve original
  let origPath = null;
  if (origByStem.has(stem(cur))) origPath = origByStem.get(stem(cur));

  let srcBuf, isWebpOrig, longEdge, srcLabel, srcFmt;
  if (origPath) {
    srcBuf = gitBytes(ORIG_REV, origPath);
    const m = await sharp(srcBuf).metadata();
    isWebpOrig = m.format === 'webp';
    longEdge = Math.max(m.width, m.height);
    srcFmt = m.format;
    srcLabel = origPath === cur ? '(orig .webp)' : `(orig ${origPath.split('.').pop()})`;
  } else {
    // added after the optimize pass — current working-tree file is the best source
    srcBuf = gitBytes('HEAD', cur);
    const m = await sharp(srcBuf).metadata();
    isWebpOrig = m.format === 'webp';
    longEdge = Math.max(m.width, m.height);
    srcFmt = m.format;
    srcLabel = '(current — no git original)';
    noOriginal.push(cur);
  }

  const { buf, action } = await buildOutput(srcBuf, role, isWebpOrig, longEdge);

  // validate output decodes
  const om = await sharp(buf).metadata();
  if (!om.width || !om.height) throw new Error('produced unreadable output for ' + cur);

  bytesAfter += buf.length;
  if (!DRY) { writeFileSync(absCur, buf); written++; }

  rows.push({ cur, role, srcLabel, srcFmt, longEdge, outDims: `${om.width}x${om.height}`, curSize, outSize: buf.length, action });
}

// --- report ------------------------------------------------------------------
rows.sort((a, b) => (b.outSize - b.curSize) - (a.outSize - a.curSize));
console.log(`${DRY ? '[DRY RUN] ' : ''}restore-image-quality — ${currentFulls.length} full images\n`);
console.log('  Δsize    cur ->   out   role   action                  src              file');
for (const r of rows.slice(0, 20)) {
  const d = ((r.outSize - r.curSize) / 1024).toFixed(0).padStart(5);
  console.log(`  ${d}KB ${kb(r.curSize)}->${kb(r.outSize)} ${r.role.padEnd(5)} ${r.action.padEnd(22)} ${r.srcLabel.padEnd(28)} ${r.cur.replace('public/data/', '')}`);
}
console.log(`  ... (${rows.length} files total; showing 20 largest deltas)\n`);

const byRole = {};
for (const r of rows) byRole[r.role] = (byRole[r.role] || 0) + 1;
console.log('  by role:', JSON.stringify(byRole));
console.log(`  total ${(bytesBefore / 1048576).toFixed(1)} MB -> ${(bytesAfter / 1048576).toFixed(1)} MB across full images`);
console.log(`  ${DRY ? 'would write' : 'wrote'} ${DRY ? rows.length : written} files`);
if (noOriginal.length) {
  console.log(`\n  ⚠ ${noOriginal.length} file(s) had NO git original at ${ORIG_REV} (kept current as source):`);
  for (const p of noOriginal) console.log('     ' + p.replace('public/data/', ''));
}
