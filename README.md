# Watt Security — Corporate Website

**Version: v1.0.0 — Production Ready**

## 1. Project Description

Official corporate website for **Watt Security**, a private security company based in Douala, Cameroon. The site is designed to present the company's services professionally and generate qualified leads from corporate, industrial, residential, and event clients.

The project is built incrementally, milestone by milestone, with a strong focus on trust, professionalism, discipline, modernity, and performance.

## 2. Objectives

- Present Watt Security as a premium, trustworthy, and modern security provider.
- Clearly communicate service offerings and coverage areas.
- Generate qualified contact/quote requests from businesses and individuals.
- Achieve a Lighthouse score above 90 across Performance, Accessibility, Best Practices, and SEO.
- Provide a fully responsive experience across mobile, tablet, and desktop.

## 3. Services Covered

- Corporate Security
- Residential Security
- Industrial Site Surveillance
- Event Security
- VIP Protection
- Security Guards
- Patrol Services
- K9 Security Dogs
- 24/7 Security Services

## 4. Technologies

- **HTML5** — semantic, accessible markup
- **CSS3** — modern, responsive-first styling (no framework unless decided otherwise)
- **JavaScript (Vanilla)** — progressive enhancement, no unnecessary dependencies
- **Git / GitHub** — version control and collaboration
- Static hosting (target platform to be confirmed)

No build tools or frameworks are introduced unless explicitly required by a future milestone.

## 5. Folder Structure

```
WEBSITE_WATT_SECURITY/
│
├── index.html                # Homepage
├── pages/                    # Additional HTML pages
│   ├── legal-notice.html         # Mentions légales
│   └── privacy-policy.html       # Politique de confidentialité
│
├── assets/
│   ├── css/          # Stylesheets (variables, reset, layout, components, utilities)
│   ├── js/            # JavaScript (main.js entry point + modules/)
│   ├── images/         # Photos, organized by category
│   ├── videos/         # Hero background video
│   ├── icons/           # Favicon and inline-SVG-sourced icons
│   ├── fonts/           # Self-hosted web fonts
│   ├── logo/            # Official brand logo
│   └── documents/       # Downloadable documents (PDFs, brochures)
│
├── data/                # Structured content (JSON): contact, footer, stats, testimonials, FAQ
├── design/              # Design system documentation
├── specifications/      # Functional/UX/SEO/accessibility specifications
├── architecture/        # Technical architecture documentation
├── documentation/       # Supporting project documentation (e.g. media generation prompts)
├── .github/             # GitHub configuration (workflows, templates)
│
├── robots.txt
├── sitemap.xml
├── README.md
├── PROJECT_RULES.md
├── CHANGELOG.md
├── LICENSE
└── .gitignore
```

## 6. Git Workflow

- `main` — stable, production-ready branch.
- Feature branches: `feature/<short-description>` (e.g., `feature/hero-section`).
- Fix branches: `fix/<short-description>`.
- One milestone = one focused set of commits/PRs.
- No direct large-scale commits without review when working in a team context.

### Commit Naming Convention

Following a simplified Conventional Commits style:

- `feat: add hero section markup`
- `fix: correct navbar overlap on mobile`
- `style: adjust spacing on services section`
- `docs: update README installation steps`
- `chore: initialize project structure`
- `refactor: simplify navigation script`

## 7. Coding Standards

See [PROJECT_RULES.md](PROJECT_RULES.md) for the full set of development rules, including clean code, accessibility, semantic HTML, responsive-first design, performance, SEO, and naming conventions.

## 8. Installation Instructions

This is a static project with no build step and no dependencies to install.

1. Clone the repository:
   ```
   git clone <repository-url>
   cd WEBSITE_WATT_SECURITY
   ```
2. Open the project folder in your code editor (e.g., VS Code).

## 9. Running the Project Locally

Open `index.html` directly in a browser, or serve the project root with any static file server for the best experience (correct relative paths, live reload):

```
python -m http.server 5550
```
or the VS Code "Live Server" extension, then visit `http://localhost:5550/index.html`.

No dependencies, package manager, or build step are required.

## 10. Project Status — v1.0.0

Development is complete. All planned homepage sections, the legal pages, SEO/structured data, accessibility pass, performance optimization, and final media integration have been delivered and audited (see `CHANGELOG.md` for the full v1.0.0 summary).

**Delivered:**
- Homepage (`index.html`): Header/Navigation, Hero (video + poster), Services, Why Choose Us, Key Numbers, K9 Unit, Photo Gallery, Testimonials, FAQ, Contact (form + Google Maps), Footer.
- Legal pages (`pages/legal-notice.html`, `pages/privacy-policy.html`).
- Complete SEO setup: meta tags, Open Graph, Twitter Card (final dedicated preview image), `robots.txt`, `sitemap.xml`, JSON-LD (`LocalBusiness`).
- Performance optimization: real WebP encoding, lazy loading, `fetchpriority`/`decoding` hints, parallel CSS delivery.
- Accessibility: WCAG AA contrast, keyboard focus states, `prefers-reduced-motion` support.
- Complete favicon set and Web App Manifest (SVG, ICO, PNG variants, Apple Touch Icon).

**Known open items before public launch** (see `CHANGELOG.md` v1.0.0 entry for full detail): final production domain, and a few client-confirmation items (legal representative name, hosting provider, business registration number) flagged as placeholders in `pages/legal-notice.html`.

Pages not yet built (`about.html`, `services.html`, `gallery.html`, `contact.html`) remain reserved filenames in `architecture/PAGE_ARCHITECTURE.md` for potential future milestones, out of scope for this v1.0.0 release.
