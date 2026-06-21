import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Regenerates dist/sitemap.xml at build time with a fresh <lastmod> and
// <image:image> entries for /menu and /gallery, so Yandex (YandexImages) and
// Google can discover the cafe's food and interior photography. Runs LAST in
// the build, after vite has copied the static public/sitemap.xml into dist/.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');
const BASE_URL = 'https://melty-cafe.ru';

const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// Recursively collect full-size .webp images under a public/ subdir, skipping
// the generated -sm/-md thumbnail variants and any leftover temp files.
function collectImages(relDir) {
  const absDir = path.join(PUBLIC, relDir);
  if (!fs.existsSync(absDir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    const rel = path.posix.join(relDir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectImages(rel));
    } else if (
      entry.name.endsWith('.webp') &&
      !/-(sm|md)\.webp$/.test(entry.name) &&
      !/\.tmp/.test(entry.name)
    ) {
      out.push(rel);
    }
  }
  return out;
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Build an absolute, percent-encoded, XML-safe image URL from a public-relative
// path like "data/menu/desserts/<filename>.webp" (filenames may be non-ASCII).
function imageUrl(relPath) {
  return xmlEscape(`${BASE_URL}/${encodeURI(relPath)}`);
}

function imageBlock(relPath) {
  return `    <image:image>\n      <image:loc>${imageUrl(relPath)}</image:loc>\n    </image:image>`;
}

const menuImages = collectImages('data/menu');
const galleryImages = collectImages('data/photos');

const urls = [
  {
    loc: `${BASE_URL}/`,
    changefreq: 'weekly',
    priority: '1.0',
    images: [
      { loc: `${BASE_URL}/data/melty.webp`, title: 'Melty - cafe & coffee shop in Nalchik', caption: 'A world of taste and comfort in Nalchik' },
      { loc: `${BASE_URL}/data/logo.webp`, title: 'Melty logo' },
    ],
  },
  { loc: `${BASE_URL}/menu`, changefreq: 'weekly', priority: '0.9', imagePaths: menuImages },
  { loc: `${BASE_URL}/gallery`, changefreq: 'monthly', priority: '0.7', imagePaths: galleryImages },
  { loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${BASE_URL}/feedback`, changefreq: 'monthly', priority: '0.5' },
];

function urlBlock(u) {
  const parts = [
    '  <url>',
    `    <loc>${u.loc}</loc>`,
    `    <lastmod>${TODAY}</lastmod>`,
    `    <changefreq>${u.changefreq}</changefreq>`,
    `    <priority>${u.priority}</priority>`,
  ];
  // Hand-authored image entries (homepage) with titles/captions
  if (u.images) {
    for (const img of u.images) {
      parts.push('    <image:image>');
      parts.push(`      <image:loc>${xmlEscape(img.loc)}</image:loc>`);
      if (img.title) parts.push(`      <image:title>${xmlEscape(img.title)}</image:title>`);
      if (img.caption) parts.push(`      <image:caption>${xmlEscape(img.caption)}</image:caption>`);
      parts.push('    </image:image>');
    }
  }
  // Auto-discovered image entries (menu / gallery)
  if (u.imagePaths) {
    for (const rel of u.imagePaths) parts.push(imageBlock(rel));
  }
  parts.push('  </url>');
  return parts.join('\n');
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(urlBlock).join('\n')}
</urlset>
`;

if (!fs.existsSync(DIST)) {
  console.error('generate-sitemap: dist/ not found — run after vite build.');
  process.exit(1);
}

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml, 'utf-8');
console.log(
  `Sitemap written: ${urls.length} URLs, ${menuImages.length} menu images, ${galleryImages.length} gallery images (lastmod ${TODAY}).`
);
