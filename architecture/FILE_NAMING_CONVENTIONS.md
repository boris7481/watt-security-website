# File Naming Conventions — Watt Security

This document extends the naming conventions already introduced in `PROJECT_RULES.md` §9 with full, implementation-level specificity across every file type in the project.

## 1. Folders

- Lowercase, kebab-case, always plural for collections (`images/`, `videos/`, `modules/`), singular only for conceptual singletons (`design/`, `architecture/`).
- No spaces, no underscores, no camelCase in folder names.

Examples: `assets/images/access-control/`, `assets/js/modules/`.

## 2. HTML Files

- Lowercase, kebab-case, descriptive of the page's content — matches `PAGE_ARCHITECTURE.md` exactly.
- The homepage is the only exception, using the conventional `index.html` at the project root.

Examples: `about.html`, `legal-notice.html`, `privacy-policy.html`.

## 3. CSS Files

- Lowercase, kebab-case, named after their architectural role (`tokens.css`, `layout.css`, `components.css`) or the page they override (`pages/services.css`), per `CSS_ARCHITECTURE.md`.
- If a component file is later split for size (e.g., `components.css` growing too large), split by component group with a descriptive suffix: `components-cards.css`, `components-forms.css` — never generic names like `styles2.css`.

## 4. JavaScript Files

- Lowercase, kebab-case, named after the single behavior they implement, matching `JAVASCRIPT_ARCHITECTURE.md`: `mobile-menu.js`, `contact-form.js`, `scroll-reveal.js`.
- One default export or a small set of named exports per module — the file name should always describe what the module *does*, not a vague label like `helpers.js` or `utils.js` (a genuine cross-cutting utility file, if ever needed, should be named for its actual content, e.g., `dom-utils.js`).

## 5. Images

- Lowercase, kebab-case, descriptive of the actual subject — never generic camera-generated names (`IMG_2031.jpg`).
- Pattern: `[category]-[subject]-[optional-number].[ext]`, matching the categories in `specifications/MEDIA_SPECIFICATION.md` and `PROJECT_STRUCTURE.md`.

Examples:
- `agents/agent-corporate-lobby-01.webp`
- `k9/k9-unit-patrol-02.webp`
- `events/event-access-control-03.webp`
- `og/og-homepage-share.jpg`

- Always include the file extension matching the actual format served (`.webp` primary, `.jpg` fallback where a `<picture>` fallback is implemented per `PERFORMANCE_STRATEGY.md`).

## 6. Videos

- Same pattern as images: `[category]-[subject].[ext]`.

Examples:
- `hero/hero-loop-main.mp4` / `hero/hero-loop-main.webm`
- `patrols/patrol-night-vehicle.mp4`
- `interventions/intervention-checkpoint-response.mp4`

- Poster images for videos follow the image convention with a `-poster` suffix: `hero/hero-loop-main-poster.webp`.

## 7. Icons

- Named after the Phosphor Icons source name, kebab-case, with an optional weight suffix only if both a line and a bold/duotone variant of the same icon are used: `icon-shield.svg`, `icon-shield-bold.svg`.
- Icons are stored flat within `assets/icons/` (no deep subcategorization needed, since the set is a small curated subset per `PROJECT_STRUCTURE.md`).

## 8. Fonts

- Named after the typeface, weight, and format: `montserrat-700.woff2`, `inter-400.woff2`, `inter-600.woff2` — matching only the specific weights defined in `design/TYPOGRAPHY.md` (no unused weights are added to the project).

## 9. CSS Classes

- **BEM (Block__Element--Modifier)**, kebab-case, per `PROJECT_RULES.md` §9 — restated here with concrete examples specific to this project's components:
  - Block: `.service-card`
  - Element: `.service-card__title`, `.service-card__icon`, `.service-card__link`
  - Modifier: `.btn--primary`, `.btn--secondary`, `.badge--featured`
- Utility classes (from `utilities.css`) are a deliberate, small exception to BEM, using short functional names: `.visually-hidden`, `.text-center` — never abbreviated cryptically.
- State classes use an `is-`/`has-` prefix to distinguish JS-toggled state from structural/BEM classes: `.is-open` (accordion, mobile menu), `.has-error` (form field), `.is-active` (nav link).

## 10. HTML IDs

- Lowercase, kebab-case, used only for two purposes: (1) anchor-link targets for in-page navigation (`id="services"`, `id="contact"`, `id="faq"` — matching the homepage sections in `specifications/HOME_PAGE_SPECIFICATION.md`), and (2) unique form field association (`id="contact-name"`, matched to its `<label for="contact-name">`).
- IDs are never used as CSS styling hooks (styling always targets classes) — this keeps CSS specificity flat and avoids ID/class conflicts, per `PROJECT_RULES.md` clean-code principles.

## 11. JavaScript Variables & Functions

- **Variables and functions:** `camelCase` — e.g., `isMenuOpen`, `initAccordion()`, `animateCounter()`.
- **Constants (true, unchanging values):** `UPPER_SNAKE_CASE` — e.g., `const ANIMATION_DURATION_MS = 250;`, `const BREAKPOINT_TABLET = 768;`.
- **Module-level exported functions:** named descriptively for their action, verb-first — `openMobileMenu()`, `closeMobileMenu()`, `validateContactForm()`.
- **DOM element references:** suffixed or prefixed clearly, e.g., `menuButtonEl`, `accordionItems` (plural for collections) — avoids ambiguity between a DOM node and a data value of the same concept.
- **Boolean variables:** prefixed `is`/`has`/`should` — `isReducedMotion`, `hasError`, `shouldAutoplay`.

## 12. Data Attributes (for JS hooks, if used instead of classes for behavior targeting)

- Where JavaScript needs to select an element for behavior (rather than styling), prefer a `data-*` attribute over reusing a styling class, to keep style and behavior concerns separate: `data-accordion-trigger`, `data-gallery-item`, `data-counter-target="200"`.
- Kebab-case, descriptive, namespaced by feature (`data-menu-toggle`, not a generic `data-toggle`).

## Summary Table

| Item | Convention | Example |
|---|---|---|
| Folders | lowercase, kebab-case | `access-control/` |
| HTML files | lowercase, kebab-case | `legal-notice.html` |
| CSS files | lowercase, kebab-case | `components.css` |
| JS files | lowercase, kebab-case | `contact-form.js` |
| Images | lowercase, kebab-case, descriptive | `agent-corporate-lobby-01.webp` |
| Videos | lowercase, kebab-case, descriptive | `patrol-night-vehicle.mp4` |
| Icons | lowercase, kebab-case | `icon-shield.svg` |
| Fonts | typeface-weight | `montserrat-700.woff2` |
| CSS classes | BEM, kebab-case | `.service-card__title`, `.btn--primary` |
| State classes | `is-`/`has-` prefix | `.is-open`, `.has-error` |
| HTML IDs | lowercase, kebab-case | `id="contact"` |
| JS variables/functions | camelCase | `isMenuOpen`, `initAccordion()` |
| JS constants | UPPER_SNAKE_CASE | `BREAKPOINT_TABLET` |
| JS data hooks | `data-*`, kebab-case | `data-accordion-trigger` |
