# CSS Architecture — Watt Security

This document describes how CSS will be organized and loaded. No CSS is written in this milestone — this is the reference a developer implements directly from.

## 1. Organizational Model

The project uses a **simplified, flat variant of ITCSS (Inverted Triangle CSS)** — ordering stylesheets from generic/global rules to specific/localized ones, without introducing a preprocessor (Sass/Less) or a naming methodology heavier than plain BEM (per `FILE_NAMING_CONVENTIONS.md`). This keeps the "no build tool" default from `architecture/FRONTEND_ARCHITECTURE.md` intact while still giving the codebase real structure.

Layers, in load order (matches `PROJECT_STRUCTURE.md`):

1. **`tokens.css`** — CSS custom properties only. No selectors targeting actual elements, just `:root { --variable: value; }` declarations.
2. **`base.css`** — reset/normalize + bare element defaults (`body`, `h1`–`h6`, `p`, `a`, `ul`, `img`, `button`, `input`). No classes here — only element selectors, establishing sane defaults before any component-specific styling applies.
3. **`layout.css`** — macro structural rules: header, footer, page containers, the 12-column grid, section vertical rhythm. Governs *where things sit*, not what they look like in detail.
4. **`components.css`** — every reusable component's visual styling (buttons, cards, forms, badges, alerts, accordion, gallery items, counters, nav, WhatsApp button), matching `COMPONENT_ARCHITECTURE.md` one-to-one. Governs *what things look like*.
5. **`utilities.css`** — a small, intentionally limited set of single-purpose helper classes, loaded last so they can reliably override component defaults on the rare occasions that's needed (e.g., `.visually-hidden`, `.text-center`).
6. **`pages/*.css`** — page-specific exceptions only, loaded last and only on the page that needs them.

## 2. Load Order in HTML

Each HTML page links stylesheets as separate `<link rel="stylesheet">` tags, in the exact order above — **not** via `@import` inside a single CSS file, since `@import` introduces sequential network round-trips that hurt First Contentful Paint (directly relevant to the Lighthouse Performance objective in `PERFORMANCE_STRATEGY.md`). Plain multiple `<link>` tags are fetched in parallel by the browser while still applying in the correct cascade order.

Example load order for `index.html` (illustrative, no actual code written here):
1. `tokens.css`
2. `base.css`
3. `layout.css`
4. `components.css`
5. `utilities.css`
6. `pages/home.css` (only if needed)

Inner pages follow the same order, substituting the relevant `pages/*.css` file (or omitting it entirely if no page-specific override exists yet).

## 3. CSS Custom Properties (`tokens.css`)

All values from the design system are expressed as custom properties, generated directly from `design/COLOR_PALETTE.md`, `design/TYPOGRAPHY.md`, and `design/SPACING.md` — never hard-coded again in any other file. Categories:

- **Color:** `--color-navy`, `--color-navy-light`, `--color-navy-deep`, `--color-gold`, `--color-gold-deep`, `--color-slate`, `--color-success`, `--color-error`, `--color-warning`, `--color-bg-light`, `--color-bg-light-alt`, `--color-bg-dark`, `--color-text-ink`, `--color-text-graphite`, `--color-text-offwhite`, `--color-text-cool-gray`, `--color-border-light`, `--color-border-dark` — names map one-to-one to the roles table in `design/COLOR_PALETTE.md`.
- **Typography:** `--font-heading` (Montserrat stack), `--font-body` (Inter stack), plus a `--fs-*` scale (`--fs-h1`, `--fs-h2`, … `--fs-body`, `--fs-small`) and `--fw-*` weight tokens (`--fw-regular`, `--fw-medium`, `--fw-semibold`, `--fw-bold`, `--fw-extrabold`).
- **Spacing:** `--space-xxs` through `--space-4xl`, matching `design/SPACING.md` exactly (4px → 128px scale).
- **Radii/Shadows:** small, consistent set (`--radius-sm`, `--radius-md`; `--shadow-sm`, `--shadow-md`) matching the restrained, non-decorative visual tone in `design/UI_COMPONENTS.md`.
- **Motion:** `--duration-fast` (150–200ms), `--duration-base` (200–250ms), `--duration-slow` (250–350ms), `--ease-out`, `--ease-in-out` — matching `design/ANIMATIONS.md`, so every component references the same motion values instead of hard-coding durations per file.

