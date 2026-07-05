# Project Rules — Watt Security Website

These rules apply to all contributions to this project, across all milestones. They exist to ensure the final product is professional, trustworthy, performant, and maintainable.

## 1. Clean Code

- Keep markup, styles, and scripts simple and readable — clarity over cleverness.
- No dead code, no commented-out blocks left in the codebase.
- One responsibility per file/component/section.
- Avoid premature abstraction — do not build for hypothetical future needs.
- Keep indentation and formatting consistent (2 spaces for HTML/CSS/JS unless otherwise agreed).

## 2. Semantic HTML

- Use semantic elements correctly: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Only one `<h1>` per page; maintain a logical heading hierarchy (`h1` → `h2` → `h3`, no skipped levels).
- Use `<button>` for actions and `<a>` for navigation — never the reverse.
- Use lists (`<ul>`/`<ol>`) for grouped items, tables only for tabular data.

## 3. Accessibility (a11y)

- All images require meaningful `alt` text (empty `alt=""` for decorative images).
- Sufficient color contrast (WCAG AA minimum) for all text.
- All interactive elements must be keyboard-navigable and show a visible focus state.
- Use ARIA attributes only when semantic HTML is insufficient.
- Forms must have associated `<label>` elements for every input.
- Respect `prefers-reduced-motion` for animations where relevant.

## 4. Responsive-First Design

- Design and build mobile-first; enhance progressively for tablet and desktop breakpoints.
- Use relative units (`rem`, `%`, `vw/vh`, `clamp()`) over fixed pixel values where appropriate.
- Test layouts at common breakpoints (mobile, tablet, desktop, large desktop).
- No horizontal scrolling or overlapping elements at any supported viewport width.

## 5. Performance

- Optimize and compress all images/videos before committing (`assets/images`, `assets/videos`).
- Prefer modern image formats (WebP/AVIF) with fallbacks where needed.
- Minimize the number of external requests and third-party scripts.
- Avoid render-blocking resources; load non-critical CSS/JS asynchronously or deferred.
- Lazy-load below-the-fold images and videos.
- Target: Lighthouse Performance score above 90.

## 6. SEO

- Every page must have a unique, descriptive `<title>` and `meta description`.
- Use structured, semantic headings that reflect actual content hierarchy.
- Add Open Graph / meta tags for social sharing where relevant.
- Use descriptive, keyword-relevant file names and `alt` attributes.
- Provide a clean, crawlable URL/page structure (see `pages/`).
- Target: Lighthouse SEO score above 90.

## 7. Git Workflow

- `main` branch is always stable and deployable.
- Work happens on feature/fix branches, merged via pull request when collaborating.
- Branch naming: `feature/<short-description>`, `fix/<short-description>`, `chore/<short-description>`.
- Keep commits small, focused, and descriptive.
- Update `CHANGELOG.md` for any user-facing or structural change.

## 8. Commit Naming Convention

Follow a simplified Conventional Commits format: `<type>: <short description>`

| Type       | Use case                                              |
|------------|--------------------------------------------------------|
| `feat`     | New feature or section                                  |
| `fix`      | Bug fix                                                 |
| `style`    | Visual/styling changes (no logic change)                |
| `docs`     | Documentation changes (README, comments, etc.)          |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `chore`    | Tooling, config, project structure changes              |
| `perf`     | Performance improvements                                |
| `test`     | Adding or updating tests                                |

Example: `feat: add services section markup`

## 9. Naming Conventions

- **Files & folders:** lowercase, kebab-case (e.g., `hero-section.css`, `contact-form.js`).
- **CSS classes:** BEM-inspired, kebab-case (e.g., `.card__title`, `.btn--primary`).
- **JavaScript variables/functions:** `camelCase`.
- **Constants:** `UPPER_SNAKE_CASE`.
- **Images:** descriptive, kebab-case (e.g., `security-guard-patrol.webp`).
- **IDs:** used sparingly, reserved for unique elements (e.g., anchors, form targets).

## 10. General Discipline

- Only build what is explicitly requested for the current milestone.
- Do not introduce new dependencies, frameworks, or tools without explicit approval.
- Ask before making assumptions on ambiguous requirements.
