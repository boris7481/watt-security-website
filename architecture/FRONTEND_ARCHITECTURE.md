# Front-End Architecture — Watt Security

This document defines the overarching technical philosophy for the Watt Security front-end. Every other document in `architecture/` (`PROJECT_STRUCTURE.md`, `COMPONENT_ARCHITECTURE.md`, `PAGE_ARCHITECTURE.md`, `FILE_NAMING_CONVENTIONS.md`, `CSS_ARCHITECTURE.md`, `JAVASCRIPT_ARCHITECTURE.md`, `PERFORMANCE_STRATEGY.md`) implements the principles set out here.

## 1. General Philosophy

The site is a **static, multi-page website** built with plain HTML5, CSS3, and vanilla JavaScript — no framework (React/Vue/etc.), no CSS framework (Bootstrap/Tailwind), and no bundler/build step by default, per the stack already committed to in `README.md`.

This choice is deliberate, not a limitation:

- A corporate marketing site with a handful of pages (see `PAGE_ARCHITECTURE.md`) does not benefit from a JavaScript framework's reactivity model — it needs fast first paint, excellent SEO crawlability, and long-term maintainability by any front-end developer without a framework-specific learning curve.
- Every dependency removed is one less thing that can break, go stale, or slow down the Lighthouse score defined as a project objective (`README.md`, `PERFORMANCE_STRATEGY.md`).
- Modern vanilla HTML/CSS/JS (CSS custom properties, ES modules, `IntersectionObserver`, native `<dialog>`/lazy-loading attributes) can deliver everything this project needs — mobile menu, gallery lightbox, FAQ accordion, animated counters, form handling — without a framework.

## 2. Architecture Retained

**Static multi-page architecture** (not a Single Page Application):

- Each page (`index.html`, `pages/about.html`, `pages/services.html`, `pages/gallery.html`, `pages/contact.html`, `pages/legal-notice.html`, `pages/privacy-policy.html` — see `PAGE_ARCHITECTURE.md`) is a real, independently-crawlable HTML document.
- This maximizes SEO performance (aligned with `specifications/SEO_SPECIFICATION.md`) since every page has its own URL, meta tags, and structured data without relying on client-side routing or JavaScript to render content search engines must index.
- Shared visual elements (header, navigation, footer, WhatsApp button) are **repeated markup** across pages rather than a client-side "layout" — there is no server-side templating engine in this milestone's scope. Consistency across pages is enforced by discipline (see `COMPONENT_ARCHITECTURE.md` and `FILE_NAMING_CONVENTIONS.md`), not by a shared template file. If the project later adopts a static site generator or templating step, this document should be revisited — flagged as an open question at the end of this milestone.

## 3. Modularity

Modularity is achieved at three levels:

1. **CSS modularity** — styles are organized into small, single-responsibility partials (tokens, base, layout, components, utilities) per `CSS_ARCHITECTURE.md`, mirroring the component boundaries defined in `COMPONENT_ARCHITECTURE.md`.
2. **JavaScript modularity** — each interactive behavior (mobile menu, gallery, FAQ accordion, counters, form validation, lazy loading) is its own ES module with a single responsibility, per `JAVASCRIPT_ARCHITECTURE.md`. No monolithic `script.js` containing unrelated logic.
3. **Component-level thinking in markup** — even without a JS framework, each reusable visual unit (Service Card, Testimonial Card, FAQ Item, etc.) is treated as a "component": a self-contained markup+class pattern that is copy-consistent everywhere it appears, documented once in `COMPONENT_ARCHITECTURE.md` rather than redesigned per page.

## 4. Evolutivity (Scalability of the Codebase)

The architecture is designed so the site can grow without a rewrite:

- **New pages** (e.g., individual service detail pages, a blog/news section) slot into the existing `pages/` structure and reuse existing components and CSS/JS modules without modification to the core architecture — see the open question on individual service pages in `PAGE_ARCHITECTURE.md`.
- **New components** follow the same documentation-first pattern established in `COMPONENT_ARCHITECTURE.md`: define role and behavior before writing markup/CSS/JS.
- **Design system changes** (colors, type, spacing — `design/`) propagate through the CSS token layer (`CSS_ARCHITECTURE.md`) without needing to hunt through component files for hard-coded values.
- If the project eventually outgrows a no-build-tool approach (e.g., needs CSS/JS minification and concatenation to protect the Lighthouse Performance score at scale), the modular file structure defined now is already organized in the correct load order to be concatenated or bundled later with minimal rework — see the open question in `PERFORMANCE_STRATEGY.md`.

## 5. Reusability

Reusability is enforced through:

- A closed, documented set of components (`COMPONENT_ARCHITECTURE.md`) — new UI patterns are only introduced by extending that document first, not by inventing one-off markup on a single page.
- A closed design token set (colors, spacing, typography — already defined in `design/`) — no new colors, spacing values, or typefaces are introduced ad hoc in CSS.
- Consistent naming (`FILE_NAMING_CONVENTIONS.md`) so the same concept (e.g., a "card") is always named and structured the same way regardless of which page or section it appears in.
- Shared JS modules (`JAVASCRIPT_ARCHITECTURE.md`) — e.g., one accordion module powers both the FAQ (homepage) and any future accordion use elsewhere, rather than duplicating logic.

## 6. How This Document Relates to the Rest of `architecture/`

| Document | Answers |
|---|---|
| `PROJECT_STRUCTURE.md` | Where does each file live? |
| `COMPONENT_ARCHITECTURE.md` | What are the reusable UI building blocks and what does each do? |
| `PAGE_ARCHITECTURE.md` | What pages exist and what does each contain? |
| `FILE_NAMING_CONVENTIONS.md` | How is everything named, consistently? |
| `CSS_ARCHITECTURE.md` | How is styling organized and loaded? |
| `JAVASCRIPT_ARCHITECTURE.md` | How is behavior organized and loaded? |
| `PERFORMANCE_STRATEGY.md` | How do we guarantee the site stays fast as it grows? |

No implementation (HTML/CSS/JS) is produced in this milestone — this and the following documents are the reference a developer will build directly from in a future milestone.
