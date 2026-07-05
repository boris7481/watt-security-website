# Home Page Specification — Watt Security

This document describes, section by section and in exact order, the future homepage. It is the functional reference for implementation: every section's objective, content, CTAs, animations, visual elements, and responsive behavior are defined here so no graphic or UX decision needs to be made during development. All visual details reference the `design/` system (`COLOR_PALETTE.md`, `TYPOGRAPHY.md`, `SPACING.md`, `UI_COMPONENTS.md`, `ICONOGRAPHY.md`, `ANIMATIONS.md`) — this document does not redefine those, only applies them.

## Section Order

1. Hero Section (full-screen, background video)
2. Presentation of Watt Security
3. Our Services
4. Why Choose Watt Security
5. Key Numbers (animated counters)
6. Our Team
7. K9 Security Dogs
8. Photo Gallery
9. Video Gallery
10. Client Testimonials
11. FAQ
12. Quick Contact
13. Google Maps
14. Footer

---

## 1. Hero Section

**Objective:** Establish authority and trust within the first 3 seconds; give the visitor one unmistakable next step.

**Information displayed:**
- Eyebrow label (small uppercase tag, H6 visual style — see note in `SEO_SPECIFICATION.md` on not using an actual `<h6>` tag here): "WATT SECURITY"
- H1: primary value proposition, e.g. "Professional Security Services in Douala, Cameroon"
- Supporting line: tagline "Discipline. Vigilance. Protection." or a one-sentence expansion (final copy pending client validation, see `design/BRAND_GUIDE.md`)
- Primary CTA button: "Request a Quote"
- Secondary CTA (text link or outline button): "Call Us" (`tel:` link) or "View Our Services" (anchor link to Section 3)
- Scroll cue (small down-arrow icon + optional "Scroll" label) at the bottom of the viewport

**CTAs:**
- Primary: "Request a Quote" → scrolls to/opens the Quick Contact section (Section 12) or a dedicated quote page (TBD in `CTA_STRATEGY.md`).
- Secondary: "Call Us" (`tel:+237XXXXXXXXX`) — placed to the right of/below the primary button, styled as Secondary Button per `UI_COMPONENTS.md`.

**Animations:**
- On page load: eyebrow, H1, subtext, and buttons fade up in a short stagger sequence (per `ANIMATIONS.md` micro-interaction timing, ~150–250ms increments, ease-out).
- Scroll cue: a slow, subtle opacity pulse (never a bounce/translate loop) — disabled entirely under `prefers-reduced-motion`.
- Background video loops continuously, muted, no additional animated overlay effects (no zoom/parallax on the video itself).

**Visual elements:**
- Full-bleed background video with a Watt Navy Deep gradient overlay/scrim (per `COLOR_PALETTE.md`) to guarantee text contrast regardless of video content.
- Poster/fallback image identical in framing to the video's first frame, shown while the video loads and used entirely in place of video on constrained connections (see `MEDIA_SPECIFICATION.md`).
- A visible pause/play control for the hero video is required (WCAG 2.2.2 — see `ACCESSIBILITY_SPECIFICATION.md`), styled as a small icon button in a corner of the hero.

**Responsive behavior:**
- Desktop/tablet: video plays at full viewport height; text block left-aligned or centered (final alignment to be confirmed visually during implementation, both options fit the design system).
- Mobile: to protect performance and data usage, the video is replaced by the static poster image by default (see `MEDIA_SPECIFICATION.md` for the data-saving rationale); text and buttons stack vertically, full-width buttons with a minimum 44px touch target height.
- Viewport height on mobile uses `100svh` (small viewport height) rather than `100vh` to avoid mobile browser chrome overlap issues — a note for implementation, not a design change.

---

## 2. Presentation of Watt Security

**Objective:** Quickly establish who Watt Security is, their experience, and their operating area — the first "reassurance" beat after the hero (see `USER_JOURNEY.md`).

