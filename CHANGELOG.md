# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [v1.0.0] - 2026-07-06

First production-ready release. Summarizes all work delivered across the project's milestones since v0.1.0.

### Added — Design & Documentation

- Complete design system (`design/`): brand guide, color palette, typography, spacing, UI components, iconography, animations.
- Functional/UX specifications (`specifications/`): homepage spec, user journey, CTA strategy, media spec, SEO spec, accessibility spec.
- Technical architecture documentation (`architecture/`): frontend, CSS, JavaScript, component, page, project structure, and performance strategy.
- Media generation prompt documentation (`documentation/media-prompts/`) for the full photo/video library.

### Added — Homepage (`index.html`)

- Header with responsive navigation and mobile menu.
- Hero section with autoplaying background video, poster fallback, and progressive video-availability detection.
- Services, Why Choose Us, Key Numbers (animated counters), K9 Unit, Photo Gallery, Testimonials, and FAQ sections — all content-driven from `data/*.json`, no hardcoded copy.
- Contact section: validated contact form and an embedded Google Maps location (key-less, privacy-conscious embed).
- Site-wide footer with dynamic contact/social/legal links.

### Added — Additional Pages

- `pages/legal-notice.html` and `pages/privacy-policy.html`, sharing the same header/footer/navigation and design system as the homepage.

### Added — SEO & Structured Data

- Full `<head>` optimization: title, meta description, canonical, robots, theme-color.
- Open Graph and Twitter Card tags on every page.
- `robots.txt` and `sitemap.xml`.
- `LocalBusiness` JSON-LD structured data.

### Added — Media

- Final hero poster and looping background video.
- Nine final photography assets across the Photo Gallery, plus a dedicated K9 Unit feature photo.
- All raster photography re-encoded as genuine WebP (previously mislabeled PNG data), reducing total delivered media weight by ~90%.

### Changed — Performance

- CSS delivery switched from a single `@import`-based stylesheet to parallel `<link>` tags, removing a render-blocking waterfall.
- `loading="lazy"`, `decoding="async"`, and `fetchpriority="high"` applied consistently across Hero, Gallery, and K9 media.

### Fixed

- Corrected two header navigation links ("Galerie", "Contact") that pointed to `#` instead of their real in-page anchors.
- Removed dead code: unused JS exports, two orphaned icon SVGs, and nine orphaned image placeholders left over after real photography was integrated.
- Corrected stale documentation/comments in `sitemap.xml`, `data/footer.json`, and `index.html` that still described the legal pages and gallery placeholders as not yet built.

### Known Open Items (flagged for post-launch follow-up)

- Production domain is still a placeholder (`https://www.wattsecurity.com`) pending final confirmation.
- Favicon PNG/ICO variants and Apple Touch Icon not yet produced (SVG favicon only).
- Dedicated 1200×630 Open Graph image not yet produced (temporarily reuses the logo).
- Legal Notice placeholders pending client confirmation: legal representative name, hosting provider, business registration number.
- Hero video accessibility: no visible pause control yet (WCAG 2.2.2); video currently plays on mobile rather than falling back to the poster only.

## [v0.1.0] - 2026-07-05

### Added

- Initial project structure (`assets/css`, `assets/js`, `assets/images`, `assets/videos`, `assets/icons`, `assets/fonts`, `assets/documents`, `pages/`, `data/`, `.github/`).
- `README.md` with project description, objectives, technologies, folder structure, Git workflow, coding standards, installation instructions, and roadmap.
- `PROJECT_RULES.md` defining development rules and standards.
- `.gitignore` configured for Windows, VS Code, Node/npm, logs, and temporary files.
- `LICENSE` (MIT).
- `CHANGELOG.md` initialized.
