# Feedback Page Design Spec — "Golden Arch"

## Context

Melty cafe needs a feedback page where visitors can rate their experience and leave comments. The cafe currently has no way to collect customer opinions through the website. Feedback should be sent to the cafe owner via Telegram bot for real-time notifications.

## Requirements Summary

- **Route:** `/feedback` — new dedicated page
- **Feedback model:** 5-star rating + free-text review + optional contact info
- **Delivery:** Telegram bot API (hardcoded token/chat ID)
- **Design direction:** "Golden Arch" — ornamental arch frame, full-width sections, light cream backgrounds matching the existing site aesthetic
- **Language:** Russian throughout

## Page Structure

### 1. Navigation

Add "Отзыв" link to the Header nav after "О нас" (last nav item). Also add a link in the Footer. Route handled by React Router at `/feedback`.

### 2. Hero Section (full-width)

- Cream gradient background (`--cream` → `--cream-warm`)
- Melty logo circle (chocolate gradient, `M` in Cormorant Garamond italic)
- Heading: "Оставьте отзыв" (Cormorant Garamond, fluid font size)
- Subtitle: "Ваше мнение делает нас лучше" (italic, `--caramel` color)
- Decorative divider: two lines + golden dot (reusing existing pattern from About section)
- Fade-in reveal animation on load (matching hero pattern: `translateY(30px)` → `0`)

### 3. Form Section (full-width, centered content)

Background: `--cream-warm` → `--cream-deep` gradient.

**Arch Frame:**
- CSS-only decorative arch (`border-radius: 280px 280px 16px 16px`, `1.5px` border in `rgba(139,99,71,0.12)`)
- Max-width `580px`, centered
- Floating accent dots in the background section (3 dots, 6s float animation, matching Hero pattern)

**Star Rating (5 stars):**
- Cormorant Garamond `★` characters, `40px` font size
- Default empty: `--latte` color
- Active/hover: `--gold` with `drop-shadow(0 0 8px rgba(201,153,74,0.35))`
- Hover: `scale(1.15)` transition
- On selection, label appears below: "Ужасно" / "Плохо" / "Нормально" / "Хорошо" / "Отлично!"
- Stars fill cumulatively (hover star 3 = stars 1-3 highlighted)

**Textarea:**
- Label: "ВАШ ОТЗЫВ" (Nunito, 11px, uppercase, letter-spacing 1.5px)
- White semi-transparent background (`rgba(255,255,255,0.65)`)
- Border: `--latte`, transitions to `--gold` on focus with `box-shadow: 0 0 0 3px rgba(201,153,74,0.12)`
- Placeholder (Cormorant Garamond italic): "Расскажите о вашем впечатлении..."
- Min-height: `120px`, resizable

**Contact Field:**
- Label: "КОНТАКТ" with `(необязательно)` in italic hint
- Single text input, same styling as textarea
- Placeholder: "Телефон, Telegram или email"

**Submit Button:**
- Full-width, chocolate gradient (`--chocolate` → `--chocolate-light`)
- Cream text, Cormorant Garamond, 15px, letter-spacing 3px
- Text: "ОТПРАВИТЬ ✦"
- Hover: `translateY(-2px)`, shadow deepens
- Border-radius: `16px`

### 4. Success State

On successful submission:
- Form fades out, full-screen overlay appears (`rgba(248,243,237,0.96)`)
- SVG checkmark draws in (stroke-dasharray animation, 0.6s, matching hero swirl pattern)
- Text: "Спасибо за ваш отзыв!" (Cormorant Garamond, 28px)
- Subtitle: "Мы ценим каждое мнение 🤎"
- Falling particle confetti: `✦ 🤎 ☕ ★` — 12 particles, CSS `fall` keyframe, 2-4s duration, random horizontal positions
- After particles settle, "Вернуться на главную" link appears (bordered button style)

### 5. Error State

On failed submission:
- Subtle toast notification at bottom of form
- Text: "Не удалось отправить, попробуйте позже"
- Style: `--orange` background, cream text, rounded, auto-dismiss after 5s
- Retry: submit button re-enables

## Telegram Integration

- **API endpoint:** `https://api.telegram.org/bot<TOKEN>/sendMessage`
- **Credentials:** Hardcoded constants in a dedicated file (`src/config/telegram.ts`)
- **Message format:** Formatted text with:
  ```
  ⭐ Оценка: ★★★★☆ (4/5)
  💬 Отзыв: [review text]
  📞 Контакт: [contact info or "Не указан"]
  📅 Дата: [timestamp]
  ```
- **Method:** Native `fetch` POST, `Content-Type: application/json`
- **Body:** `{ chat_id, text, parse_mode: "HTML" }`

## Files to Create/Modify

### New files:
- `src/pages/FeedbackPage.tsx` — page component
- `src/pages/FeedbackPage.css` — page styles
- `src/config/telegram.ts` — bot token and chat ID constants

### Modified files:
- `src/App.tsx` — add `/feedback` route
- `src/components/Header.tsx` — add "Отзыв" nav link
- `src/components/Footer.tsx` — add feedback link

## Existing Patterns to Reuse

- **CSS variables:** All from `src/index.css` (colors, fonts, spacing, shadows, transitions, radii)
- **Animation pattern:** `heroReveal` keyframe from `src/components/Hero.css` for staggered fade-in
- **Floating dots:** `floatDot` keyframe from `src/components/Hero.css`
- **SVG stroke animation:** `drawSwirl` pattern from `src/components/Hero.css` for the success checkmark
- **Button hover:** `translateY(-2px)` + shadow deepen from `src/index.css` `.btn` styles
- **Divider pattern:** line + dot + line from `src/components/Footer.css`
- **Noise overlay:** Already global in `App.tsx`
- **Lenis scroll integration:** Already global, just need `ScrollToTop` awareness
- **Reduced motion:** Follow existing `prefers-reduced-motion` patterns

## Responsive Breakpoints

Following existing patterns:
- **Mobile (≤480px):** Arch frame goes full-width with reduced border-radius, padding shrinks, stars slightly smaller
- **Tablet (≤768px):** Arch frame 90% width, moderate padding
- **Desktop (>768px):** Arch frame max-width 580px, full padding and animations

## Accessibility

- Stars are keyboard-navigable (arrow keys, Enter/Space to select)
- ARIA labels on stars: `aria-label="Оценка N из 5"`
- Form fields have proper `<label>` associations
- Success overlay traps focus
- `prefers-reduced-motion`: disable floating dots, particle confetti, reduce transitions
- Focus-visible styles with orange outline (existing pattern)
- Semantic HTML: `<section>`, `<form>`, `<label>`, `<button>`

## Verification

1. **Visual:** Page matches the approved mockup at all 3 breakpoints (mobile, tablet, desktop)
2. **Interactions:** Stars hover/click correctly with cumulative fill and label changes
3. **Form focus:** Inputs show golden glow border on focus
4. **Submit flow:** Form data sends to Telegram API, success overlay triggers on 200 response
5. **Error handling:** Network error shows toast, form stays filled for retry
6. **Navigation:** "Отзыв" link in header/footer navigates to `/feedback`; back button works
7. **Accessibility:** Tab through all interactive elements; screen reader announces star ratings
8. **Reduced motion:** Disable animations, verify page is still fully usable
9. **Lenis:** Smooth scroll works on the page, no conflicts with form inputs
