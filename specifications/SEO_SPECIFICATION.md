# SEO Specification — Watt Security Homepage

## 1. Primary Keywords

Focused on high-intent, service + location combinations (French and English, reflecting Douala's bilingual context):

- sécurité privée Douala
- private security company Douala
- agence de sécurité Cameroun
- security company Cameroon
- gardiennage Douala
- vigiles Douala
- surveillance entreprise Douala
- sécurité événementielle Douala
- protection rapprochée Cameroun (VIP protection)
- chiens de sécurité Cameroun / K9 security Cameroon

## 2. Secondary Keywords (long-tail)

- meilleure entreprise de sécurité à Douala
- agent de sécurité 24h/24 Douala
- société de gardiennage Cameroun
- sécurité industrielle Cameroun
- patrouille de sécurité Douala
- sécurité résidentielle Douala
- devis sécurité privée Douala
- location vigile Cameroun
- entreprise de sécurité avec chiens Douala
- protection VIP Cameroun
- surveillance vidéo entreprise Douala
- security guards for hire Douala

These should appear naturally within section copy (Services, Why Choose Us, FAQ) — never stuffed or repeated unnaturally, consistent with the factual, non-hype tone defined in `design/BRAND_GUIDE.md`.

## 3. Heading Structure (H1–H6)

Following the homepage section order in `HOME_PAGE_SPECIFICATION.md`:

| Level | Usage | Occurrences on homepage |
|---|---|---|
| H1 | Hero main headline only | Exactly 1 |
| H2 | One per major section title (Presentation, Services, Why Choose Us, Key Numbers, Our Team, K9 Unit, Gallery, Video Gallery, Testimonials, FAQ, Contact) | 1 per section (~10–11) |
| H3 | Sub-groupings within a section where needed (e.g., each FAQ question, each "Why Choose Us" differentiator heading if styled larger than body) | Multiple |
| H4/H5 | Card-level titles (service card names, team member names, stat labels) | Multiple |
| H6 | Reserved strictly for genuine sixth-level content hierarchy — **not** used for the visual "eyebrow" labels (e.g., "OUR SERVICES") described in `design/TYPOGRAPHY.md`. Eyebrow labels must be marked up as a styled `<p>` or `<span>`, never an actual heading tag, to avoid inflating the heading outline with non-content labels that would confuse both SEO crawlers and screen-reader users navigating by heading. | As needed, rare |

**Rule:** No heading level is skipped (H1 → H2 → H3, never H1 → H3 directly), per `PROJECT_RULES.md`. Every H2 section title should contain or closely relate to a primary/secondary keyword where it reads naturally (e.g., "Comprehensive Security Solutions in Douala" rather than a keyword-stuffed variant).

## 4. Meta Tags (future `<head>` reference — not implemented this milestone)

| Tag | Content pattern |
|---|---|
| `<title>` | "Watt Security — Professional Private Security Services in Douala, Cameroon" (≤ 60 characters where possible) |
| `meta description` | "Watt Security provides professional corporate, residential, industrial, and event security in Douala, Cameroon — 24/7 guards, patrols, VIP protection, and K9 units." (≤ 155–160 characters) |
| `meta viewport` | `width=device-width, initial-scale=1` |
| `meta robots` | `index, follow` |
| `link rel="canonical"` | Homepage canonical URL (domain TBD) |
| `html lang` | `fr` primary (Douala is francophone) with English content sections clearly marked, or `fr-CM` if a locale-specific tag is preferred — final language strategy pending client confirmation (see `design/BRAND_GUIDE.md` open question on documentation/content language) |
| `meta theme-color` | Watt Navy (`#0B1A33`) per `design/COLOR_PALETTE.md`, for mobile browser chrome theming |

## 5. Open Graph Tags

| Tag | Content |
|---|---|
| `og:title` | Same as `<title>` or a shortened variant |
| `og:description` | Same as meta description |
| `og:type` | `website` |
| `og:image` | Dedicated 1200×630px social preview image (see `MEDIA_SPECIFICATION.md`) — must include the Watt Security identity (logo/wordmark once created) on a Watt Navy background, not a random gallery photo |
| `og:url` | Canonical homepage URL |
| `og:site_name` | "Watt Security" |
| `og:locale` | `fr_CM` (primary) with `og:locale:alternate` `en_US` or similar if bilingual content is confirmed |
| `twitter:card` | `summary_large_image` (if a Twitter/X presence exists) |

## 6. Schema.org Structured Data (JSON-LD, future implementation)

| Schema type | Purpose |
|---|---|
| `LocalBusiness` (or the more specific `SecurityService`-adjacent subtype where supported, falling back to `LocalBusiness` + `Organization`) | Core business entity: name, address, phone, geo-coordinates, opening hours (24/7), price range if applicable |
| `Organization` | Brand-level entity (logo, sameAs links to social profiles, contact points) |
| `Service` | One entry per service offered (Corporate Security, Residential Security, etc.), linked to the `LocalBusiness`/`Organization` |
| `FAQPage` | Marking up the FAQ section (Section 11) so questions/answers are eligible for rich results |
| `ImageObject` / `VideoObject` | Gallery photos and videos, with descriptive names/captions |
| `AggregateRating` / `Review` | Only if genuine, verifiable client ratings/testimonials with consent are available — never fabricated or estimated ratings |
| `BreadcrumbList` | For future inner pages (`pages/`) once site navigation grows beyond the homepage |

## 7. Local SEO Strategy (Douala, Cameroon)

1. **Google Business Profile:** Create and fully complete a Google Business Profile with exact NAP (Name, Address, Phone) matching the website footer and contact section precisely — inconsistent NAP across platforms is one of the most common local SEO failures.
2. **Embedded map consistency:** The Google Maps embed in Section 13 must point to the exact same address as the Google Business Profile and structured data.
3. **Localized content:** Naturally reference "Douala," relevant neighborhoods/business districts, and "Cameroon" within section copy (Presentation, Services, FAQ) rather than only in meta tags — search engines weight on-page local relevance heavily.
4. **Bilingual consideration:** Given Douala's francophone context alongside international/corporate English-speaking clients, evaluate (in a future milestone) whether the site should be fully bilingual (fr/en with `hreflang` tags) or single-language with the other offered on request — this is a content-strategy decision, not a design one, and is flagged as an open question.
5. **Local citations/directories:** Recommend future registration in relevant Cameroonian and pan-African business directories, and industry-specific security association listings if any exist, to build local citation consistency (off-page SEO, outside this milestone's scope but noted for the roadmap).
6. **Reviews:** Encourage and display genuine Google reviews once the business profile is active — reinforces both the `AggregateRating` schema and the Testimonials section (Section 10) with independently verifiable proof.
7. **Mobile-first indexing:** Since Google indexes the mobile version primarily, all SEO-relevant content (headings, text, structured data) must be fully present and unaltered on the mobile layout — no hiding of SEO-relevant text behind "desktop-only" content blocks.

## 8. Open Questions for Client Validation

- Confirm the primary content language strategy: French-first, English-first, or fully bilingual — this affects `html lang`, `hreflang`, keyword targeting priority, and copywriting for every section.
- Confirm the final domain name, to finalize canonical URLs and Open Graph/Schema.org `url` fields.
- Confirm whether real, published Google reviews exist yet (affects whether `AggregateRating` schema can be implemented honestly at launch or must be added later).
