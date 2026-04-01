# SEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make melty-cafe.ru fully indexable by both Google and Yandex with per-page meta tags, structured data, static SEO files, server configuration, and build-time prerendering.

**Architecture:** Install `react-helmet-async` for per-page `<head>` management via a reusable `<SEO>` component. Add static files (robots.txt, sitemap.xml, .htaccess) to `public/`. Use Puppeteer in a post-build script to prerender all 5 routes into static HTML files so crawlers get real content.

**Tech Stack:** react-helmet-async, puppeteer (devDep), Node.js post-build script, Apache .htaccess

**Spec:** `docs/superpowers/specs/2026-04-01-seo-optimization-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `public/robots.txt` | Crawler directives, sitemap pointer, Yandex Host |
| Create | `public/sitemap.xml` | URL list with priorities for search engines |
| Create | `public/.htaccess` | HTTPS redirect, www→non-www, gzip, caching, SPA fallback |
| Create | `src/components/SEO.tsx` | Reusable head manager (title, meta, OG, Twitter, canonical, JSON-LD) |
| Modify | `src/components/index.ts` | Re-export SEO component |
| Modify | `src/main.tsx` | Wrap app with `HelmetProvider` |
| Modify | `index.html` | Remove static OG/Twitter tags (now managed per-page) |
| Modify | `src/pages/HomePage.tsx` | Add `<SEO>` with Restaurant JSON-LD |
| Modify | `src/pages/MenuPage.tsx` | Add `<SEO>` with BreadcrumbList JSON-LD |
| Modify | `src/pages/GalleryPage.tsx` | Add `<SEO>` with BreadcrumbList JSON-LD |
| Modify | `src/pages/AboutPage.tsx` | Add `<SEO>` with BreadcrumbList JSON-LD |
| Modify | `src/pages/FeedbackPage.tsx` | Add `<SEO>` with BreadcrumbList JSON-LD |
| Create | `scripts/prerender.mjs` | Post-build script: serves dist, renders routes with Puppeteer, saves HTML |
| Modify | `package.json` | Add `prerender` script, update `build` to include prerender step |

---

### Task 1: Create Static SEO Files

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/.htaccess`

- [ ] **Step 1: Create robots.txt**

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://melty-cafe.ru/sitemap.xml
Host: melty-cafe.ru
```

- [ ] **Step 2: Create sitemap.xml**

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://melty-cafe.ru/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://melty-cafe.ru/menu</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://melty-cafe.ru/gallery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://melty-cafe.ru/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://melty-cafe.ru/feedback</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Create .htaccess**

Create `public/.htaccess`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# www → non-www canonical redirect
RewriteCond %{HTTP_HOST} ^www\.melty-cafe\.ru [NC]
RewriteRule ^(.*)$ https://melty-cafe.ru/$1 [L,R=301]

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>

# SPA fallback — serve index.html for routes without a matching file
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

- [ ] **Step 4: Verify files are in public/**

Run: `ls public/robots.txt public/sitemap.xml public/.htaccess`

Expected: all three files listed.

- [ ] **Step 5: Commit**

```bash
git add public/robots.txt public/sitemap.xml public/.htaccess
git commit -m "feat: add robots.txt, sitemap.xml, and .htaccess for SEO"
```

---

### Task 2: Install react-helmet-async and Create SEO Component

**Files:**
- Create: `src/components/SEO.tsx`
- Modify: `src/components/index.ts`

- [ ] **Step 1: Install react-helmet-async**

```bash
npm install react-helmet-async
```

- [ ] **Step 2: Create SEO component**

Create `src/components/SEO.tsx`:

```tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = 'https://melty-cafe.ru';
const DEFAULT_OG_IMAGE = `${BASE_URL}/data/melty.webp`;

export default function SEO({
  title,
  description,
  path,
  ogImage,
  ogType = 'website',
  jsonLd,
}: SEOProps) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
```

- [ ] **Step 3: Export SEO from barrel**

In `src/components/index.ts`, add this line at the end:

```ts
export { default as SEO } from './SEO';
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc -b --noEmit`

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/SEO.tsx src/components/index.ts package.json package-lock.json
git commit -m "feat: add SEO component with react-helmet-async"
```

