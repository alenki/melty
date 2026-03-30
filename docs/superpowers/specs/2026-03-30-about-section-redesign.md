# About Section Redesign — Split Layout

## Context

The home page "О нас" section (`src/components/About.tsx`) is the simplest section on the page: centered text on a cream gradient with no images, no animations, and no visual richness. It feels flat compared to the Hero (layered backgrounds, swirls, floating dots, staggered reveals) and Location (map + info card grid). This redesign brings the About section up to the visual standard of the rest of the site.

## Design

**Layout:** Replace the centered single-column text block with a two-column split grid (`1fr 1fr`). Left side holds overlapping photo cards; right side holds the existing text content left-aligned.

### Left Side — Photo Cards

- **Two overlapping photos** in a stacked arrangement:
  - Photo 1: `260×320px`, `rotate(-5deg)`, positioned at top-left, `z-index: 1`
  - Photo 2: `240×300px`, `rotate(3deg)`, offset `top: 60px; left: 100px`, `z-index: 2`
  - Both have `border-radius: 16px` and `box-shadow: 0 8px 30px rgba(74, 44, 26, 0.18)`
- **Dot pattern background** on the image side (matches Hero's pattern style, 0.25 opacity)
- **3 floating accent dots** (orange, caramel, gold) with gentle `floatSlow` animation (6–10s, staggered delays)
- **Photos:** User will provide 2 real cafe/dessert images to place in `public/data/` (e.g., `about-1.jpg`, `about-2.jpg`)

### Right Side — Text Content

- **Flourish header** (existing: decorative lines + drop icon) — kept as-is
- **Title** "О нас" — `font-size: 2.75rem` (larger than current), left-aligned
- **Body text** — same two paragraphs, left-aligned, `line-height: 1.8`
- **CTA link** "Наша история →" — kept as-is, left-aligned

### Animations (Scroll-Reveal)

All animations use `IntersectionObserver` at 15% threshold with the site's standard easing `cubic-bezier(0.16, 1, 0.3, 1)`.

- **Photo cards:** Slide in from `translateX(-30px) + opacity: 0`. Staggered: photo 1 at 0.3s, photo 2 at 0.5s delay.
- **Text elements:** Slide in from `translateY(20px) + opacity: 0`. Staggered: flourish 0.2s, title 0.35s, body 0.5s, CTA 0.65s.
- **Floating dots:** Infinite `floatSlow` animation (same pattern as Hero dots), 6–10s durations.

### Responsive Behavior

- **≥768px:** Two-column grid as described
- **<768px:** Stack vertically — photo cards on top (centered, smaller stack: `180×200px` and `170×190px`), centered text below. Dot pattern hidden. Parallax disabled.
- **`prefers-reduced-motion: reduce`:** All animations disabled, elements at final state.

## Files to Modify

- `src/components/About.tsx` — Restructure JSX to split layout with image side
- `src/components/About.css` — Complete rewrite for grid layout, photo cards, animations
- `public/data/` — User adds 2 photos (e.g., `about-1.jpg`, `about-2.jpg`)

## Verification

1. `npm run build` passes with no errors
2. `npm run dev` — visually verify:
   - Desktop: two-column layout, photos left, text right
   - Scroll down to section: photo cards slide in, text reveals with stagger
   - Floating dots animate gently
   - Resize to mobile: stacks vertically, photos on top centered
3. Check browser DevTools for `prefers-reduced-motion` — animations should be disabled
