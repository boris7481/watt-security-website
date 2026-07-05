# JavaScript Architecture — Watt Security

This document describes how JavaScript behavior will be organized and loaded. No JavaScript is written in this milestone — this is the reference a developer implements directly from.

## 1. Organizational Model

**Vanilla JavaScript using native ES Modules** — no framework, no bundler, per the "no build tool" default in `architecture/FRONTEND_ARCHITECTURE.md`. Every browser this site needs to support has full native support for `<script type="module">`, `import`/`export`, `IntersectionObserver`, and dynamic `import()` — so a bundler is not required to get modular, maintainable code.

Each interactive behavior on the site is implemented as **one small, single-responsibility module** in `assets/js/modules/` (per `PROJECT_STRUCTURE.md`), imported by a single entry point, `assets/js/main.js`, which is the only script referenced directly in HTML:

```
<script type="module" src="/assets/js/main.js"></script>
```

(Illustrative reference only — no actual HTML is authored in this milestone.)

## 2. Entry Point Responsibility (`main.js`)

`main.js` does not contain feature logic itself. Its job is only to:

1. Detect which features are present on the current page (e.g., check if a `[data-accordion-trigger]` element exists before importing/initializing the accordion module).
2. Import and initialize only the modules relevant to that page — the homepage imports all of them; `legal-notice.html` imports none beyond the shared header/menu behavior.
3. Respect `prefers-reduced-motion` globally before initializing any animation-driven module (counters, scroll-reveal), per `design/ANIMATIONS.md` and `specifications/ACCESSIBILITY_SPECIFICATION.md`.

This "detect, then import" pattern means non-critical modules (e.g., `gallery.js`, only needed on pages with a gallery) can use **dynamic `import()`** rather than a static top-level import, so a page that doesn't need a module never downloads its code — a meaningful, buildless code-splitting strategy (relevant to `PERFORMANCE_STRATEGY.md`).

## 3. Module Inventory & Responsibilities

| Module | Responsibility |
|---|---|
| `mobile-menu.js` | Toggles the mobile navigation panel open/closed; manages `aria-expanded` on the toggle button; traps focus within the open panel; closes on `Escape` or on selecting a link. |
| `accordion.js` | Generic, reusable expand/collapse behavior — powers the FAQ section (and any future accordion use). Manages `aria-expanded`/`aria-controls`, enforces single-open-at-a-time if confirmed, animates height via CSS class toggle (actual transition defined in CSS, not animated via JS) per `design/ANIMATIONS.md` timing. |
| `gallery.js` | Powers the Photo/Video Gallery grids: opens the lightbox/modal on activation (click or `Enter`/`Space`), traps focus inside the modal while open, restores focus to the trigering thumbnail on close, supports `Escape` to close and arrow keys to move between items. |
| `counters.js` | Detects when a Counter component enters the viewport (via `IntersectionObserver`), then animates the number from 0 to its target value once; immediately renders the final value with no animation if `prefers-reduced-motion` is set. |
| `scroll-reveal.js` | Generic fade/slide-in-on-scroll behavior for section content (per `design/ANIMATIONS.md`), using `IntersectionObserver` to add a reveal class once per element; disabled entirely under `prefers-reduced-motion` (content remains visible by default in CSS regardless — this module only adds the entrance effect, it is never required for content to be visible, per the accessibility/progressive-enhancement rule in `design/ANIMATIONS.md`). |
| `contact-form.js` | Client-side validation (required fields, email/phone format) with accessible error messaging; handles submission (`fetch`-based, target endpoint pending the backend decision flagged in `COMPONENT_ARCHITECTURE.md`); manages the accessible success/error confirmation state via an `aria-live` region, per `specifications/ACCESSIBILITY_SPECIFICATION.md`. |
| `testimonials.js` | Only needed if the carousel option is confirmed (per the open question in `specifications/HOME_PAGE_SPECIFICATION.md`); manages slide transitions, pause-on-hover/focus, and disables autoplay under `prefers-reduced-motion`. If the static-grid alternative is chosen instead, this module is not needed at all. |
| `lazy-load.js` | A thin helper layer for any lazy-loading need not already covered by the native `loading="lazy"` image/iframe attribute (e.g., swapping a video `src` in only when its section is near the viewport) — see `PERFORMANCE_STRATEGY.md`. |

## 4. Cross-Cutting Rules

- **No global variables/state.** Each module encapsulates its own state; if two modules genuinely need to share state (unlikely given the feature set above), that state is passed explicitly between them via function parameters/return values, not a shared global object.
- **No direct DOM manipulation from `main.js`.** All DOM interaction happens inside the relevant feature module; `main.js` only orchestrates which modules run.
- **Event listeners are added, never inlined.** No `onclick="..."` attributes in HTML — all behavior is attached via `addEventListener` inside the owning module, keeping markup free of behavior logic per separation-of-concerns.
- **Progressive enhancement default.** Every module assumes its corresponding HTML/CSS already presents usable, visible content without JavaScript (e.g., FAQ answers are not hidden via JS alone if CSS/HTML can express the default collapsed state; gallery images are real `<img>` elements, not JS-rendered). JavaScript enhances interactions (accordion collapse, lightbox, animated counters) rather than being required to render content — this is both an accessibility safeguard and a performance one (content is visible even if a script fails to load).
- **Naming:** follows `FILE_NAMING_CONVENTIONS.md` exactly — camelCase functions/variables, `UPPER_SNAKE_CASE` constants, `data-*` attributes as JS hooks rather than reusing CSS classes for element selection.

## 5. Feature Coverage Checklist (per milestone brief)

| Required feature | Covered by |
|---|---|
| Mobile menu | `mobile-menu.js` |
| Gallery | `gallery.js` |
| FAQ | `accordion.js` |
| Animations (scroll-reveal, hover states) | `scroll-reveal.js` (scroll-triggered); hover states are pure CSS (`:hover`/`:focus-visible`), requiring no JavaScript at all, per `design/ANIMATIONS.md` |
| Counters | `counters.js` |
| Form | `contact-form.js` |
| Lazy loading | Native `loading="lazy"` attribute first (no JS needed for standard image/iframe lazy-loading); `lazy-load.js` only for the few cases native attributes can't handle (e.g., background video swap-in) |

## 6. Loading Strategy

- `main.js` is loaded with `type="module"`, which is deferred by default (executes after HTML parsing, in document order) — no separate `defer` attribute needed, and no render-blocking behavior, supporting the Performance objective in `PERFORMANCE_STRATEGY.md`.
- Feature modules are fetched either as static `import` statements (for behavior needed immediately/above-the-fold, e.g., `mobile-menu.js`) or dynamic `import()` calls (for behavior tied to below-the-fold content, e.g., `gallery.js`, `counters.js`) — deciding which pattern applies to each module is a small implementation-time judgment call within the rules above, not a further architectural decision.

## 7. Open Question for Client/Developer Validation

- Confirm the Contact Form's submission destination (email-forwarding service, third-party form backend, or a future custom backend) before `contact-form.js` implementation begins — this is a content/infrastructure decision, not a front-end architecture one, but it directly determines how that module's submission logic is written.
