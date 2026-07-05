# Watt Security — Corporate Website

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
├── assets/
│   ├── css/          # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/         # Image assets (photos, illustrations)
│   ├── videos/         # Video assets
│   ├── icons/           # Icon assets (SVG/PNG)
│   ├── fonts/           # Self-hosted web fonts
│   └── documents/       # Downloadable documents (PDFs, brochures)
│
├── pages/               # Additional HTML pages (beyond homepage)
├── data/                # Structured content/data files (JSON, etc.)
├── .github/             # GitHub configuration (workflows, templates)
│
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

This is currently a static project with no build step.

1. Clone the repository:
   ```
   git clone <repository-url>
   cd WEBSITE_WATT_SECURITY
   ```
2. Open the project folder in your code editor (e.g., VS Code).
3. Once HTML pages exist, open them directly in a browser or serve them with a local static server (e.g., the VS Code "Live Server" extension) for the best experience (live reload, correct relative paths).

No dependencies are required at this stage. This section will be updated if a build tool or package manager is introduced later.

## 9. Future Roadmap

- [ ] Milestone 1: Project initialization (this milestone)
- [ ] Milestone 2: Base HTML structure (homepage skeleton)
- [ ] Milestone 3: Global styling system (design tokens, typography, colors)
- [ ] Milestone 4: Header & navigation
- [ ] Milestone 5: Hero section
- [ ] Milestone 6: Services section
- [ ] Milestone 7: About / trust-building section
- [ ] Milestone 8: Testimonials / clients section
- [ ] Milestone 9: Contact section & form
- [ ] Milestone 10: Footer
- [ ] Milestone 11: Responsive refinement
- [ ] Milestone 12: Performance & SEO optimization
- [ ] Milestone 13: Accessibility audit
- [ ] Milestone 14: Deployment

This roadmap will evolve as the project progresses. Each milestone is implemented only when explicitly requested.