---

### Task 3: Integrate HelmetProvider and Clean Up index.html

**Files:**
- Modify: `src/main.tsx`
- Modify: `index.html`

- [ ] **Step 1: Wrap app with HelmetProvider in main.tsx**

Replace the full content of `src/main.tsx` with:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
```

- [ ] **Step 2: Clean up index.html**

Replace `index.html` with (removes static OG/Twitter meta tags — now managed per-page by SEO component):

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/webp" href="/data/favicon.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#5C3D2E" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@800;900&family=Nunito:wght@300;400;500;600;700&display=swap">
    <title>Melty</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Run dev server to verify nothing is broken**

Run: `npm run dev` — open in browser, check that pages load correctly and browser tab shows "Melty" title.

- [ ] **Step 4: Commit**

```bash
git add src/main.tsx index.html
git commit -m "feat: integrate HelmetProvider, remove static meta from index.html"
```

---

### Task 4: Add Per-page SEO to All Routes

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/MenuPage.tsx`
- Modify: `src/pages/GalleryPage.tsx`
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/FeedbackPage.tsx`

- [ ] **Step 1: Add SEO to HomePage**

In `src/pages/HomePage.tsx`, add import at top:

```tsx
import { SEO } from '../components';
```

Then add `<SEO>` as the first child inside the fragment return:

```tsx
return (
    <>
      <SEO
        title="Melty"
        description="Melty — мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости в Нальчике."
        path="/"
      />
      <Hero />
      <About />
      <Location />
      <MenuSection />
      <BackToTop />
    </>
  );
```

- [ ] **Step 2: Add SEO to MenuPage**

In `src/pages/MenuPage.tsx`, add import at top:

```tsx
import { SEO } from '../components';
```

Find the return statement and add `<SEO>` as the first child inside the outermost wrapper element (likely a `<div>`). Wrap in fragment if needed:

```tsx
<SEO
  title="Меню"
  description="Меню кафе Melty: завтраки, десерты, вафли, панкейки, напитки и авторские сладости."
  path="/menu"
/>
```

- [ ] **Step 3: Add SEO to GalleryPage**

In `src/pages/GalleryPage.tsx`, add import at top:

```tsx
import { SEO } from '../components';
```

Add as first child inside return wrapper:

```tsx
<SEO
  title="Галерея"
  description="Фотографии кафе Melty — атмосфера, интерьер и наши десерты."
  path="/gallery"
/>
```

- [ ] **Step 4: Add SEO to AboutPage**

In `src/pages/AboutPage.tsx`, add import at top:

```tsx
import { SEO } from '../components';
```

Add as first child inside the `<div className="about-page">`:

```tsx
<SEO
  title="О нас"
  description="История шоколадного кафе Melty в Нальчике — наша философия, мастерство и атмосфера уюта."
  path="/about"
/>
```

- [ ] **Step 5: Add SEO to FeedbackPage**

In `src/pages/FeedbackPage.tsx`, add import at top:

```tsx
import { SEO } from '../components';
```

Add as first child inside the return wrapper:

```tsx
<SEO
  title="Отзывы"
  description="Оставьте отзыв о кафе Melty — ваше мнение важно для нас."
  path="/feedback"
/>
```

- [ ] **Step 6: Verify all pages in dev**

Run: `npm run dev` — navigate to each page and verify the browser tab title changes:
- `/` → "Melty"
- `/menu` → "Меню"
- `/gallery` → "Галерея"
- `/about` → "О нас"
- `/feedback` → "Отзывы"

- [ ] **Step 7: Commit**

```bash
git add src/pages/HomePage.tsx src/pages/MenuPage.tsx src/pages/GalleryPage.tsx src/pages/AboutPage.tsx src/pages/FeedbackPage.tsx
git commit -m "feat: add per-page SEO meta tags to all routes"
```

---

### Task 5: Add Structured Data (JSON-LD)

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/MenuPage.tsx`
- Modify: `src/pages/GalleryPage.tsx`
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/FeedbackPage.tsx`

- [ ] **Step 1: Add Restaurant schema to HomePage**

In `src/pages/HomePage.tsx`, add the JSON-LD object before the return and pass it to `<SEO>`:

```tsx
const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Melty',
  description: 'Мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости.',
  url: 'https://melty-cafe.ru',
  telephone: '+7-988-939-90-00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Героя России Т.М. Тамазова, 15',
    addressLocality: 'Нальчик',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.472607,
    longitude: 43.579251,
  },
  image: 'https://melty-cafe.ru/data/melty.webp',
  servesCuisine: ['Десерты', 'Кафе', 'Шоколад'],
  priceRange: '$$',
  hasMenu: 'https://melty-cafe.ru/menu',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '23:00',
  },
};
```

Update the `<SEO>` component to pass `jsonLd`:

```tsx
<SEO
  title="Melty"
  description="Melty — мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости в Нальчике."
  path="/"
  jsonLd={restaurantSchema}
