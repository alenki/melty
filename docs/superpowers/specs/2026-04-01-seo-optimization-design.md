# SEO Optimization — Design Spec

## Overview

God-tier SEO optimization for melty-cafe.ru — a React SPA for a chocolate cafe in Нальчик. Targets both Google and Yandex equally. The site is hosted on reg.ru shared hosting (Apache/.htaccess, no Node.js runtime).

Core strategy: **build-time prerendering** to generate static HTML for all 5 routes, combined with per-page meta tags, structured data, and Yandex-specific optimizations.

## 1. Build-time Prerendering

**Tool:** `vite-plugin-prerender` (Vite-native, uses Puppeteer to render each route at build time)

**Output structure:**
```
dist/
  index.html            → /
  menu/index.html       → /menu
  gallery/index.html    → /gallery
  about/index.html      → /about
  feedback/index.html   → /feedback
  robots.txt
  sitemap.xml
```

Each HTML file contains the fully-rendered DOM. React hydrates on top for interactivity — users get the same SPA experience, crawlers get real content.

**Build integration:** Added as a Vite plugin in `vite.config.ts` with `postBuild` hook. The existing `npm run build` command produces prerendered output with no workflow changes.

## 2. Per-page Meta Tags

**Tool:** `react-helmet-async` — manages `<head>` elements per route.

**Wrapper component:** `src/components/SEO.tsx` — reusable component accepting title, description, canonical URL, OG image, and optional JSON-LD.

**Page titles (clean, no brand suffix):**

| Route | Title |
|-------|-------|
| `/` | Melty |
| `/menu` | Меню |
| `/gallery` | Галерея |
| `/about` | О нас |
| `/feedback` | Отзывы |

**Meta descriptions (unique per page, Russian, keyword-rich):**

| Route | Description |
|-------|-------------|
| `/` | Melty — мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости в Нальчике. |
| `/menu` | Меню кафе Melty: завтраки, десерты, вафли, панкейки, напитки и авторские сладости. |
| `/gallery` | Фотографии кафе Melty — атмосфера, интерьер и наши десерты. |
| `/about` | История шоколадного кафе Melty в Нальчике — наша философия, мастерство и атмосфера уюта. |
| `/feedback` | Оставьте отзыв о кафе Melty — ваше мнение важно для нас. |

**Per-page OG/Twitter tags:**
- `og:title`, `og:description`, `og:url` — unique per page
- `og:image` — homepage uses hero image, other pages can use the same or page-specific
- `og:type` — `website` for homepage, `restaurant.menu` for menu page
- `og:locale` — `ru_RU`
- `twitter:card` — `summary_large_image`
- Canonical `<link rel="canonical">` per page

## 3. Structured Data (JSON-LD)

### Homepage — Restaurant schema
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Melty",
  "description": "Мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости.",
  "url": "https://melty-cafe.ru",
  "telephone": "+7-988-939-90-00",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Героя России Т.М. Тамазова, 15",
    "addressLocality": "Нальчик",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.472607,
    "longitude": 43.579251
  },
  "image": "https://melty-cafe.ru/data/melty.webp",
  "servesCuisine": ["Десерты", "Кафе", "Шоколад"],
  "priceRange": "$$",
  "hasMenu": "https://melty-cafe.ru/menu",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00",
    "closes": "23:00"
  }
}
```

> Geo coordinates from `Location.tsx`, hours from translations ("Ежедневно 08:00 — 23:00").

### All pages — BreadcrumbList schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://melty-cafe.ru/" },
    { "@type": "ListItem", "position": 2, "name": "Меню", "item": "https://melty-cafe.ru/menu" }
  ]
}
```

## 4. Static SEO Files

### robots.txt (in `public/`)
```
User-agent: *
Allow: /

Sitemap: https://melty-cafe.ru/sitemap.xml
Host: melty-cafe.ru
```

### sitemap.xml (in `public/`)
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

## 5. .htaccess Configuration

Place in the `dist/` output (copied from `public/` at build time):

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

## 6. Yandex-specific Optimizations

- `Host: melty-cafe.ru` in robots.txt (preferred domain directive)
- `<meta name="yandex-verification" content="...">` — user provides verification code from Yandex Webmaster
- Regional targeting configured in Yandex Webmaster (Нальчик, Кабардино-Балкарская Республика)
- Proper `hreflang` tags: `<link rel="alternate" hreflang="ru" href="...">` and `<link rel="alternate" hreflang="en" href="...">` per page

## 7. Semantic HTML Audit

During implementation, verify:
- Each page has exactly one `<h1>`
- Heading hierarchy is sequential (h1 → h2 → h3, no skips)
- Images have descriptive `alt` text (already good in current code)
- `<main>` wraps page content (already done in App.tsx)
- `<nav>` used for navigation elements
- `<section>` and `<article>` used appropriately

## 8. index.html Updates

- Remove static OG/Twitter tags from `index.html` (managed by react-helmet-async per page)
- Keep `<meta charset>`, `<meta viewport>`, `<meta theme-color>`, font preconnects
- Add `<link rel="apple-touch-icon">` if available
- Keep `<html lang="ru">`

## Out of Scope

- Yandex Metrica / Google Analytics integration (separate task)
- Google Search Console / Yandex Webmaster account setup (manual, post-deploy)
- Content marketing / blog pages
- SSR / framework migration
