# Color Palette — Watt Security

## 1. Palette Philosophy

The palette is built around a **deep navy foundation** with a **restrained gold/brass accent**, supported by a neutral gray scale and standard, low-saturation semantic colors. This mirrors the visual language of international security, defense, and premium institutional brands: dark, stable, authoritative, with a single prestige accent used sparingly — never a bright, multi-color, "tech startup" palette.

Navy over black as the primary dark tone because pure black can feel harsh/generic on screen and slightly cheapens perceived quality at scale (large backgrounds, video overlays); a deep navy retains richness while feeling warmer and more premium, and photographs/videos overlay more naturally on it.

Gold over red/blue as the accent because red reads as "alert/danger" (wrong association for a brand about calm control) and a second blue would lack contrast against the navy; a muted brass/gold reads as insignia, rank, and excellence — reinforcing prestige without becoming decorative if used only for accents (CTAs, highlights, dividers), never as a large fill.

## 2. Core Palette

| Role | Name | HEX | Usage |
|---|---|---|---|
| Primary | Watt Navy | `#0B1A33` | Primary brand color. Header/footer backgrounds, dark section backgrounds, primary text on light backgrounds where emphasis is needed, brand backdrop for logo. |
| Primary (Light variant) | Watt Navy — Light | `#13284D` | Secondary dark surface (cards/panels on dark sections), hover state for navy elements. |
| Secondary | Slate | `#2C3440` | Secondary UI surfaces, secondary buttons, muted dark accents, footer sub-sections. |
| Accent | Watt Gold | `#B8933E` | Primary accent: CTA buttons, active states, key highlights, dividers, icon accents, hover underlines. Used sparingly and never as a large background fill. |
| Accent (Hover/Deep variant) | Watt Gold — Deep | `#96762E` | Hover/active state for gold elements (buttons, links) to preserve contrast and give tactile feedback. |
| Success | Success Green | `#2E7D32` | Confirmation messages, form success states, "available/operational" indicators. |
| Error | Alert Red | `#B3261E` | Form errors, validation failures, critical warnings. |
| Warning | Warning Amber | `#B26A00` | Non-critical warnings, cautionary notices (distinct from Watt Gold to avoid confusing brand accent with a system warning). |
| Light Background | Pearl White | `#F7F7F5` | Default page background (light sections), card backgrounds. |
| Light Background (Alt) | Fog | `#EDEEF0` | Secondary light surface, alternating section backgrounds, input backgrounds. |
| Dark Background | Watt Navy — Deep | `#08131F` | Deepest dark sections (footer, hero overlays on video/image). |
| Primary Text (on light) | Ink | `#12151A` | Main body copy, headings on light backgrounds. |
| Secondary Text (on light) | Graphite | `#5B6472` | Supporting text, captions, metadata, placeholder text. |
| Primary Text (on dark) | Off-White | `#F2F3F5` | Headings/body copy on navy/dark backgrounds. |
| Secondary Text (on dark) | Cool Gray | `#9AA3B2` | Supporting text on dark backgrounds. |
| Border (light) | Mist | `#DFE2E6` | Dividers, input borders, card borders on light backgrounds. |
| Border (dark) | Steel | `#2A3548` | Dividers, input borders, card borders on dark backgrounds. |

## 3. Usage Ratios (Guideline)

To keep the site premium and not visually noisy, apply an approximate **60 / 30 / 10 rule**:

- **60% neutral base** — Pearl White / Fog (light sections) or Watt Navy / Watt Navy Deep (dark sections).
- **30% secondary** — Slate, Graphite, Ink, borders, secondary surfaces.
- **10% accent** — Watt Gold, used only for CTAs, active/hover states, small dividers, icon highlights, and key numerals/stats. Gold should never dominate a viewport.

## 4. Accessibility Notes

- `Ink #12151A` on `Pearl White #F7F7F5` and `Off-White #F2F3F5` on `Watt Navy #0B1A33` both exceed WCAG AAA contrast for body text.
- `Watt Gold #B8933E` on `Watt Navy #0B1A33` meets AA for large text/icons but should **not** be used for small body text on navy — reserve gold-on-navy for headings, buttons (with sufficient size/padding), and icons.
- `Watt Gold #B8933E` on `Pearl White #F7F7F5` is borderline for small text — use `Watt Gold — Deep #96762E` instead when gold text appears on light backgrounds at body size.
- Always pair Success/Error/Warning colors with an icon or label, not color alone (colorblind-safe pattern).

## 5. Do / Don't

**Do:**
- Use Watt Navy as the dominant color for header, footer, and at least one full-bleed section per page.
- Use Watt Gold exclusively for emphasis: primary CTA buttons, active nav indicator, key stats, dividers.

**Don't:**
- Don't introduce additional brand hues (blue, teal, purple, etc.) — the palette above is closed/final unless revisited in a future design milestone.
- Don't use Watt Gold as a large background fill (e.g., a full gold section) — it will read as cheap/loud rather than premium.
- Don't use pure black (`#000000`) or pure white (`#FFFFFF`) anywhere — use the defined Ink/Off-White and Pearl White/Watt Navy Deep values instead, for a softer, more premium contrast.
