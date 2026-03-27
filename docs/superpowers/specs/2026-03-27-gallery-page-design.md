# Gallery Page (Галерея) — Design Spec

## Context

Melty cafe website needs a gallery page to showcase the cafe's atmosphere, food, and craft through curated photography. The page draws inspiration from [Balance Coffee's Daily page](https://balancecoffee.netlify.app/#/daily) — a masonry photo grid with interspersed quote cards — but adapted to Melty's dark, warm, cozy chocolate-cafe aesthetic.

80 photos are available across three categories: food (38), inside (25), and items (17).

## Page Structure

### 1. Hero Section

Consistent with existing Home and Menu page heroes:

- **Background:** Layered cream (gradient + dot pattern + radial glow) — same as `menu-page__hero`
- **Content (centered, staggered `heroReveal` animations):**
  - Count label: "80 фотографий" (caramel, uppercase, letterspaced)
  - Title: "Галерея" (serif, large, chocolate color)
  - Decorative rule: line — dot — line (same as Menu page)
  - Subtitle: "Загляните в атмосферу нашего кафе" (serif italic, caramel)
  - Scroll indicator: "листайте вниз" + down arrow
- **Floating accent dots** (3 dots, same as other heroes)
- **Bottom fade:** Cream → transitions into the dark masonry background below

### 2. Masonry Photo Grid

- **Background:** Dark chocolate (#1E120B) — creates dramatic contrast after the cream hero
- **Layout:** CSS `column-count: 3` with `16px` column-gap
- **Cards have `break-inside: avoid`**, `16px` margin-bottom, `border-radius: 12px`, overflow hidden
- **Photo selection:** ~32 photos mixed organically from all 3 folders. Not grouped by category. Variety of aspect ratios for visual interest.
- **Photo cards:**
  - Images displayed with `object-fit: cover`
  - Varying heights to create natural masonry flow
  - Subtle `scale(1.03)` on hover with smooth transition
  - Click opens lightbox modal
- **Quote cards (3 total)**, interspersed at roughly even intervals:
  - Cream background (`var(--cream)`)
  - Large quotation mark in serif font (caramel, 50% opacity)
  - Quote text in serif italic (chocolate color)
  - Quotes:
    1. "Шоколад — это не просто вкус. Это тёплое объятие, застывшее в каждом кусочке."
    2. "Уют — это когда за окном дождь, а у тебя в руках горячая чашка и шоколадный десерт."
    3. "Лучшие моменты начинаются с аромата свежего кофе и кусочка счастья на тарелке."
- **Scroll animations:** Cards fade in via IntersectionObserver with staggered delays per card

### 3. Lightbox Modal

- **Overlay:** Dark semi-transparent background (`rgba(0,0,0,0.92)`)
- **Image:** Centered, scaled up with `max-width: 90vw`, `max-height: 85vh`, `border-radius: 12px`
- **Navigation:** Left/right arrow buttons, keyboard arrows, swipe on mobile
- **Close:** X button top-right, Escape key
- **Counter:** "3 / 80" at bottom center
- **Animation:** Fade-in overlay + scale-up image on open
- **Scroll lock:** Use existing `window.lenis` pattern from MenuItemModal
- **Portal-based** rendering (same pattern as MenuItemModal)

### 4. Responsive Behavior

| Breakpoint | Columns | Notes |
|-----------|---------|-------|
| Desktop (>768px) | 3 | Full masonry layout |
| Tablet (<=768px) | 2 | Reduced columns |
| Mobile (<=480px) | 1 | Single column stack |

Hero responsive behavior matches Menu page hero exactly.

## Files to Create

- `src/pages/GalleryPage.tsx` — Page component
- `src/pages/GalleryPage.css` — Page styles

## Files to Modify

- `src/App.tsx` — Add `/gallery` route
- `src/components/Header.tsx` — Add "Галерея" nav link

## Existing Code to Reuse

- Hero pattern from `src/pages/MenuPage.tsx` (lines 193-276) and `src/pages/MenuPage.css` (lines 8-270)
- Modal pattern from `src/components/Menu/MenuItemModal.tsx` (portal, scroll lock, keyboard nav, swipe)
- CSS variables from `src/index.css`
- Lenis scroll lock via `window.lenis`
- `heroReveal` / `mpReveal` keyframe pattern
- IntersectionObserver pattern from MenuPage section reveals

## Navigation Integration

Add "Галерея" link to Header between "Меню" and "Отзывы" in the nav. Uses `<Link to="/gallery">` same as other page routes.

## Verification

1. Run `npm run dev` and navigate to `/gallery`
2. Verify hero matches Home/Menu hero style and animations
3. Verify masonry grid renders 3 columns on desktop, 2 on tablet, 1 on mobile
4. Verify photos load with lazy loading and fade-in animations
5. Click a photo — lightbox opens with correct image
6. Navigate with arrows and keyboard in lightbox
7. Verify quotes render correctly between photos
8. Check header nav includes Галерея link and highlights when active
9. Run `npm run build` to verify no TypeScript errors
