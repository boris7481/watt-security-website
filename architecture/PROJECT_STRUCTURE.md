# Project Structure — Watt Security

This document describes every folder in the project and the role of every future file within it. It extends the high-level structure already introduced in `README.md` with full implementation-level detail.

## 1. Full Target Structure

```
WEBSITE_WATT_SECURITY/
│
├── index.html                      # Homepage (root, per PAGE_ARCHITECTURE.md)
│
├── pages/
│   ├── about.html                  # "À propos" page
│   ├── services.html               # "Services" page (all 9 services detailed)
│   ├── gallery.html                # Full photo & video gallery page
│   ├── contact.html                # Standalone full contact page
│   ├── legal-notice.html           # "Mentions légales"
│   └── privacy-policy.html         # "Politique de confidentialité"
│
├── assets/
│   ├── css/
│   │   ├── variables.css              # CSS custom properties: colors, spacing, typography scale, radii, shadows
│   │   ├── reset.css                # Reset/normalize + base element styles (body, headings, links, lists)
│   │   ├── layout.css              # Header, footer, grid/container, section rhythm
│   │   ├── components.css          # All reusable component styles (buttons, cards, forms, badges, alerts, accordion, nav, etc.)
│   │   ├── utilities.css           # Small helper classes (visually-hidden, text-center, spacing overrides — used sparingly)
│   │   └── pages/
│   │       ├── home.css            # Home-page-only overrides (only if truly needed beyond components/layout)
│   │       ├── about.css
│   │       ├── services.css
│   │       ├── gallery.css
│   │       └── contact.css
│   │
│   ├── js/
│   │   ├── main.js                 # Entry point (type="module"), imports/initializes the modules below per page
│   │   └── modules/
│   │       ├── mobile-menu.js      # Mobile navigation open/close [implemented]
│   │       ├── hero-parallax.js    # Subtle scroll-linked Hero background translate [implemented]
│   │       ├── hero-video.js       # Progressively upgrades the Hero poster to video once footage exists [implemented]
│   │       ├── accordion.js        # Generic accordion logic (powers FAQ, reusable elsewhere) [implemented]
│   │       ├── counters.js         # Animated number count-up (Key Numbers section) [implemented]
│   │       ├── scroll-reveal.js    # Fade/slide-in on scroll (IntersectionObserver-based) [implemented]
│   │       ├── testimonials.js     # Testimonial grid rendering [implemented]
│   │       ├── contact-info.js     # Renders contact details from data/contact.json, reused by footer.js [implemented]
│   │       ├── contact-map.js      # Google Maps embed for the Contact section [implemented]
│   │       ├── contact-form.js     # Form validation + submission handling [implemented]
│   │       ├── footer.js           # Site-wide footer rendering [implemented]
│   │       ├── legal-page.js       # Shared NAP contact block for the legal pages [implemented]
│   │       ├── page-paths.js       # Path-resolution helper so data-driven modules work from pages/*.html too [implemented]
│   │       ├── gallery.js          # Gallery grid + lightbox behavior [not built — plain grid + native lightbox-free viewing was sufficient]
│   │       └── lazy-load.js        # Progressive/lazy loading helpers (only where native `loading="lazy"` is insufficient) [not built — native lazy-loading was sufficient everywhere]
│   │
│   ├── images/                     # Organized by category, matching specifications/MEDIA_SPECIFICATION.md
│   │   ├── agents/
│   │   ├── surveillance/
│   │   ├── corporate/
│   │   ├── hotels/
│   │   ├── events/
│   │   ├── k9/
│   │   ├── patrols/
│   │   ├── vehicles/
│   │   ├── access-control/
│   │   ├── team/
│   │   └── og/                     # Open Graph / social share images
│   │
│   ├── videos/                     # Organized by category, matching specifications/MEDIA_SPECIFICATION.md
│   │   ├── hero/
│   │   ├── interventions/
│   │   ├── events/
│   │   ├── surveillance/
│   │   └── patrols/
│   │
│   ├── icons/                      # Phosphor Icons SVGs actually used on the site (subset, not the full library — see design/ICONOGRAPHY.md)
│   │
│   ├── fonts/                      # Self-hosted Montserrat & Inter font files (per design/TYPOGRAPHY.md), woff2 format
│   │
│   └── documents/                  # Downloadable PDFs (e.g., a company brochure), if/when needed
│
├── data/                           # Structured content, e.g. a JSON file listing services or FAQ entries if content is externalized from HTML (see open question below)
│
├── design/                         # Design system documentation (Milestone 2)
├── specifications/                 # Functional/UX specifications (Milestone 3)
├── architecture/                   # Technical architecture documentation (this milestone)
│
├── .github/                        # GitHub configuration (workflows, templates)
│
├── README.md
├── PROJECT_RULES.md
├── CHANGELOG.md
├── LICENSE
└── .gitignore
```

