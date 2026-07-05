# Performance Strategy — Watt Security

`README.md` sets a Lighthouse target above 90; this milestone raises the working bar to **above 95**, which is achievable for a static, dependency-free site if the disciplines below are followed from the first line of implementation rather than retrofitted afterward. This document is the checklist implementation must satisfy across Performance, and it directly supports Accessibility/Best Practices/SEO scores as a side effect (semantic HTML, proper alt text, and correct meta tags — already specified in `specifications/` and `PROJECT_RULES.md` — also feed those Lighthouse categories).

## 1. Lazy Loading

- All below-the-fold images use the native `loading="lazy"` attribute — no custom JavaScript lazy-loading library is needed for standard `<img>` elements.
- The Hero's background video (or its mobile poster substitute, per `specifications/HOME_PAGE_SPECIFICATION.md`) is the only above-the-fold media and is never lazy-loaded (it must be immediately visible).
- Gallery and Video Gallery thumbnails (Sections 8–9, and the full `pages/gallery.html`) are lazy-loaded by default; the full-resolution lightbox image/video is only fetched when the visitor actually opens it, not preloaded in bulk.
- Embedded Google Map (Section 13) uses a lazy-loading iframe pattern (native `loading="lazy"` on the iframe, or a "click to load" placeholder if the map embed proves heavy) — maps embeds are a common, easily-overlooked Lighthouse Performance cost.

## 2. Compression

- **Images:** served as WebP (primary) with JPEG fallback via `<picture>`, at the resolutions and file-size targets already defined in `specifications/MEDIA_SPECIFICATION.md` (e.g., thumbnails under ~150KB, hero poster under ~300KB). Compression happens once, at asset-preparation time, not on the fly.
- **Videos:** compressed at a controlled bitrate (~4–6 Mbps for the hero loop, per `specifications/MEDIA_SPECIFICATION.md`), delivered as MP4 (H.264) with a WebM fallback.
- **Text assets (HTML/CSS/JS):** served pre-minified where the hosting platform supports build-time or edge-level minification (many static hosts auto-minify/compress on deploy — to be confirmed once hosting is chosen); if not available at the hosting layer, a minimal minification step is the one build-tool exception worth considering — flagged as the same open question raised in `CSS_ARCHITECTURE.md` and `JAVASCRIPT_ARCHITECTURE.md`.
- **Transport compression:** Gzip or Brotli compression enabled at the server/CDN level for all text-based assets (HTML, CSS, JS, SVG) — a hosting-configuration item, not a code-level one, but essential to the >95 target.

## 3. Preload & Resource Hints

- **Fonts:** the specific self-hosted `.woff2` weights actually used above the fold (per `design/TYPOGRAPHY.md` — Montserrat 700/800 for the Hero H1, Inter 400 for body) are preloaded via `<link rel="preload" as="font" type="font/woff2" crossorigin>` in the document head, so text doesn't wait on the normal CSS-discovery loading order.
- **`font-display: swap`** is used on every `@font-face` declaration, so text renders immediately in a fallback font rather than staying invisible while the webfont loads (avoids a Flash of Invisible Text, protects both perceived performance and the Lighthouse "avoid invisible text" audit).
- **Hero poster image:** preloaded (`<link rel="preload" as="image">`) since it's the largest above-the-fold asset and directly affects Largest Contentful Paint (LCP), the most heavily-weighted Lighthouse Performance metric.
- **No preloading of below-the-fold assets** (gallery images, inner-page-only fonts) — over-preloading competes for bandwidth with what the visitor actually needs first and can hurt LCP rather than help it.
- **`dns-prefetch`/`preconnect`** for any third-party origin actually used (e.g., Google Maps embed domain) — but only for origins genuinely in use, since unused preconnects waste a connection setup.

## 4. Image Optimization

