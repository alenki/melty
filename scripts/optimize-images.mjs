// Downscale + re-encode every image under public/data to a sane display size.
//
// Why: the source images were full-resolution camera originals (24-33 MP,
// 4000x6000 .. 4672x7008 px). They are shown in cards/thumbnails at most
// ~600px wide. Browsers must decode each one to a ~100 MB RGBA bitmap on the
// main thread and downscale it, which (a) makes pages load slowly and
// (b) stutters Lenis's rAF-driven smooth scroll as images lazy-load into view.
//
// This caps the longest edge per role and re-encodes to webp. Originals remain
// recoverable from git history.
//
//   node scripts/optimize-images.mjs --dry   # preview, write nothing
//   node scripts/optimize-images.mjs         # apply
//
import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { join, relative, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../public/data', import.meta.url));
const DRY = process.argv.includes('--dry');
const IMG = /\.(webp|jpe?g|png)$/i;

// Per-role encoding rules, matched by file name. maxEdge caps the longest side
// (covers the largest on-screen surface — the modal — at 2x retina).
function configFor(name) {
  const n = name.toLowerCase();
  if (n === 'favicon.webp') return null;                                   // orphan: deleted, not re-encoded
  if (n === 'logo.webp' || n === 'logo_dark.webp')
    return { maxEdge: 1000, lossless: true };                             // flat graphics w/ alpha -> crisp & tiny
  if (n === 'melty.webp') return { maxEdge: 1200, quality: 82 };          // OG/social image only
  return { maxEdge: 1600, quality: 80 };                                  // menu + gallery photos
}

function walk(d, acc = []) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (IMG.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = walk(ROOT).sort();
let processed = 0, skipped = 0, before = 0, after = 0;
const renames = []; // jpg -> webp, so callers can fix references

for (const p of files) {
  const rel = relative(ROOT, p);
  const bytes = statSync(p).size;
  before += bytes;
  const cfg = configFor(basename(p));
  if (!cfg) { skipped++; continue; } // favicon orphan — excluded from output total

  const input = readFileSync(p);
  let meta;
  try { meta = await sharp(input).metadata(); }
  catch { console.warn('  ! unreadable, left as-is:', rel); skipped++; after += bytes; continue; }

  const isJpg = /\.jpe?g$/i.test(p);
  const longEdge = Math.max(meta.width, meta.height);
  const needsResize = longEdge > cfg.maxEdge;
  const wrongFormat = meta.format !== 'webp';   // .jpg, or png mislabeled .webp
  const heavy = bytes > 200 * 1024;

  // Leave already-optimal files untouched (avoids needless generational loss).
  if (!isJpg && !needsResize && !wrongFormat && !heavy) { skipped++; after += bytes; continue; }

  let pipe = sharp(input);
  if (needsResize) pipe = pipe.resize(cfg.maxEdge, cfg.maxEdge, { fit: 'inside', withoutEnlargement: true });
  const out = await pipe
    .webp(cfg.lossless ? { lossless: true, effort: 6 } : { quality: cfg.quality, effort: 6 })
    .toBuffer();

  const dest = isJpg ? p.replace(/\.jpe?g$/i, '.webp') : p;

  // Don't bloat: if re-encoding a same-path webp produced something bigger and
  // we didn't resize/convert, keep the original.
  if (!isJpg && dest === p && !needsResize && out.length >= bytes) {
    skipped++; after += bytes; continue;
  }

  after += out.length;
  processed++;
  if (isJpg) renames.push({ from: rel, to: relative(ROOT, dest) });
  const tag = needsResize ? `resize ${meta.width}x${meta.height}->${cfg.maxEdge}` : 'recode';
  console.log(`  ${tag.padEnd(22)} ${String(Math.round(bytes / 1024)).padStart(6)}KB -> ${String(Math.round(out.length / 1024)).padStart(5)}KB  ${rel}${isJpg ? '  (=> .webp)' : ''}`);

  if (!DRY) {
    writeFileSync(dest, out);
    if (isJpg && dest !== p) unlinkSync(p);
  }
}

console.log(`\n${DRY ? '[DRY RUN] ' : ''}processed ${processed}, skipped ${skipped}`);
console.log(`total ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB (excludes deleted orphans)`);
if (renames.length) {
  console.log(`\n${renames.length} JPG files became .webp — references to update:`);
  for (const r of renames) console.log(`  ${r.from}  =>  ${r.to}`);
}
