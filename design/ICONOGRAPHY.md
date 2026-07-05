# Iconography — Watt Security

## 1. Icon Style

- **Style:** Line icons (outlined, not filled), consistent stroke weight, geometric and precise rather than hand-drawn or organic — reinforcing the "engineered/disciplined" visual tone defined in `DESIGN_SYSTEM.md`.
- A **duotone/filled variant** of the same icon set may be used sparingly for a small number of "hero" or featured icons (e.g., a featured service, a stat block) to create emphasis — but line icons remain the default across the site.
- Icons must feel like a single coherent family — never mix icons from multiple libraries or styles (e.g., never mix line icons with emoji or flat cartoon-style icons).

## 2. Recommended Library

**Primary recommendation: [Phosphor Icons](https://phosphoricons.com/)**

Rationale:
- Large, consistent set with a genuine "Security" and "Regular"/"Light"/"Bold" weight range, allowing the line-icon default plus an occasional bold/duotone accent without switching libraries.
- Covers the specific icon vocabulary this site needs: shield, lock, eye, camera/CCTV, dog/paw (K9 unit), building/office (corporate), house (residential), factory (industrial), calendar/event, user-shield (VIP protection), clock/24-7, map-pin (coverage area), phone, mail.
- Free, open-source (MIT license), available as SVG — no licensing cost or attribution burden.

**Fallback/alternative: [Lucide Icons](https://lucide.dev/)**

Use only if a specific icon needed for the site is missing or inconsistent in Phosphor — Lucide has a very similar minimal-line aesthetic and can blend acceptably as an occasional substitute, but should not be mixed in wholesale (pick one primary library and stay with it as much as possible).

## 3. Icon Sizing

| Context | Size |
|---|---|
| Inline with body text / small labels | 16px |
| Buttons, form fields, nav items | 20px |
| List items, badges | 20–24px |
| Service card icons | 32–40px |
| Featured/hero stat icons | 48–56px |

Icon stroke width should stay visually consistent relative to size (the library's default stroke scaling is acceptable) — icons should never look disproportionately thick or thin compared to the surrounding Inter/Montserrat type weight.

## 4. Color Usage

- Default icon color: inherits surrounding text color (Ink/Off-White depending on background), per `UI_COMPONENTS.md`.
- Watt Gold is reserved for icons that carry emphasis: an active/selected state, a featured service, a key stat block — not applied to every icon indiscriminately.
- Semantic icons (success/error/warning) use the corresponding semantic color from `COLOR_PALETTE.md`, always paired with text, never color alone.

## 5. Usage Rules

- Every icon on the site must correspond to a specific, meaningful concept (a service, an action, a status) — no purely ornamental icons.
- Maintain consistent icon-to-label spacing (`space-xxs`, 4px, per `SPACING.md`) across all instances (nav, buttons, list items).
- Do not use photographic-style or 3D-rendered icons — they conflict with the flat, precise line-icon system and cheapen the premium tone.
- Do not use platform/OS emoji as functional icons anywhere on the site.
