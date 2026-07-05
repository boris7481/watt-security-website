# Component Architecture — Watt Security

This document describes the role of every reusable component identified for the site. Per the milestone instructions, this is a description of **purpose and responsibility only** — visual styling lives in `design/UI_COMPONENTS.md`, markup/CSS/JS are future implementation work.

Each component below is used consistently across every page it appears on (see `PAGE_ARCHITECTURE.md` for which pages use which components) — a component is never redesigned or restructured per page.

## 1. Header

**Role:** Persistent site-identity and entry point to primary navigation, present at the top of every page. Carries the brand mark (logo/wordmark, once available) and hosts the Navigation component. May also host a compact CTA button on larger viewports (open question — see summary).

## 2. Navigation

**Role:** Lets a visitor jump directly to any major page or homepage section (Services, About, Gallery, Contact, etc.) without scrolling. Responsible for indicating the current/active page, and for exposing a mobile-friendly toggle (hamburger) that reveals the same links in a condensed form on small viewports. Does not contain content itself — only links to it.

## 3. Hero

**Role:** The first thing a visitor sees on the homepage (and, in a simplified/static form, potentially on inner pages as a smaller page banner — open question, see summary). Responsible for immediate brand impact and presenting the single primary conversion CTA above any other content. Owns the background video/poster-image logic and the scroll cue, per `specifications/HOME_PAGE_SPECIFICATION.md` Section 1.

## 4. Service Card

**Role:** Represents exactly one service (of the nine defined in `README.md`). Responsible for communicating, at a glance, what the service is and inviting the visitor to learn more. Reused identically on the homepage Services section and the full Services page (`pages/services.html`) — the Services page may show an expanded version with more detail, but the card's core role (icon + name + short description + link) stays the same.

## 5. Team Card

**Role:** Represents one team member. Responsible for humanizing the brand by pairing a real photo with a name, role, and one-line credential/specialization. Reused on the homepage Team section and the About page.

## 6. Testimonial Card

**Role:** Represents one client testimonial. Responsible for presenting third-party social proof credibly — quote, attribution (name/role/company). Does not itself decide carousel vs. static-grid presentation; that is a layout/behavior decision made by the page or a wrapping "Testimonials" section, not by the card component itself (this separation keeps the card reusable regardless of which display pattern is ultimately chosen — see the open question in `specifications/HOME_PAGE_SPECIFICATION.md`).

## 7. FAQ Item

**Role:** Represents one question/answer pair in an accordion. Responsible for toggling its own expanded/collapsed state and communicating that state to assistive technology (`aria-expanded`, per `specifications/ACCESSIBILITY_SPECIFICATION.md`). Multiple FAQ Items are coordinated by the shared accordion behavior (`accordion.js`, see `JAVASCRIPT_ARCHITECTURE.md`) to enforce "single item open at a time" if that behavior is confirmed.

## 8. Gallery Item

**Role:** Represents one photo or video thumbnail within the Photo/Video Gallery sections and the dedicated Gallery page. Responsible for displaying a consistent-ratio preview and triggering the lightbox/modal viewer on activation (click or keyboard). Does not implement the lightbox itself — that is the responsibility of the Gallery component/module as a whole (`gallery.js`).

## 9. Footer

**Role:** Persistent, present at the bottom of every page. Responsible for site-wide navigation redundancy, contact information repetition, legal link access (Legal Notice, Privacy Policy), and final brand reinforcement. Structured in columns per `design/UI_COMPONENTS.md`.

## 10. WhatsApp Button

**Role:** A persistent, floating, icon-only affordance offering a direct low-friction contact channel from anywhere on any page. Responsible only for linking out to a pre-filled WhatsApp conversation (`https://wa.me/...`) — it holds no internal state or behavior beyond appearing after the visitor scrolls past the Hero (homepage) or immediately on inner pages (open question — see summary).

## 11. CTA Button

**Role:** The generic, reusable action-trigger component underlying every "Request a Quote," "Send Request," "Call Us," "Get Directions," etc. across the site. Responsible for visually communicating its priority level (Primary/Secondary/Tertiary, per `design/UI_COMPONENTS.md`) and for being fully keyboard/focus accessible. Every other component that needs a button-like action (Service Card's "Learn more," Contact Form's submit) composes this component rather than defining its own button styling.

## 12. Counter

**Role:** Represents one animated statistic in the Key Numbers section (e.g., "10+ Years of Experience"). Responsible for triggering its own count-up animation once when scrolled into view, while always exposing the final value to assistive technology immediately regardless of animation state (per `specifications/ACCESSIBILITY_SPECIFICATION.md`). Four Counters are used together on the homepage; the component itself only needs to know its own target number and label.

## 13. Contact Form

**Role:** Captures a visitor's request (name, phone, email, service needed, message) on the homepage Quick Contact section and the standalone Contact page. Responsible for client-side validation feedback (per `design/UI_COMPONENTS.md` Forms states), submission handling, and communicating success/error states accessibly (`aria-live`, per `specifications/ACCESSIBILITY_SPECIFICATION.md`). Does not define where the data is sent/stored — that is a backend/integration decision entirely out of scope for this front-end-only project phase (flagged as an open question).

## Component Reuse Map

| Component | Used on |
|---|---|
| Header, Navigation, Footer, WhatsApp Button, CTA Button | Every page |
| Hero | Homepage (full version); possibly inner pages as a simplified banner (open question) |
| Service Card | Homepage, `services.html` |
| Team Card | Homepage, `about.html` |
| Testimonial Card | Homepage; possibly `about.html` or a dedicated section (open question) |
| FAQ Item | Homepage; possibly `contact.html` (open question) |
| Gallery Item | Homepage (curated subset), `gallery.html` (full set) |
| Counter | Homepage only (Key Numbers section) |
| Contact Form | Homepage (Quick Contact), `contact.html` (full contact page) |

## Open Questions for Client/Developer Validation

- Confirm whether the Header should include a compact CTA button on desktop (a common pattern for premium security/corporate sites) in addition to the Hero's primary CTA.
- Confirm whether inner pages (`about.html`, `services.html`, etc.) get their own simplified Hero/banner treatment or a plainer page-title header — affects whether the Hero component needs a "full" and "compact" variant.
- Confirm the backend/data destination for Contact Form submissions (e.g., a form-handling service, email delivery, or a future backend) — this is required before `contact-form.js` can be implemented, even though it doesn't block writing the front-end architecture itself.