## 2. Root-Level Files

| File | Role |
|---|---|
| `index.html` | The homepage — implements all 14 sections defined in `specifications/HOME_PAGE_SPECIFICATION.md`, in order. |

## 3. `pages/` — Role of Each File

See `PAGE_ARCHITECTURE.md` for full content detail per page. In summary:

| File | Role |
|---|---|
| `about.html` | Expanded company story, values, and team — deeper version of the homepage's Presentation and Team sections. |
| `services.html` | Full detail on all nine services, expanding on the homepage Service Cards. |
| `gallery.html` | Complete photo and video gallery (the homepage gallery sections show only a curated subset). |
| `contact.html` | Standalone, full-page contact experience (form + map + all contact channels), for visitors who land directly on a "contact" search result or link. |
| `legal-notice.html` | Legal/company registration information ("Mentions légales"). |
| `privacy-policy.html` | Data collection and privacy practices, particularly relevant given the Contact form collects personal data. |

## 4. `assets/css/` — Role of Each File

| File | Role |
|---|---|
| `variables.css` | All CSS custom properties (`--color-*`, `--space-*`, `--font-*`, etc.) generated directly from `design/COLOR_PALETTE.md`, `design/TYPOGRAPHY.md`, and `design/SPACING.md`. The single source of truth every other CSS file reads from. |
| `reset.css` | Reset/normalize rules, base typography applied to raw elements (`body`, `h1`–`h6`, `p`, `a`, `ul`/`ol`), base focus-visible styling. |
| `layout.css` | Site-wide structural rules: header/nav bar, footer, page containers/max-width, the 12-column grid, section vertical rhythm (per `design/SPACING.md`). |
| `components.css` | Every reusable component style, matching `COMPONENT_ARCHITECTURE.md` one-to-one: buttons, cards (service/team/testimonial), badges, alerts, forms, accordion, gallery items, counters, WhatsApp button. May be split into multiple files later if it grows too large — see `CSS_ARCHITECTURE.md`. |
| `utilities.css` | A small, deliberately limited set of helper classes (e.g., `.visually-hidden`, `.text-center`) — not a full utility-class framework (per the "no framework" decision in `FRONTEND_ARCHITECTURE.md`). |
| `pages/*.css` | Page-specific rules only for the rare cases where a page needs a layout tweak not covered by shared layout/components — kept minimal by design. |

## 5. `assets/js/` — Role of Each File

See `JAVASCRIPT_ARCHITECTURE.md` for full detail. In summary, `main.js` is the only file referenced directly by HTML (`<script type="module" src="assets/js/main.js">`); it imports whichever `modules/*.js` files are relevant to the current page.

## 6. `assets/images/`, `assets/videos/`, `assets/icons/`, `assets/fonts/`, `assets/documents/`

Subfolder categories mirror `specifications/MEDIA_SPECIFICATION.md` exactly, so any contributor sourcing or adding media knows precisely where a new asset belongs without guessing. `assets/icons/` holds only the specific SVGs actually used (exported/copied individually from Phosphor Icons per `design/ICONOGRAPHY.md`), not the entire icon library, to keep the repository lean.

## 7. `data/`

Reserved for structured content that may be externalized from raw HTML in a future milestone — for example, a `services.json` or `faq.json` if the team decides to generate repetitive markup (service cards, FAQ items) from a single data source rather than duplicating near-identical HTML blocks by hand. **This is a future-facing placeholder, not a decision to build a data-driven templating system now** — flagged as an open question at the end of this milestone, since it would require either a build step or a small amount of JavaScript-driven rendering, both of which interact with the "no build tool" default in `FRONTEND_ARCHITECTURE.md`.

## 8. Naming Discipline

Every file and folder above follows the conventions defined in `FILE_NAMING_CONVENTIONS.md` — lowercase, kebab-case, descriptive. No file should ever be added to this structure with a name that doesn't fit an existing category above without first updating this document.
