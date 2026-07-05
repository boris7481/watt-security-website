# Page Architecture — Watt Security

This document describes every page planned for the site and its expected content. The homepage is specified in full detail already in `specifications/HOME_PAGE_SPECIFICATION.md`; it is summarized here only for completeness of the site map. All pages share the Header, Navigation, Footer, WhatsApp Button, and CTA Button components (`COMPONENT_ARCHITECTURE.md`) and the same design system (`design/`).

## Site Map

| # | Page | File |
|---|---|---|
| 1 | Accueil (Home) | `index.html` |
| 2 | À propos (About) | `pages/about.html` |
| 3 | Services | `pages/services.html` |
| 4 | Galerie (Gallery) | `pages/gallery.html` |
| 5 | Contact | `pages/contact.html` |
| 6 | Mentions légales (Legal Notice) | `pages/legal-notice.html` |
| 7 | Politique de confidentialité (Privacy Policy) | `pages/privacy-policy.html` |

---

## 1. Accueil (Home) — `index.html`

Fully specified in `specifications/HOME_PAGE_SPECIFICATION.md`: Hero, Presentation, Services, Why Choose Us, Key Numbers, Team, K9 Unit, Photo Gallery, Video Gallery, Testimonials, FAQ, Quick Contact, Google Maps, Footer — in that order. No content is redefined here; this entry exists only so the full site map is visible in one place.

## 2. À propos (About) — `pages/about.html`