**Information displayed:**
- Eyebrow: "WHO WE ARE"
- H2: e.g. "Trusted Security Expertise in Douala and Beyond"
- 2–3 short paragraphs: founding/experience summary, disciplined operating philosophy, geographic coverage (Douala, with reach across Cameroon)
- Supporting image: a professional photograph (agents on duty, or a control room) — see `MEDIA_SPECIFICATION.md`

**CTAs:**
- Optional secondary text link: "Learn More About Us" — only if a dedicated About page is confirmed for `pages/` in a future milestone; omit otherwise.

**Animations:**
- Text block and image fade + slide up (8–16px) into view on scroll, once, per `ANIMATIONS.md` scroll-reveal rules.

**Visual elements:**
- Two-column layout: image on one side, text on the other (alternating left/right is reserved for later sections that repeat this pattern, e.g., K9 section, to avoid monotony).
- Thin Watt Gold accent rule/divider under the eyebrow label.

**Responsive behavior:**
- Desktop/tablet: side-by-side columns (image ~45%, text ~55%, per the 12-column grid in `SPACING.md`).
- Mobile: stacked, image first or text first (image first recommended, to lead with visual credibility before text).

---

## 3. Our Services

**Objective:** Present all nine services clearly and drive visitors toward the specific service relevant to them.

**Information displayed:**
- Eyebrow: "OUR SERVICES"
- H2: e.g. "Comprehensive Security Solutions"
- A grid of nine Service Cards (per `UI_COMPONENTS.md`), one per service: Corporate Security, Residential Security, Industrial Site Surveillance, Event Security, VIP Protection, Security Guards, Patrol Services, K9 Security Dogs, 24/7 Security Services. Each card: icon, service name (H4/H5), one-sentence description, "Learn more →" link.

**CTAs:**
- Per-card: "Learn more →" (tertiary link) — links to a dedicated service page in `pages/` (future milestone) or to an anchor with more detail if service pages don't exist yet.
- Section-level secondary CTA below the grid: "Request a Custom Security Plan" (Secondary Button), for visitors whose need spans multiple services.

**Animations:**
- Cards fade + slide up in a staggered sequence as the grid enters the viewport (~60–100ms stagger per card, per `ANIMATIONS.md`).
- Card hover: subtle lift + icon/heading shift to Watt Gold, per `UI_COMPONENTS.md`.

**Visual elements:**
- 12-column responsive grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile) — see `SPACING.md`.
- Equal card height across each row.

**Responsive behavior:**
- Grid reflows per breakpoints above; card internal padding and gaps follow `SPACING.md` (`space-md`/`space-lg`).
- Entire card is a single tap target on mobile/touch devices (not just the "Learn more" text), per `UI_COMPONENTS.md`.

---

## 4. Why Choose Watt Security

**Objective:** Directly address the trust objections a prospective client has before contacting a security provider (Are they licensed? Are they reliable? Do they know this market?).

**Information displayed:**
- Eyebrow: "WHY CHOOSE US"
- H2: e.g. "What Sets Watt Security Apart"
- 4–6 differentiators, each with an icon + short heading + one-sentence explanation:
  1. Licensed & Certified Agents
  2. Rigorous, Ongoing Training Standards
  3. 24/7 Rapid Response Capability
  4. Local Expertise — Douala & Cameroon
  5. Modern Surveillance & Reporting Technology
  6. Transparent Communication with Clients

**CTAs:**
- None required at this section; it is a trust-building/informational block. If a CTA is desired, a single secondary "Request a Free Security Assessment" may close the section — final decision recorded in `CTA_STRATEGY.md`.

**Animations:**
- Items fade in with a short stagger as the section scrolls into view.

**Visual elements:**
- Icon list or a compact card grid (visually lighter than the Service Cards in Section 3, to differentiate "services" from "reasons to trust us") — plain icon + text pairs, no card border, are preferred here for visual variety.
- Optional supporting image or short looping muted clip alongside the list (desktop only, to avoid mobile bandwidth cost) — see `MEDIA_SPECIFICATION.md`.

**Responsive behavior:**
- Desktop: 2–3 column layout for the differentiators list, or a side list next to a supporting image.
- Mobile: single column, stacked list.