/>
```

- [ ] **Step 2: Add BreadcrumbList to MenuPage**

In `src/pages/MenuPage.tsx`, add the breadcrumb object and pass to `<SEO>`:

```tsx
const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
    { '@type': 'ListItem', position: 2, name: 'Меню', item: 'https://melty-cafe.ru/menu' },
  ],
};
```

Update `<SEO>` to include `jsonLd={breadcrumb}`.

- [ ] **Step 3: Add BreadcrumbList to GalleryPage**

Same pattern in `src/pages/GalleryPage.tsx`:

```tsx
const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
    { '@type': 'ListItem', position: 2, name: 'Галерея', item: 'https://melty-cafe.ru/gallery' },
  ],
};
```

Update `<SEO>` to include `jsonLd={breadcrumb}`.

- [ ] **Step 4: Add BreadcrumbList to AboutPage**

Same pattern in `src/pages/AboutPage.tsx`:

```tsx
const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
    { '@type': 'ListItem', position: 2, name: 'О нас', item: 'https://melty-cafe.ru/about' },
  ],
};
```

Update `<SEO>` to include `jsonLd={breadcrumb}`.

- [ ] **Step 5: Add BreadcrumbList to FeedbackPage**

Same pattern in `src/pages/FeedbackPage.tsx`:

```tsx
const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
    { '@type': 'ListItem', position: 2, name: 'Отзывы', item: 'https://melty-cafe.ru/feedback' },
  ],
};
```

Update `<SEO>` to include `jsonLd={breadcrumb}`.

- [ ] **Step 6: Verify JSON-LD in dev tools**

Run: `npm run dev` — open DevTools → Elements → search for `application/ld+json`. Verify:
- Homepage has Restaurant schema
- Sub-pages have BreadcrumbList schema

- [ ] **Step 7: Commit**

```bash
git add src/pages/HomePage.tsx src/pages/MenuPage.tsx src/pages/GalleryPage.tsx src/pages/AboutPage.tsx src/pages/FeedbackPage.tsx
git commit -m "feat: add JSON-LD structured data (Restaurant + BreadcrumbList)"
```

---

### Task 6: Set Up Build-time Prerendering

**Files:**
- Create: `scripts/prerender.mjs`
- Modify: `package.json`

- [ ] **Step 1: Install puppeteer as devDependency**

```bash
npm install -D puppeteer
```

- [ ] **Step 2: Create the prerender script**

Create `scripts/prerender.mjs`:

```js
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;
const ROUTES = ['/', '/menu', '/gallery', '/about', '/feedback'];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
};

// Simple static file server
function createStaticServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    // Directory → index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    // SPA fallback
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST, 'index.html');
    }

    const ext = path.extname(filePath);
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': `${mime}; charset=utf-8` });
    res.end(fs.readFileSync(filePath));
  });
}

async function prerender() {
  console.log('Starting prerender...');

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: true });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Rendering ${route}...`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait for loading screen to finish (800ms first load + transition)
    await new Promise((r) => setTimeout(r, 2000));

    const html = await page.content();
    await page.close();

    // Determine output path
    const outputDir = route === '/'
      ? DIST
      : path.join(DIST, route);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputFile, html, 'utf-8');
    console.log(`  → ${path.relative(DIST, outputFile)}`);
  }

  await browser.close();
  server.close();
  console.log('Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
```

