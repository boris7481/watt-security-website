# Spacing & Grid — Watt Security

## 1. Base Unit

All spacing is derived from an **8px base unit**. This keeps every margin, padding, and gap value predictable and visually consistent across the entire site — a core expression of the "discipline" brand value applied to layout itself.

A secondary **4px half-step** is permitted only for fine adjustments inside compact components (e.g., icon-to-label gaps, badge padding).

## 2. Spacing Scale

| Token | Value | Typical Use |
|---|---|---|
| `space-xxs` | 4px | Icon-to-text gap, tight inline spacing |
| `space-xs` | 8px | Small internal padding (badges, chips) |
| `space-sm` | 16px | Default gap between related inline elements, small component padding |
| `space-md` | 24px | Default paragraph spacing, card internal padding (mobile) |
| `space-lg` | 32px | Card internal padding (desktop), gap between related components |
| `space-xl` | 48px | Gap between sub-sections within a page section |
| `space-2xl` | 64px | Vertical padding for section blocks (mobile) |
| `space-3xl` | 96px | Vertical padding for section blocks (desktop) |
| `space-4xl` | 128px | Gap between major page sections (desktop, large screens) |

## 3. Content Width & Grid

- **Max content width:** `1280px`, centered, with responsive side padding (see below). This keeps line lengths and layouts readable on large desktop/ultra-wide monitors instead of stretching edge to edge.
- **Grid system:** 12-column grid on tablet/desktop, 4-column grid on mobile, with a consistent gutter.
- **Gutter (column gap):** 24px on desktop/tablet, 16px on mobile.
- **Side padding (viewport edge to content):**
  - Mobile: 16–20px
  - Tablet: 32px
  - Desktop: 48px
  - Large desktop (≥1440px): content stays capped at 1280px max-width, extra space becomes outer margin.

## 4. Breakpoints

| Name | Range | Notes |
|---|---|---|
| Mobile | 0 – 599px | Base/default styles are written for this range first (mobile-first). |
| Mobile Large | 600 – 767px | Minor refinements only (e.g., 2-column card grids may start here for short cards). |
| Tablet | 768 – 1023px | Navigation may shift from hamburger to partial/full inline menu depending on final nav design; grid moves to multi-column layouts. |
| Desktop | 1024 – 1439px | Full desktop layout, 12-column grid active. |
| Large Desktop | ≥ 1440px | Content remains capped at 1280px max-width; typography may use the upper end of the fluid type scale. |

## 5. Section Rhythm

- Every full page section (Hero, Services, About, Testimonials, Contact, etc.) uses vertical padding of `space-2xl` (mobile) → `space-3xl` (desktop) top and bottom, ensuring a consistent breathing rhythm as the user scrolls.
- Gap between the last element of one section and the first element of the next should never be smaller than `space-xl`, even if both sections have their own internal padding, to avoid sections feeling like they're touching/competing.

## 6. Component-Level Spacing Defaults

- **Buttons:** vertical padding `space-sm` (16px)/ horizontal padding `space-md` (24px) as a default; larger CTA buttons may use `space-md`/`space-lg`.
- **Cards:** internal padding `space-md` (24px) on mobile, `space-lg` (32px) on desktop; gap between cards in a grid: `space-md` (24px).
- **Form fields:** vertical padding `space-sm` (16px) inside inputs, `space-md` (24px) vertical gap between stacked fields.
- **Icon + label pairs:** `space-xs` (8px) gap.

## 7. Rules

- No arbitrary/one-off pixel values (e.g., `13px`, `22px`) in implementation — always use a value from the scale above, or the `space-xxs` (4px) half-step when a scale value is genuinely too coarse.
- Do not mix spacing units (px vs. rem/em) inconsistently — implementation should pick one convention (rem recommended for accessibility/zoom behavior) and apply it uniformly; the values above are the reference in px for design communication.
- Consistent spacing between sibling elements (e.g., all service cards, all nav items) is mandatory — no visually "eyeballed" adjustments.
