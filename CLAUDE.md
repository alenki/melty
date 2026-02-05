# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Melty is a Russian-language website for a chocolate/dessert cafe. Built with React 19 + TypeScript + Vite. The site showcases menu items and cafe information with the tagline "Мир вкуса и уюта" (World of taste and comfort). No ordering/reservations functionality.

## Commands

```bash
npm run dev      # Start Vite dev server with hot reload
npm run build    # Type-check (tsc -b) then build for production
npm run lint     # Run ESLint on all .ts/.tsx files
npm run preview  # Preview production build locally
```

## Architecture

- **src/** - React application source
  - `main.tsx` - Entry point
  - `App.tsx` - Root component
- **public/data/** - Content assets
  - `logo.png` - Main Melty logo (white script on dark brown circle)
  - `logo_dark.png` - Dark variant logo
  - `melty.png` - Cafe hero image
  - `menu/` - ~99 menu item images

## Technical Configuration

- TypeScript strict mode enabled with no unused locals/parameters
- ESLint 9 flat config with React Hooks and React Refresh plugins
- Vite 7 with React fast refresh
- Target: ES2022 for modern browsers

## Design Requirements

From README.md - the site must avoid generic "AI slop" aesthetic:

- Use distinctive fonts (NOT Inter, Roboto, Arial)
- Cohesive color palette derived from Melty branding (see README.md for full palette)
- Dark and moody atmosphere with warm, intimate lighting
- Atmospheric backgrounds with CSS gradients/patterns
- High-impact animations with staggered reveals
- Draw inspiration from IDE themes and cultural aesthetics

## Brand Color Palette

- **Dark Chocolate Brown** (#5C3D2E) — Primary brand color, logo background
- **Warm Coffee/Caramel Brown** (#8B6544) — Dominant throughout
- **Warm Amber/Golden** (#C9994A) — Cozy golden glow from lighting
- **Cream/Beige** (#F0E6D6) — Packaging, plates, text overlays
- **White** (#FFFFFF) — Logo script, text accents
- **Deep Burgundy/Maroon** (#7B2D3B) — Subtle accent color

Overall vibe: Dark and moody with warm, intimate lighting — "cozy chocolate café in winter" aesthetic.

## Map Integration

Planned with Leaflet + OpenStreetMap (no API key needed).
