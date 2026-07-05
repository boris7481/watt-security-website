# Typography — Watt Security

## 1. Typeface Selection

| Role | Typeface | Source | Rationale |
|---|---|---|---|
| Headings / Display | **Montserrat** (weights 600, 700, 800) | Google Fonts | Geometric, confident, strong at large sizes without feeling decorative. Reads as corporate/authoritative rather than trendy — used by many institutional and defense-adjacent brands for exactly this reason. |
| Body / UI | **Inter** (weights 400, 500, 600) | Google Fonts | Extremely legible at small sizes, designed specifically for interfaces, neutral tone that doesn't compete with Montserrat headings. Excellent multilingual/accent support (relevant for French-language content in Cameroon). |

Only these two typefaces are used across the entire site. No third typeface should be introduced without updating this document.

**Fallback stack:**
- Headings: `'Montserrat', 'Helvetica Neue', Arial, sans-serif`
- Body: `'Inter', 'Helvetica Neue', Arial, sans-serif`

## 2. Type Scale

Base size: **16px** (`1rem`) at desktop, fluidly scaled down slightly on mobile via the responsive rules below. Scale ratio: approx. 1.25 (major third), rounded to clean values.

| Element | Font | Weight | Desktop Size | Mobile Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| H1 | Montserrat | 800 | 56px / 3.5rem | 34px / 2.125rem | 1.1 | -0.5px |
| H2 | Montserrat | 700 | 40px / 2.5rem | 28px / 1.75rem | 1.15 | -0.25px |
| H3 | Montserrat | 700 | 30px / 1.875rem | 22px / 1.375rem | 1.2 | 0px |
| H4 | Montserrat | 600 | 24px / 1.5rem | 19px / 1.1875rem | 1.25 | 0px |
| H5 | Montserrat | 600 | 20px / 1.25rem | 17px / 1.0625rem | 1.3 | 0px |
| H6 | Montserrat | 600 | 16px / 1rem (uppercase, used as eyebrow/label) | 14px / 0.875rem | 1.3 | 1.5px (uppercase tracking) |
| Body (default) | Inter | 400 | 16px / 1rem | 15px / 0.9375rem | 1.6 | 0px |
| Body (large / lead paragraph) | Inter | 400 | 19px / 1.1875rem | 17px / 1.0625rem | 1.6 | 0px |
| Body (small / caption) | Inter | 400 | 14px / 0.875rem | 13px / 0.8125rem | 1.5 | 0px |
| Buttons / CTA | Montserrat | 600 | 16px / 1rem | 15px / 0.9375rem | 1 | 0.5px (slight uppercase tracking when used uppercase) |
| Navigation (main menu) | Inter | 500 | 15px / 0.9375rem | 16px / 1rem (mobile menu) | 1 | 0.25px |
| Footer text | Inter | 400 | 14px / 0.875rem | 14px / 0.875rem | 1.6 | 0px |
| Footer headings | Montserrat | 600 | 15px / 0.9375rem (uppercase) | 15px / 0.9375rem | 1.3 | 1px |

## 3. Usage Rules

- **H1** is used once per page — the main page/section title (e.g., "Professional Security Services in Douala").
- **H6** is reserved as an "eyebrow" label above H1/H2 (e.g., small uppercase tag like "OUR SERVICES" above a section heading in Watt Gold) — not for actual sixth-level content hierarchy, per the semantic heading rule in `PROJECT_RULES.md`. If a genuine sixth heading level is ever needed in body content, style it identically to H5 rather than the uppercase eyebrow treatment.
- **Buttons/CTAs** always use Montserrat 600, never Inter, to visually separate actionable elements from body copy.
- **Navigation** uses Inter 500 for a cleaner, less "shouty" header — the header's authority comes from layout and color, not heavy type weight.
- Body line-length should be capped around 65–75 characters per line (enforced via max-width in `SPACING.md`) for readability.
- Never use font weights below 400 (no "light" weights) — thin type undermines the disciplined, solid tone of the brand, and can reduce legibility/contrast, especially on mobile.
- Never use italics for emphasis; use weight (600) or the Watt Gold accent color instead, to keep the typographic voice consistent and formal.

## 4. Responsive Behavior

- Between mobile and desktop sizes listed above, font sizes may scale fluidly using `clamp()` in implementation (e.g., `clamp(2.125rem, 4vw + 1rem, 3.5rem)` for H1) rather than jumping abruptly at breakpoints — exact clamp values to be finalized during CSS implementation, bounded by the mobile/desktop values in the table above.
- Line-height increases slightly (relative) on mobile is not required — the fixed ratios above already read comfortably at mobile sizes.
- Paragraph text must never render below 14px on any breakpoint (accessibility minimum).

## 5. Google Fonts Import Reference

For implementation reference (no code executed at this milestone):
- Montserrat: weights 600, 700, 800
- Inter: weights 400, 500, 600

Only the weights listed above should be loaded, to keep font-loading performance impact minimal (aligned with the Performance rules in `PROJECT_RULES.md`).
