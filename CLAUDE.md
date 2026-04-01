# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Melty is a Russian-language website for a chocolate/dessert cafe. Built with React 19 + TypeScript + Vite. The site showcases menu items and cafe information with the tagline "Мир вкуса и уюта" (World of taste and comfort). No ordering/reservations functionality — feedback is submitted via Telegram Bot API.

## Commands

```bash
npm run dev      # Start Vite dev server with hot reload
npm run build    # Type-check (tsc -b) then build for production
npm run lint     # Run ESLint on all .ts/.tsx files
npm run preview  # Preview production build locally
```

No test framework is configured.

## Architecture

### Routing & Pages

React Router (BrowserRouter) with five routes defined in `App.tsx`:

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Composes Hero, About, Location, MenuSection, BackToTop |
| `/menu` | MenuPage | Full menu with sticky category nav, scroll spy, featured cards, item modals |
| `/gallery` | GalleryPage | Photo gallery |
| `/about` | AboutPage | Cafe information |
| `/feedback` | FeedbackPage | Star rating + text form, submits to Telegram Bot API |

### Key Patterns

- **Lenis smooth scroll** — Global `Lenis` instance created in `App.tsx`, exposed via `window.lenis` for modal scroll lock and programmatic scrolling
- **Menu data** — All menu items defined in `src/data/menu.ts` as a typed array (`MenuItem[]`) with category union type (`MenuCategory`). Category display order is controlled in `MenuPage.tsx`
- **Component barrel exports** — Shared components re-exported from `src/components/index.ts`
- **CSS per component** — Each component/page has a co-located `.css` file (no CSS modules, no CSS-in-JS). BEM-like naming: `menu-page__nav-btn--active`
- **Feedback delivery** — `FeedbackPage` sends reviews directly to Telegram via bot token in `src/config/telegram.ts`
- **Map** — Leaflet + react-leaflet + OpenStreetMap (no API key needed)

### CSS Design System (`src/index.css`)

All styling uses CSS custom properties defined in `:root`:

- **Colors**: `--cream`, `--cream-warm`, `--cream-deep`, `--chocolate`, `--chocolate-light`, `--caramel`, `--orange`, `--orange-soft`, `--latte`
- **Fonts**: `--font-serif` (Cormorant Garamond), `--font-sans` (Nunito). Montserrat 800/900 is also loaded.
- **Spacing**: `--section-padding`, `--container-padding` (clamp-based responsive)
- **Shadows**: `--shadow-soft`, `--shadow-medium`, `--shadow-lifted`
- **Radii**: `--radius-sm` through `--radius-xl`

### Static Assets

- `public/data/logo.png` — White script on dark brown circle
- `public/data/logo_dark.png` — Dark variant
- `public/data/melty.png` — Hero image
- `public/data/menu/` — ~99 menu item images

## Design Requirements

The site must avoid generic "AI slop" aesthetic:

- Use distinctive fonts (NOT Inter, Roboto, Arial) — current fonts are Cormorant Garamond (headings), Nunito (body), Montserrat (display)
- Light, warm luxury aesthetic with cream/beige backgrounds and dark chocolate accents
- Atmospheric backgrounds with CSS gradients/patterns (not solid colors)
- High-impact animations with staggered reveals
- Draw inspiration from IDE themes and cultural aesthetics — make unexpected, context-specific choices

## Brand Color Palette

- **Dark Chocolate Brown** (#5C3D2E / CSS `--chocolate` #4A2C1A) — Primary brand color
- **Warm Coffee/Caramel Brown** (#8B6544 / CSS `--caramel` #8B6347) — Dominant warm tone
- **Warm Amber/Golden** (#C9994A) — Cozy golden glow
- **Cream/Beige** (#F0E6D6 / CSS `--cream` #F8F3ED) — Backgrounds and overlays
- **White** (#FFFFFF) — Logo script, text accents
- **Deep Burgundy/Maroon** (#7B2D3B) — Subtle accent
- **Orange** (CSS `--orange` #E85A24) — CTA accent color

Overall vibe: Light, warm luxury — cream/beige backgrounds with dark chocolate text and accents. Airy, elegant, inviting — "upscale artisanal cafe" aesthetic.

## Technical Configuration

- TypeScript strict mode enabled with no unused locals/parameters
- ESLint 9 flat config with React Hooks and React Refresh plugins
- Vite 7 with React fast refresh
- Target: ES2022 for modern browsers
