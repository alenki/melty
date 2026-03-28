# About Page — Origin Story Section

## Context

The About page has a full-viewport hero titled "Наша история" (Our Story) but no actual origin story content. The hero transitions directly into the craft section (Chapter 2) with food photos. This design adds a text-only origin narrative between the hero and craft sections, telling visitors how Melty was founded.

## Design

### Position
Insert as a new section between Chapter 1 (hero) and Chapter 2 (craft) in `AboutPage.tsx`.

### Layout: Centered Narrative (Text-Only)
Centered, single-column layout — no photos, no heavy visuals. This creates breathing room before the photo-heavy craft section below.

**Elements (top to bottom):**

1. **Ghosted year watermark** — "2023" in Montserrat 900 weight, ~4-6% opacity, positioned behind/above the title. Uses the same watermark pattern as the "Уют" text in Chapter 3.

2. **Section title** — "Как всё началось" in Cormorant Garamond serif, `clamp(1.75rem, 4vw, 2.5rem)`.

3. **Flourish divider** — Reuses the existing `about-page__rule` pattern: two gradient lines with an orange dot center.

4. **Origin story text** — 3 paragraphs in Nunito sans-serif, centered, max-width ~640px, line-height 1.85, opacity 0.8. Matches `about-page__craft-text` styling.

5. **Founder quote** — Italic Cormorant Garamond, lower opacity (~0.55), separated from body text by a subtle centered horizontal line. Max-width ~480px.

### Draft Copy (Russian)

**Paragraph 1:**
> Melty родился из простой, но искренней мечты — создать в Нальчике место, где шоколад перестаёт быть просто десертом и становится настоящим искусством. Место, наполненное теплом, заботой и вниманием к каждой детали.

**Paragraph 2:**
> Мы начали с нескольких рецептов и маленькой кухни, где каждый день был экспериментом. Сотни проб, бессонные ночи и бесконечная любовь к делу — так рождался вкус, который вы знаете сегодня. Каждый рецепт — это история поиска идеального баланса между традицией и авторским подходом.

**Paragraph 3:**
> Сегодня Melty — это больше, чем кафе. Это пространство, где встречаются друзья, создаются воспоминания и каждый момент пропитан уютом. Мы не просто готовим десерты — мы создаём мир, в который хочется возвращаться.

**Quote:**
> «Мы хотели, чтобы каждый гость чувствовал себя частью чего-то тёплого и настоящего»

### Animations

Uses the existing scroll-reveal system already on the page:
- The section registers with `chapterRefs` and `data-chapter="origin"`
- IntersectionObserver triggers the `about-page__chapter--revealed` class
- Elements use staggered opacity/translateY transitions matching existing chapters
- Watermark, title, flourish, text, and quote each get incremental transition delays (0s, 0.15s, 0.3s, 0.5s)

### Background

`linear-gradient(180deg, var(--ap-cream) 0%, var(--ap-cream-warm) 100%)` — matching the gradient flow from Chapter 1 into Chapter 2.

### Responsive

- Watermark font-size scales with `clamp(4rem, 12vw, 7rem)`
- Title scales with `clamp(1.5rem, 4vw, 2.5rem)`
- Section padding uses existing `clamp(4rem, 10vw, 8rem)`
- All centered, so no grid/column changes needed for mobile

## Files to Modify

- `src/pages/AboutPage.tsx` — Add origin section JSX between Chapter 1 and Chapter 2, register with chapterRefs
- `src/pages/AboutPage.css` — Add origin section styles (watermark, title, text, quote, transitions, responsive)

## Verification

1. Run `npm run dev` and navigate to `/about`
2. Confirm the origin section appears between the hero and craft sections
3. Scroll to verify the section reveals with staggered animation
4. Check mobile layout at 480px and 768px breakpoints
5. Verify `prefers-reduced-motion` disables animations
6. Run `npm run build` to confirm no type errors