---

## 5. Key Numbers (animated counters)

**Objective:** Quantify credibility with concrete, memorable figures.

**Information displayed:**
- Eyebrow: "WATT SECURITY IN NUMBERS" (or similar)
- 4 Stat Cards (per `UI_COMPONENTS.md`), e.g.:
  - "10+ Years of Experience"
  - "200+ Sites Protected"
  - "150+ Trained Agents"
  - "24/7 Availability"
  (exact figures to be confirmed by the client before implementation — placeholders only)

**CTAs:** None — this is a pure credibility/proof section.

**Animations:**
- Numerals count up from 0 to their final value once, when the section first enters the viewport (per `ANIMATIONS.md` scroll-reveal timing, ~600–800ms count duration, ease-out).
- Under `prefers-reduced-motion`, the final numbers display immediately, with no count-up — see `ACCESSIBILITY_SPECIFICATION.md`.

**Visual elements:**
- Full-width band on a Watt Navy or Watt Navy Deep background (per `COLOR_PALETTE.md`), numerals in Watt Gold (Montserrat, large size), labels in Off-White/Cool Gray beneath.

**Responsive behavior:**
- Desktop: 4 stats in a single row.
- Mobile: 2×2 grid.

---

## 6. Our Team

**Objective:** Humanize the brand and reinforce professionalism by showing the real people (or representative leadership) behind the service.

**Information displayed:**
- Eyebrow: "OUR TEAM"
- H2: e.g. "Led by Experienced Security Professionals"
- Team member cards: photo, name, role/title, one-line bio or specialization (e.g., "Operations Director — 15 years in corporate security").

**CTAs:**
- Optional secondary link: "Join Our Team" (careers) if a careers page/section is planned.

**Animations:**
- Cards fade + slide up, staggered, on scroll entry.
- Photo hover: subtle zoom (max ~1.03–1.05 scale, 300ms ease-out), consistent with the restrained motion policy in `ANIMATIONS.md`.

**Visual elements:**
- Card grid, photo as a consistent-ratio image (square or 4:5 portrait) with name/title beneath in Montserrat 600.

**Responsive behavior:**
- Desktop: 3–4 columns; Tablet: 2 columns; Mobile: 1 column (or a horizontally scrollable row if the client prefers to keep it compact — to be confirmed at implementation).

**Content dependency:** Requires actual staff photos/bios and client approval to display individual employees publicly — flagged as an open item, see summary at the end of this document.

---

## 7. K9 Security Dogs

**Objective:** Highlight a distinctive, memorable capability that differentiates Watt Security from generic guarding companies.

**Information displayed:**
- Eyebrow: "K9 SECURITY UNIT"
- H2: e.g. "Specialized K9 Patrol & Detection"
- Short copy: training standards, use cases (patrol reinforcement, deterrence, detection), professionalism/animal welfare note.
- Optional supporting stat (e.g., "X trained K9 units available").

**CTAs:**
- Secondary: "Request K9 Patrol" or "Learn More" (links to relevant contact/quote flow filtered to this service).

**Animations:**
- Same fade + slide scroll-reveal pattern as Section 2 (this section reuses the alternating image/text layout, image on the opposite side from Section 2 for visual rhythm).

**Visual elements:**
- Two-column layout (image/video of a K9 unit in action + text), consistent with Section 2's pattern.

**Responsive behavior:**
- Same as Section 2: side-by-side desktop/tablet, stacked mobile.

---

## 8. Photo Gallery

**Objective:** Provide visual proof of real operations and professionalism across all service lines.

**Information displayed:**
- Eyebrow: "GALLERY"
- H2: e.g. "Watt Security in Action"
- A grid of photographs spanning the categories defined in `MEDIA_SPECIFICATION.md` (agents, surveillance, corporate sites, hotels, events, K9, patrols, vehicles, access control).

**CTAs:**
- "View Full Gallery" — links to a dedicated gallery page in `pages/` if the homepage only shows a curated subset (recommended, to keep the homepage from becoming too long — see open question in summary).

