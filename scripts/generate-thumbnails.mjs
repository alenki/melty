// Generate right-sized display variants for every menu / gallery photo.
//
// Why: optimize-images.mjs caps each image at 1600px (the largest on-screen
// surface — the gallery lightbox). But the same files are also shown in tiny
// menu grid cards (~280px) and masonry thumbnails. A 1600px image decodes to a
// ~7-8 MB RGBA bitmap on the main thread no matter how small its file is, so
// lazy-loading a screenful of them during a fast scroll stalls the thread and
// stutters Lenis's rAF smooth-scroll. Serving a small variant to the small
// surface keeps the decoded bitmap small -> no jank, far less to download.
//
// Variants are written next to the original with a width-role suffix:
//   foo.webp        full   (<=1600px)  gallery lightbox, modal slider
//   foo-md.webp     medium (<=1100px)  featured hero cards
//   foo-sm.webp     thumb  (<=600px)   menu grid cards, gallery masonry
//
//   node scripts/generate-thumbnails.mjs          # generate missing variants
//   node scripts/generate-thumbnails.mjs --force  # regenerate all
//   node scripts/generate-thumbnails.mjs --dry    # preview, write nothing
//
import sharp from 'sharp';
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA = fileURLToPath(new URL('../public/data', import.meta.url));
const FORCE = process.argv.includes('--force');
const DRY = process.argv.includes('--dry');

const SRC_RE = /\.webp$/i;
const VARIANT_RE = /-(sm|md)\.webp$/i; // already-generated variants — never a source

const SM = { suffix: 'sm', maxEdge: 600, quality: 78 };
const MD = { suffix: 'md', maxEdge: 1100, quality: 80 };

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (SRC_RE.test(e.name) && !VARIANT_RE.test(e.name)) acc.push(p);
  }
  return acc;
}

async function make(srcPath, v) {
  const dest = srcPath.replace(/\.webp$/i, `-${v.suffix}.webp`);
  if (!FORCE && existsSync(dest)) return { skipped: true };
  const out = await sharp(readFileSync(srcPath))
    .resize(v.maxEdge, v.maxEdge, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: v.quality, effort: 6 })
    .toBuffer();
  if (!DRY) writeFileSync(dest, out);
  return { skipped: false, bytes: out.length };
}

const menuFiles = walk(join(DATA, 'menu'));   // grid + featured + modal
const photoFiles = walk(join(DATA, 'photos')); // masonry + lightbox

let made = 0, skipped = 0, bytes = 0;
const tally = (r) => { if (r.skipped) skipped++; else { made++; bytes += r.bytes; } };

for (const f of menuFiles) {
  tally(await make(f, SM));
  tally(await make(f, MD)); // featured cards need the larger menu variant
}
for (const f of photoFiles) {
  tally(await make(f, SM)); // gallery lightbox keeps the full file
}

console.log(
  `${DRY ? '[DRY RUN] ' : ''}thumbnails: generated ${made}, skipped ${skipped} existing, ` +
  `+${(bytes / 1048576).toFixed(1)} MB`
);