**Breakpoints are not stored as custom properties**, because CSS custom properties cannot currently be interpolated inside `@media` query conditions in standard, universally-supported CSS. Breakpoint values (`600px`, `768px`, `1024px`, `1440px`, per `design/SPACING.md`) are documented here as the canonical reference and used as literal values directly inside media queries in every file — every file must use these exact literal values, never an approximation.

## 4. Components

- Each component in `components.css` is scoped under its BEM block name (`.service-card`, `.btn`, `.accordion`, etc., per `FILE_NAMING_CONVENTIONS.md`) and only ever references `tokens.css` custom properties for color/spacing/type/motion — no raw hex codes, raw px spacing values, or raw font names appear outside `tokens.css`.
- Component styles are written mobile-first: base rules target the smallest viewport, with `min-width` media queries progressively enhancing the layout for tablet/desktop/large-desktop, per the responsive-first principle in `PROJECT_RULES.md` and `design/SPACING.md`.
- If `components.css` grows large enough to hinder navigation/maintainability, it may be split into multiple files (`components-cards.css`, `components-forms.css`, etc.) loaded in the same relative position in the load order — this is an implementation-time judgment call, not a decision to make now.

## 5. Responsive Strategy

- Mobile-first media queries (`min-width`) throughout, per `design/SPACING.md` breakpoints (600 / 768 / 1024 / 1440px).
- Layout-level responsiveness (grid column counts, container widths) lives in `layout.css`; component-level responsiveness (e.g., a card's internal padding changing at a breakpoint) lives alongside that component in `components.css` — responsiveness is not centralized into a single "responsive.css" file, since that would separate a component's rules from its own responsive behavior and hurt maintainability.

## 6. Utilities

- `utilities.css` is intentionally minimal — this project does not adopt a utility-first framework (Tailwind-style) per the "no framework" decision in `FRONTEND_ARCHITECTURE.md`. It exists only for a handful of cross-cutting helpers that don't warrant a component: `.visually-hidden` (screen-reader-only content, e.g., skip link text), `.text-center`, and similar single-purpose classes.
- Utilities are the last stylesheet loaded specifically so they can override a component when a rare one-off adjustment is genuinely needed — but they should be used sparingly; a recurring need for the same utility override on a component usually means the component itself should change, not that the utility should be relied upon repeatedly.

## 7. What This Architecture Deliberately Avoids

- No CSS-in-JS, no Sass/Less/PostCSS preprocessing pipeline, no CSS framework — consistent with `README.md` and `FRONTEND_ARCHITECTURE.md`.
- No `!important` usage — specificity is controlled entirely through the ITCSS-style load order and flat BEM class selectors (never ID selectors for styling, per `FILE_NAMING_CONVENTIONS.md`).
- No inline `style=""` attributes in HTML, except where truly dynamic values are unavoidable (e.g., a JS-computed counter's final width for a progress-bar-like element, if ever needed) — even then, prefer toggling a class over writing inline styles from JavaScript.

## 8. Open Question for Client/Developer Validation

- **Minification/concatenation at scale:** this architecture defines six-plus separate CSS files loaded via individual `<link>` tags, which is appropriate for the project's current size and avoids introducing a build tool. If the site grows substantially (many more pages/components) or Lighthouse auditing shows the request count/file-size overhead is measurably hurting the Performance score, introducing a lightweight build step (simple concatenation + minification, not a full framework) should be revisited — this is flagged here and in `PERFORMANCE_STRATEGY.md` as a future decision point requiring explicit validation before adopting any build tool, since `README.md` currently commits to a no-build-tool stack.