**Purpose:** Give visitors who want deeper credibility detail (beyond the homepage's brief Presentation section) the full company story.

**Expected content:**
- Page header/banner: page title ("About Watt Security") with a short supporting line.
- Extended company history and philosophy (expands on the homepage Presentation section — same facts, more depth: founding context, operating philosophy, discipline/training culture).
- Full mission/values statement (drawing directly from `design/BRAND_GUIDE.md` — personality, values, desired image).
- Full Team section (reuses the Team Card component, potentially with longer bios than the homepage's condensed version).
- Optional: certifications/licensing detail, if the client can provide specifics (regulatory registration, professional affiliations) — stronger trust proof than the homepage has room for.
- Closing CTA: "Request a Quote" or "Contact Us," consistent with `specifications/CTA_STRATEGY.md`.

## 3. Services — `pages/services.html`

**Purpose:** Give full detail on all nine services, for visitors who followed a "Learn more" link from a homepage Service Card or arrived directly via a service-specific search query.

**Expected content:**
- Page header/banner: page title ("Our Services") with a short supporting line.
- All nine services, each with: name, icon, a fuller description than the homepage card (what's included, typical use case, why a client would choose it), and its own "Request a Quote" or "Request This Service" CTA.
- Services list (fixed, per `README.md`): Corporate Security, Residential Security, Industrial Site Surveillance, Event Security, VIP Protection, Security Guards, Patrol Services, K9 Security Dogs, 24/7 Security Services.
- Layout: either a single long page with all nine services as anchored sections (simpler, matches the current page list) or, in a future milestone, individual dedicated pages per service for stronger SEO long-tail targeting — **this milestone keeps all nine on one page**, per the page list given; the dedicated-pages option is flagged as an open question for a future milestone.
- Closing CTA block: "Request a Custom Security Plan," consistent with `specifications/CTA_STRATEGY.md`.

## 4. Galerie (Gallery) — `pages/gallery.html`

**Purpose:** House the complete photo and video library, since the homepage only shows a curated subset (per `specifications/HOME_PAGE_SPECIFICATION.md` Sections 8–9).

**Expected content:**
- Page header/banner: page title ("Gallery") with a short supporting line.
- Full Photo Gallery: all categories from `specifications/MEDIA_SPECIFICATION.md` (agents, surveillance, corporate, hotels, events, K9, patrols, vehicles, access control), using the Gallery Item component, with filtering by category optional (open question — see summary; a simple unfiltered full grid is the safe default if filtering isn't confirmed in time).
- Full Video Gallery: all video categories (hero-style b-roll, interventions, events, surveillance, patrols), using the same lightbox/modal pattern as the homepage.
- No dedicated CTA block required mid-page (per the "no competing CTA" rule) but the standard Footer/WhatsApp Button/CTA Button remain available as always.

## 5. Contact — `pages/contact.html`

**Purpose:** Give a full, standalone contact experience for visitors who land directly here (e.g., a "Contact Watt Security" search result, or a link shared directly), rather than relying on the homepage's Quick Contact section alone.

**Expected content:**
- Page header/banner: page title ("Contact Us") with a short supporting line.
- Full Contact Form (same component as the homepage Quick Contact section — Name, Phone, Email, Service Needed, Message).
- All direct contact channels: phone (click-to-call), WhatsApp link, email, physical address, business hours (24/7 messaging where relevant) — identical information to the homepage and footer, for NAP consistency (per `specifications/SEO_SPECIFICATION.md`).
- Embedded Google Map (same as homepage Section 13), with "Get Directions" CTA.
- Optionally, a condensed FAQ Item selection addressing contact-specific questions ("How quickly will you respond?", "Do you offer free consultations?") — open question, see summary.

## 6. Mentions légales (Legal Notice) — `pages/legal-notice.html`

**Purpose:** Satisfy legal disclosure requirements for a registered business operating in Cameroon.

**Expected content:**
- Company legal name, registration details, registered address (final legal name pending client confirmation — see `design/BRAND_GUIDE.md` open question).
- Publishing/editorial responsibility statement (who is legally responsible for the site's content).
- Hosting provider information (to be confirmed once hosting is chosen — out of scope for this milestone).
- Contact details for legal inquiries.
- This page is intentionally plain — no marketing content, no imagery beyond the standard header/footer, consistent with the sober/formal register defined for legal content in most jurisdictions and with the disciplined brand tone.

## 7. Politique de confidentialité (Privacy Policy) — `pages/privacy-policy.html`

**Purpose:** Disclose what personal data is collected (primarily via the Contact Form) and how it is used, particularly relevant since the site collects name/phone/email.

**Expected content:**
- What data is collected (form submissions, and any analytics/cookies if added in a future milestone).
- Why it's collected and how it's used (responding to security service inquiries).
- Whether data is shared with third parties (expected answer: no, unless a form-handling service is used — depends on the Contact Form backend decision flagged in `COMPONENT_ARCHITECTURE.md`).
- Data retention and visitor rights (relevant under Cameroonian data protection law and good practice generally — legal review recommended, flagged as an open item since this is a legal rather than design/technical matter).
- Contact information for privacy-related questions.

---

## Cross-Page Consistency Rules

- Every inner page (`pages/*.html`) uses the same Header/Navigation/Footer/WhatsApp Button markup as the homepage — no page-specific navigation variants.
- Every inner page includes its own accurate `<title>`, meta description, canonical URL, and Open Graph tags, per `specifications/SEO_SPECIFICATION.md` — none of these are copy-pasted unchanged from the homepage.
- Every inner page follows the same heading hierarchy discipline (one H1 per page, no skipped levels) defined in `PROJECT_RULES.md` and `specifications/SEO_SPECIFICATION.md`.
- Legal Notice and Privacy Policy pages are exempt from the "one primary CTA per section" marketing pattern (per `specifications/CTA_STRATEGY.md`) — they are informational/legal pages, not conversion-focused pages.

## Open Questions for Client/Developer Validation

- Confirm whether the Services page should eventually split into nine individual dedicated pages (stronger SEO long-tail targeting, more implementation effort) or remain a single page (current default, simpler).
- Confirm whether the Gallery page needs category filtering or a simple full grid is sufficient at launch.
- Confirm whether the Contact page should include its own condensed FAQ selection.
- Confirm legal review process/status for `legal-notice.html` and `privacy-policy.html` content — this project can structure these pages but should not draft binding legal text without the client's legal counsel reviewing the final wording.
