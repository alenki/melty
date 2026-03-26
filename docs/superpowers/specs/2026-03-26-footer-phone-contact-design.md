# Footer Phone Contact — Design Spec

## Context

The Melty cafe website currently has no direct phone contact visible on the site. Business inquiries, partnerships, and general contact all rely on Instagram DMs. Adding the cafe's phone number to the footer provides a persistent, accessible way for anyone (businesses, customers, press) to reach the administration directly from any page.

## Design

### Placement

Add a phone number link to the footer's **right column** ("Мы в соцсетях" / connect section), positioned **between the Instagram link and the "Оставить отзыв" feedback link**.

### Content

- **Phone number**: `+7 (988) 939-90-00`
- **Label/display**: Phone icon + the formatted number
- **Link**: `tel:+79889399000` (clickable, tap-to-call on mobile)

### Styling

- Match the existing `.footer-instagram` button style:
  - Same font (DM Sans), size, and color (`#C4A98B` latte)
  - Same bordered button appearance (`1px solid rgba(196, 169, 139, 0.3)`)
  - Same hover effect (opacity transition, slight color brighten)
  - Same border-radius and padding
- Phone icon inline, similar to the Instagram SVG icon

### Responsive Behavior

- Follows the same responsive rules as the Instagram link
- Stacks vertically on mobile (below 900px)
- Reduces padding/font size at smaller breakpoints per existing footer CSS patterns

## Files to Modify

1. `src/components/Footer.tsx` — Add phone link element
2. `src/components/Footer.css` — Add phone-specific class (minimal, mostly reuses `.footer-instagram` patterns)

## Verification

1. Run `npm run dev` and check the footer on all pages
2. Verify the phone link appears between Instagram and feedback links
3. Verify `tel:` link works (tap-to-call on mobile, click on desktop)
4. Check responsive behavior at 900px, 600px, and 400px breakpoints
5. Run `npm run build` to confirm no TypeScript errors
