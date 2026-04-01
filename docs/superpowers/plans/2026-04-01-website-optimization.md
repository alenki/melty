# Website Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize the Melty website for faster loading, better SEO, and smaller bundle size through code splitting, Vite build config, font loading, image handling in code, and CSS cleanup.

**Architecture:** Route-based lazy loading with Suspense, Vite manual chunks to separate vendor/leaflet code, font loading moved from CSS @import to HTML preconnect + link, SEO meta tags added to index.html, and `decoding="async"` added to images missing it.

**Tech Stack:** React 19, Vite 7, TypeScript, React Router

**Note:** Image file compression (converting JPGs/PNGs to WebP, resizing) is NOT included in this plan — that requires external tools (ImageMagick/Sharp) and is a separate effort. This plan covers code-level optimizations only.

---

### Task 1: Route-Based Code Splitting with React.lazy

**Files:**
- Modify: `src/App.tsx:1-11,78-84`

- [ ] **Step 1: Add lazy imports and Suspense to App.tsx**

Replace the static imports and route rendering in `src/App.tsx`:

```tsx
// Replace lines 1-11 with:
import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { LanguageProvider } from './i18n';
import { Header, Footer, LoadingScreen } from './components';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
```

Then wrap the `<Routes>` block (around line 78) with Suspense:

```tsx
<Suspense fallback={<LoadingScreen isLoading={true} />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/feedback" element={<FeedbackPage />} />
  </Routes>
</Suspense>
```

- [ ] **Step 2: Verify the dev server works**

Run: `npm run dev`
Expected: Site loads, navigating between pages shows the loading screen briefly while chunks load.

- [ ] **Step 3: Verify production build**

Run: `npm run build`
Expected: Build succeeds. Check `dist/assets/` — there should be separate JS chunks for each page instead of one monolithic bundle.

---

### Task 2: Vite Build Configuration — Manual Chunks

**Files:**
- Modify: `vite.config.ts`

- [ ] **Step 1: Add manual chunks and build options**

Replace the entire `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'leaflet': ['leaflet', 'react-leaflet'],
        }
      }
    }
  }
})
```

- [ ] **Step 2: Verify production build produces separate chunks**

Run: `npm run build`
Expected: Build succeeds. `dist/assets/` should contain separate `vendor-*.js` and `leaflet-*.js` chunks.

---

### Task 3: Font Loading Optimization

**Files:**
- Modify: `index.html:1-16`
- Modify: `src/index.css:1-2`

- [ ] **Step 1: Move font loading from CSS @import to HTML preconnect + link**

In `index.html`, add preconnect hints and the font stylesheet link inside `<head>`, before the `<title>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@800;900&family=Nunito:wght@300;400;500;600;700&display=swap">
```

- [ ] **Step 2: Remove the @import from index.css**

In `src/index.css`, delete line 2:

```css
/* DELETE THIS LINE: */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@800;900&family=Nunito:wght@300;400;500;600;700&display=swap');
```

Replace with a comment:

```css
/* Fonts loaded via <link> in index.html for non-blocking load */
```

- [ ] **Step 3: Verify fonts still load correctly**

Run: `npm run dev`
Expected: Fonts render correctly. No FOUT (flash of unstyled text) — `display=swap` handles this.

---

### Task 4: SEO & Meta Tags

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Open Graph and additional meta tags**

In `index.html` `<head>`, after the existing `<meta>` tags and before `<title>`, add:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Melty — мир вкуса и уюта" />
<meta property="og:description" content="Шоколадные десерты, крепы, панкейки и авторские сладости." />
<meta property="og:image" content="/data/melty.png" />
<meta property="og:locale" content="ru_RU" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Melty — мир вкуса и уюта" />
<meta name="twitter:description" content="Шоколадные десерты, крепы, панкейки и авторские сладости." />
<meta name="twitter:image" content="/data/melty.png" />
```

- [ ] **Step 2: Remove unnecessary preload, add critical preconnect**

Remove the logo preload (it's not render-critical):

```html
<!-- DELETE: -->
<link rel="preload" as="image" href="/data/logo.png" />
```

The font preconnects from Task 3 replace this as the critical preload.

- [ ] **Step 3: Verify meta tags render**

Run: `npm run dev`
Open browser dev tools → Elements → `<head>`. Confirm all OG/Twitter meta tags are present.

---

### Task 5: Add `decoding="async"` to Modal and Lightbox Images

**Files:**
- Modify: `src/components/Menu/MenuItemModal.tsx:75-79`
- Modify: `src/components/Menu/MenuItem.tsx:53-58`

- [ ] **Step 1: Add decoding="async" to MenuItemModal image**

In `src/components/Menu/MenuItemModal.tsx`, around line 76, add the `decoding` attribute to the `<img>`:

```tsx
<img
  src={item.image}
  alt={displayName}
  className="modal-slider__image"
  decoding="async"
/>
```

- [ ] **Step 2: Add decoding="async" to MenuItem image**

In `src/components/Menu/MenuItem.tsx`, around line 54, add the `decoding` attribute:

```tsx
<img
  src={item.image}
  alt={displayName}
  className={`menu-item__image ${imageLoaded ? 'menu-item__image--loaded' : ''}`}
  onLoad={() => setImageLoaded(true)}
  onError={() => setImageError(true)}
  loading="lazy"
  decoding="async"
/>
```

- [ ] **Step 3: Verify images still load correctly**

Run: `npm run dev`
Expected: Menu page and item modals display images without visual regressions.

---

### Task 6: Move @types/leaflet to devDependencies

**Files:**
- Modify: `package.json:13`

- [ ] **Step 1: Move @types/leaflet**

Run:

```bash
npm install --save-dev @types/leaflet && npm uninstall @types/leaflet
```

Wait — this won't work cleanly. Instead, manually edit `package.json`: move `"@types/leaflet": "^1.9.21"` from `dependencies` to `devDependencies`.

- [ ] **Step 2: Verify build still works**

Run: `npm run build`
Expected: Build succeeds — type packages are only needed at compile time, not runtime.

---

### Task 7: CSS Noise Overlay Optimization

**Files:**
- Modify: `src/index.css:177-188`

- [ ] **Step 1: Replace SVG data URL noise pattern with lightweight CSS**

In `src/index.css`, replace the `.noise-overlay` block:

```css
/* Noise Texture Overlay */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image:
    repeating-conic-gradient(
      rgba(74, 44, 26, 0.08) 0% 25%,
      transparent 0% 50%
    );
  background-size: 4px 4px;
}
```

This creates a similar subtle texture without the expensive inline SVG data URL.

- [ ] **Step 2: Verify visual appearance**

Run: `npm run dev`
Expected: Subtle noise texture is still visible over the page at very low opacity. The effect should be nearly identical.

---

### Task 8: Netlify Cache Headers

**Files:**
- Modify: `netlify.toml`

- [ ] **Step 1: Add cache headers for static assets**

Add headers configuration to `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/data/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This sets:
- Vite-hashed assets (`/assets/*`): 1-year immutable cache (fingerprinted filenames handle cache busting)
- Static images/data (`/data/*`): 30-day cache

- [ ] **Step 2: Verify netlify.toml is valid**

Run: `npm run build`
Expected: Build still succeeds (netlify.toml is not part of the build, but verifying nothing broke).

---

### Task 9: Final Verification

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: No errors. Output should show separate chunks in `dist/assets/`.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No new lint errors introduced.

- [ ] **Step 3: Preview production build**

Run: `npm run preview`
Expected: Site loads correctly, all pages navigate properly, images display, fonts render.