**Animations:**
- Grid items fade in, staggered, on scroll entry.
- On click: image opens in a lightbox/modal with a simple fade + slight scale-in (per `ANIMATIONS.md`), keyboard-operable and focus-trapped (see `ACCESSIBILITY_SPECIFICATION.md`).
- Hover (desktop): subtle darken overlay with a caption/category label fading in.

**Visual elements:**
- Uniform-aspect-ratio grid (masonry is visually appealing but harder to keep accessible/consistent — a fixed-ratio grid is recommended for a more disciplined, premium look consistent with the brand's precision-oriented tone).

**Responsive behavior:**
- Desktop: 3–4 columns; Tablet: 2–3 columns; Mobile: 2 columns.

---

## 9. Video Gallery

**Objective:** Provide dynamic proof of operations in motion, reinforcing capability and professionalism through real footage.

**Information displayed:**
- Eyebrow: "SEE US IN ACTION"
- H2: e.g. "Video Highlights"
- Grid of video thumbnails (interventions/response b-roll, event security, surveillance/control room, patrols) — see `MEDIA_SPECIFICATION.md` for content guidance and tone constraints.

**CTAs:**
- Click-to-play per thumbnail (opens modal player).
- Optional: "Watch More on YouTube" if the company maintains a channel — to be confirmed.

**Animations:**
- Thumbnails fade in, staggered, on scroll entry.
- Play icon (Watt Gold) subtle scale on hover (max ~1.1, 200ms ease-out).
- Modal open/close: fade + slight scale, focus-trapped, closable via ESC and a visible close control.

**Visual elements:**
- 16:9 thumbnail grid with a centered play icon overlay and a short caption beneath each (e.g., "Corporate Site Patrol").

**Responsive behavior:**
- Desktop: 3 columns; Tablet: 2 columns; Mobile: 1 column.
- Videos must never autoplay with sound; the hero video is the only autoplaying video on the page, and it is always muted (see `MEDIA_SPECIFICATION.md` and `ACCESSIBILITY_SPECIFICATION.md`).

---

## 10. Client Testimonials

**Objective:** Provide third-party social proof to reduce perceived risk of hiring Watt Security.

**Information displayed:**
- Eyebrow: "TESTIMONIALS"
- H2: e.g. "What Our Clients Say"
- Testimonial Cards (per `UI_COMPONENTS.md`): quote, client name, role/company (with logo if permission is granted).

**CTAs:** None direct — this section exists purely to build confidence ahead of Section 12 (Contact).

**Animations:**
- If implemented as a carousel/slider: slide transition 250–350ms ease-in-out (per `ANIMATIONS.md`); autoplay (if any) must pause on hover/focus and must be disabled entirely under `prefers-reduced-motion`, with visible prev/next controls always available (WCAG 2.2.2 requirement — see `ACCESSIBILITY_SPECIFICATION.md`).
- Alternative (recommended for simplicity and accessibility): a static responsive grid of 3 testimonials with a "Read More Reviews" link, avoiding carousel accessibility complexity entirely — final choice to be confirmed (see summary).

**Visual elements:**
- Quotation mark accent in Watt Gold; attribution in Montserrat 600 beneath the quote.

**Responsive behavior:**
- Desktop: 3 cards visible; Tablet: 2; Mobile: 1 (swipeable if carousel is chosen).

---

## 11. FAQ

**Objective:** Pre-empt common questions/objections (pricing, coverage, licensing, response time) to reduce friction before the visitor reaches the contact section.

**Information displayed:**
- Eyebrow: "FAQ"
- H2: e.g. "Frequently Asked Questions"
- Accordion list, e.g.:
  1. "Do you operate 24/7?"
  2. "Which areas do you cover in and around Douala?"
  3. "Are your agents licensed and insured?"
  4. "How quickly can you deploy security personnel?"
  5. "Do you provide short-term event security?"
  6. "Can you provide K9 units for specific sites?"
  (final question list/content to be confirmed with the client)

**CTAs:**
- Closing prompt beneath the list: "Still have questions? Contact us" — anchor link to Section 12.

**Animations:**
- Accordion expand/collapse: 200–250ms ease-in-out (per `ANIMATIONS.md`); chevron/plus icon rotates on open.
- Single-open behavior recommended (opening one question collapses the previously open one) for a cleaner, more disciplined presentation.

**Visual elements:**
- Full-width accordion list, Watt Gold icon indicator, thin Mist/Steel divider between items.

**Responsive behavior:**
- Single column at all breakpoints; identical behavior on mobile and desktop.

---

## 12. Quick Contact

**Objective:** Convert the visitor into a qualified lead with minimal friction, offering multiple contact channels.

**Information displayed:**
- Eyebrow: "CONTACT US"
- H2: e.g. "Request Your Security Consultation"
- Short form: Name, Phone, Email, Service Needed (dropdown listing the nine services), Message.
- Direct contact info displayed alongside the form: phone number (click-to-call), WhatsApp link, email address, physical address, business hours (24/7 messaging where relevant).

**CTAs:**
- Primary: "Send Request" (form submit button).
- Secondary/parallel: "Chat on WhatsApp" and "Call Us Now" — always visible next to the form, for visitors who prefer not to fill a form.

**Animations:**
- Field focus transitions (border/ring color, 200ms) per `UI_COMPONENTS.md`.
- Success/error state feedback per `UI_COMPONENTS.md` (calm, factual tone, no celebratory animation).

**Visual elements:**
- Two-column layout: form on one side, contact info block on the other (contact info block may sit on a Watt Navy background for visual separation from the light form area).

**Responsive behavior:**
- Desktop/tablet: two columns side by side.
- Mobile: stacked — contact info first (fastest path for a mobile visitor who wants to call/WhatsApp immediately) then the form beneath.

---

## 13. Google Maps

**Objective:** Confirm physical legitimacy and show operating location/coverage.

**Information displayed:**
- Embedded map centered on the Watt Security office location in Douala, with a marker labeled "Watt Security."

**CTAs:**
- "Get Directions" link (opens the location in Google Maps/native maps app).

**Animations:**
- Simple fade-in of the map container on scroll entry; no animation on the map interaction itself (native map controls apply).

**Visual elements:**
- Full-width embedded map; if the mapping platform supports style customization, a muted custom map style consistent with the Watt Navy palette is preferred over the default bright Google Maps styling — optional enhancement, not a blocker.

**Responsive behavior:**
- Reduced height on mobile (e.g., ~300–350px) vs. desktop (e.g., ~450–500px), full width at all breakpoints.

---

## 14. Footer

**Objective:** Provide a navigational safety net, repeat key trust/contact signals, and satisfy legal requirements.

**Information displayed (per `UI_COMPONENTS.md` Footer component):**
- Company column: logo, short tagline, brief mission line.
- Services column: list of all nine services (links).
- Quick Links column: About, Team, Gallery, FAQ, Contact (anchors or pages).
- Contact column: phone, WhatsApp, email, address, business hours.
- Social media icons (if accounts are confirmed).
- Bottom bar: copyright notice, legal links (Privacy Policy, Terms of Service — pending creation in a future milestone).

**CTAs:**
- No primary CTA button required in the footer itself; contact details already function as low-friction action points (click-to-call, WhatsApp link, email link).

**Animations:**
- None beyond the same scroll-reveal fade applied consistently to entering sections (optional; footer may simply render without an entrance animation, as it is reached only after full engagement with the page).

**Visual elements:**
- Watt Navy Deep background, column layout with Montserrat uppercase small headings, per `UI_COMPONENTS.md`.

**Responsive behavior:**
- Desktop: 4 columns side by side.
- Mobile: stacked columns (accordion-style collapse is optional, not required, given the footer's already-concise content).

---

## Open Items Requiring Client Input

See the end-of-milestone summary for the consolidated list of validation questions (team photos/bios availability, exact key figures/stats, testimonial carousel vs. static grid decision, gallery page vs. homepage-only gallery, final hero copy).