- Exact placement resolutions defined in `specifications/MEDIA_SPECIFICATION.md` are respected precisely — never serve a 1920px-wide source image into a 400px card slot; use `srcset`/`sizes` so each device requests an appropriately-sized file.
- WebP as the default format, per `specifications/MEDIA_SPECIFICATION.md` and `design/ICONOGRAPHY.md` (icons as SVG, which are already optimal and don't need raster compression at all).
- SVG icons are used inline or referenced individually (per `PROJECT_STRUCTURE.md`, only the subset actually used is included in `assets/icons/`), and should be minified/cleaned (no leftover editor metadata) before being added to the project.
- No image is ever served solely for decorative visual flourish if it doesn't earn its performance cost (consistent with the "no decoration without purpose" principle in `design/DESIGN_SYSTEM.md`) — every image on the page should be there because `specifications/HOME_PAGE_SPECIFICATION.md` or `PAGE_ARCHITECTURE.md` calls for it.

## 5. Video Optimization

- The hero video is the single highest-risk asset for Performance scoring on this site; per `specifications/HOME_PAGE_SPECIFICATION.md` Section 1, it is **replaced entirely by a static poster image on mobile** rather than merely resized — mobile Lighthouse audits (and real mobile users on constrained connections) never pay the cost of downloading hero video at all.
- Video files are hosted efficiently (a CDN or a static host with proper range-request/byte-serving support for scrubbing/streaming) rather than as a single large blocking download.
- Gallery videos (Section 9, `pages/gallery.html`) load only their poster image until the visitor explicitly presses play — no video bytes are ever fetched for a video the visitor hasn't chosen to watch.
- No video anywhere on the site autoplays with sound, which is both a UX/accessibility rule (per `specifications/ACCESSIBILITY_SPECIFICATION.md`) and a performance one (audio tracks add weight and browsers often block/deprioritize autoplaying audio anyway).

## 6. Browser Caching

- Static assets (images, videos, fonts, CSS, JS) are served with long-lived cache headers (e.g., `Cache-Control: public, max-age=31536000, immutable`) since their filenames should be stable — if an asset changes meaningfully, it should be re-named/fingerprinted (e.g., a version suffix) rather than relying on visitors to fetch a stale cached copy, since this project does not use a build tool that auto-generates content hashes. This filename-versioning approach is a manual discipline to note for whoever updates assets post-launch.
- HTML documents themselves use a short or `no-cache` policy (so content updates are seen promptly) while their linked static assets use the long-lived policy above — a standard, low-risk caching split.
- This is a hosting/server-configuration concern; the specific implementation (headers, CDN configuration) depends on the hosting platform chosen, which is outside this milestone's scope (flagged as an open item).

## 7. CSS Optimization

- Six-plus small, purpose-scoped files (per `CSS_ARCHITECTURE.md`) rather than one enormous stylesheet — allows the browser to fetch them in parallel and keeps any single file easy to audit for unused rules.
- No unused CSS: every rule in `components.css` should correspond to a component actually defined in `COMPONENT_ARCHITECTURE.md` and actually used on a page in `PAGE_ARCHITECTURE.md` — periodic manual review (or a coverage tool at implementation time) should catch drift.
- Critical-path CSS: `tokens.css` and `base.css` are tiny by design and load first, so the browser can begin rendering basic text/layout before `components.css` finishes loading — no additional "critical CSS inlining" step is planned at this stage, since the file sizes involved are small enough for this static site that the added build complexity isn't justified; revisit only if real-world testing shows otherwise.
- No render-blocking `@import` chains (already ruled out in `CSS_ARCHITECTURE.md`).

## 8. JavaScript Optimization

- `type="module"` scripts are deferred by default (per `JAVASCRIPT_ARCHITECTURE.md`) — no JavaScript blocks HTML parsing/rendering.
- Dynamic `import()` for below-the-fold, page-specific features (gallery, counters, testimonials carousel if used) means a visitor never downloads code for a feature that isn't present on the page they're viewing.
- No JavaScript framework runtime to download/parse/execute (per `FRONTEND_ARCHITECTURE.md`) — this alone removes the single largest common source of poor mobile Lighthouse scores on comparable corporate sites.
- Event listeners and `IntersectionObserver` usage are scoped narrowly (one observer instance reused across similar elements like Counters or scroll-reveal targets, rather than one observer per element) to minimize memory/CPU overhead.

## 9. Additional Lighthouse-Relevant Practices

- Correct `width`/`height` (or `aspect-ratio`) attributes on every image and video element to prevent Cumulative Layout Shift (CLS) as media loads — directly affects the Performance score and visibly affects perceived quality/trust (a shifting layout reads as unpolished, undermining the premium brand goal).
- Semantic HTML and correct heading hierarchy (already mandated in `PROJECT_RULES.md` and `specifications/SEO_SPECIFICATION.md`) contribute directly to Accessibility and SEO category scores alongside Performance.
- HTTPS is assumed for the final hosting environment (required for both a "Best Practices" pass and for any `service worker`/modern API usage) — a hosting decision outside this milestone's scope.

## 10. Open Questions for Client/Developer Validation

- **Hosting platform choice** — determines what's available for free at the infrastructure level (auto-minification, Brotli compression, CDN, cache-header configuration, HTTPS). This should be decided before implementation begins, since several items above (§2, §6) depend on it.
- **Build-tool-free vs. a minimal minification step** — this document (and `CSS_ARCHITECTURE.md`/`JAVASCRIPT_ARCHITECTURE.md`) currently assumes hosting-level minification/compression is sufficient to hit >95 without introducing a build tool. If the chosen host doesn't provide this, introducing a small, single-purpose minification step (not a full bundler/framework) should be explicitly proposed and approved before adoption, since it would be a change to the "no build tool" commitment in `README.md`.
