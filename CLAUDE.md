# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChocoDips is a Russian-language website for a dessert cafe in Nalchik, Russia. Built with React 19 + TypeScript + Vite. The site showcases menu items and cafe information (no ordering/reservations functionality).

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
- **data/** - Content assets
  - `logo.png`, `chocodips.jpg` - Cafe logos
  - `menu/` - 18 menu item images (one per dessert)
- **public/** - Static assets served directly by path

## Technical Configuration

- TypeScript strict mode enabled with no unused locals/parameters
- ESLint 9 flat config with React Hooks and React Refresh plugins
- Vite 7 with React fast refresh
- Target: ES2022 for modern browsers

## Design Requirements

From README.md - the site must avoid generic "AI slop" aesthetic:

- Use distinctive fonts (NOT Inter, Roboto, Arial)
- Cohesive color palette derived from cafe branding/logo
- Atmospheric backgrounds with CSS gradients/patterns
- High-impact animations with staggered reveals
- Draw inspiration from IDE themes and cultural aesthetics

## Content

Menu items are Russian desserts (18 total): БРАУНИ-КРЕП, БУРРАТА, ВАФЛИ, КРЕП С БАНАНОМ И ШОКОЛАДОМ, КРЕП-РОЛЛ, ПАНКЕЙКИ С ШОКОЛАДОМ, ПАНКЕЙКИ С ЯГОДАМИ, ПРОФИТРОЛИ, СИННАБОН, СУШИ КРЕП, ФИНИКОВЫЙ ДЕСЕРТ, ФИСТАШКОВЫЙ КНАФЕ, ФОНДАН, ФОНДЮ, ЧИЗКЕЙК САН-САБАСТЬЯН, ЧОКО БУМ.

Map integration planned with Leaflet + OpenStreetMap (no API key needed).