- [ ] **Step 3: Update package.json scripts**

In `package.json`, update the `scripts` section:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build && node scripts/prerender.mjs",
  "lint": "eslint .",
  "preview": "vite preview",
  "prerender": "node scripts/prerender.mjs"
}
```

This makes `npm run build` automatically prerender after building. The standalone `prerender` script allows re-running prerender without rebuilding.

- [ ] **Step 4: Verify the build + prerender works**

Run: `npm run build`

Expected output includes:
```
Starting prerender...
Static server on http://localhost:4173
Rendering /...
  → index.html
Rendering /menu...
  → menu/index.html
Rendering /gallery...
  → gallery/index.html
Rendering /about...
  → about/index.html
Rendering /feedback...
  → feedback/index.html
Prerender complete!
```

- [ ] **Step 5: Verify prerendered HTML contains real content**

Run: `head -50 dist/menu/index.html`

Expected: the HTML should contain:
- `<title>Меню</title>` (from react-helmet-async)
- `<meta name="description" content="Меню кафе Melty:...">`
- `<meta property="og:title" content="Меню">`
- Actual menu content (category names, item names) in the `<body>`
- `<script type="application/ld+json">` with BreadcrumbList

Run: `head -80 dist/index.html`

Expected: the HTML should contain:
- `<title>Melty</title>`
- `<script type="application/ld+json">` with Restaurant schema
- Actual page content in the `<body>`

- [ ] **Step 6: Commit**

```bash
git add scripts/prerender.mjs package.json package-lock.json
git commit -m "feat: add build-time prerendering with Puppeteer for Yandex/Google SEO"
```

---

### Task 7: Final Verification and Cleanup

**Note — Yandex verification:** After deploying, the user must register the site in Yandex Webmaster and add `<meta name="yandex-verification" content="...">` to `index.html` with the provided code. This is a manual post-deploy step.

**Note — hreflang:** The spec mentions hreflang tags, but the site's i18n is client-side only (React Context toggle) — both languages are served from the same URL. hreflang requires distinct URLs per language (e.g., `/en/menu`). Since that's not the case here, hreflang tags are not applicable. The `<html lang="ru">` declaration is sufficient.

- [ ] **Step 1: Semantic HTML audit**

Check each page for proper heading hierarchy. Open DevTools console on each page and run:

```js
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => console.log(h.tagName, h.textContent.trim().slice(0, 50)))
```

Verify:
- Each page has exactly one `<h1>`
- No heading levels are skipped (h1 → h2 → h3, not h1 → h3)
- `<main>` wraps page content (already done in `App.tsx`)

If any issues are found, fix them before proceeding.

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Verify it completes without errors.

- [ ] **Step 3: Check dist/ output structure**

Run: `find dist -name "index.html" -o -name "robots.txt" -o -name "sitemap.xml" -o -name ".htaccess" | sort`

Expected:
```
dist/.htaccess
dist/about/index.html
dist/feedback/index.html
dist/gallery/index.html
dist/index.html
dist/menu/index.html
dist/robots.txt
dist/sitemap.xml
```

- [ ] **Step 4: Validate robots.txt**

Run: `cat dist/robots.txt`

Expected: contains `Sitemap: https://melty-cafe.ru/sitemap.xml` and `Host: melty-cafe.ru`.

- [ ] **Step 5: Validate sitemap.xml**

Run: `cat dist/sitemap.xml`

Expected: 5 `<url>` entries with correct `<loc>` values.

- [ ] **Step 6: Spot-check prerendered pages for SEO elements**

For each prerendered page, verify these elements exist in the HTML source:
- `<title>` with correct page title
- `<meta name="description">` with correct description
- `<link rel="canonical">` with correct URL
- `<meta property="og:*">` tags
- `<meta name="twitter:*">` tags
- `<script type="application/ld+json">` with correct schema

Run: `grep -c "application/ld+json" dist/index.html dist/menu/index.html dist/about/index.html dist/gallery/index.html dist/feedback/index.html`

Expected: each file shows count of 1.

- [ ] **Step 7: Run ESLint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 8: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "chore: final SEO verification and cleanup"
```
