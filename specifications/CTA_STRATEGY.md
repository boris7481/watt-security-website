# CTA Strategy — Watt Security Homepage

## 1. Principle

Following the UX principle already established in `design/DESIGN_SYSTEM.md` ("One primary action per screen"), the entire homepage drives toward a **single conversion goal: getting the visitor to initiate contact** — whether via form, call, or WhatsApp. Every CTA on the page supports that one goal; none compete with it or introduce a secondary conversion objective (e.g., no newsletter signup competing with the quote request).

## 2. CTA Inventory

| CTA | Wording (EN) | Style | Action/Destination |
|---|---|---|---|
| Primary conversion CTA | "Request a Quote" | Primary Button (Watt Gold, per `design/UI_COMPONENTS.md`) | Scrolls to Quick Contact (Section 12) or opens a quote-specific form state |
| Phone call | "Call Us" | Secondary Button / text link with phone icon | `tel:+237XXXXXXXXX` — direct call on mobile, visible number on desktop |
| WhatsApp | "Chat on WhatsApp" | Floating action button (persistent) + inline button in Contact section | `https://wa.me/237XXXXXXXXX` with a pre-filled message, e.g., "Hello Watt Security, I'd like more information about your services." |
| View services | "View Our Services" | Secondary Button / text link | Anchor scroll to Services (Section 3) |
| Learn more per service | "Learn More →" | Tertiary text link | Anchor/page link to specific service detail (future `pages/` milestone) |
| Custom plan request | "Request a Custom Security Plan" | Secondary Button | Scrolls to Quick Contact, pre-selecting "Custom / Multiple Services" in the service dropdown |
| K9-specific request | "Request K9 Patrol" | Secondary Button | Scrolls to Quick Contact, pre-selecting "K9 Security Dogs" in the service dropdown |
| Gallery expansion | "View Full Gallery" | Tertiary text link | Links to a dedicated gallery page (future `pages/` milestone) if the homepage gallery is a curated subset |
| Video expansion | "Watch More" | Tertiary text link | Links to full video library/YouTube channel, if confirmed |
| FAQ closing prompt | "Still Have Questions? Contact Us" | Tertiary text link | Anchor scroll to Quick Contact (Section 12) |
| Form submission | "Send Request" | Primary Button | Submits the Quick Contact form |
| Directions | "Get Directions" | Secondary Button / text link with map-pin icon | Opens the confirmed address in Google Maps/native maps app |
| Careers (optional) | "Join Our Team" | Tertiary text link | Links to a careers page/section if confirmed as in-scope |

French equivalents (for bilingual implementation, pending the language-strategy decision flagged in `SEO_SPECIFICATION.md`): "Demander un devis," "Nous appeler," "Discuter sur WhatsApp," "Voir nos services," "En savoir plus," "Demander un plan personnalisé," "Voir la galerie complète," "Obtenir l'itinéraire," "Envoyer la demande."

## 3. CTA Placement by Section

| Section | CTA(s) present |
|---|---|
| 1. Hero | Primary: "Request a Quote" · Secondary: "Call Us" or "View Our Services" |
| 2. Presentation | None, or optional tertiary "Learn More About Us" |
| 3. Services | Per-card "Learn More →" · Section-level "Request a Custom Security Plan" |
| 4. Why Choose Us | None (informational), optional single secondary CTA at section close |
| 5. Key Numbers | None (pure proof section) |
| 6. Our Team | Optional tertiary "Join Our Team" |
| 7. K9 Unit | "Request K9 Patrol" or "Learn More" |
| 8. Photo Gallery | "View Full Gallery" |
| 9. Video Gallery | Click-to-play (implicit CTA) · optional "Watch More" |
| 10. Testimonials | None (social proof only) |
| 11. FAQ | "Still Have Questions? Contact Us" |
| 12. Quick Contact | Primary: "Send Request" · Parallel: "Chat on WhatsApp," "Call Us Now" |
| 13. Google Maps | "Get Directions" |
| 14. Footer | Contact details function as passive CTAs (click-to-call, WhatsApp link, email link); no additional button required |
| Persistent (all sections) | Floating WhatsApp button (see below) |

## 4. Floating WhatsApp Button

- **Behavior:** Fixed position (bottom-right on desktop, bottom-right or bottom-center on mobile, respecting a minimum safe distance from other fixed UI and a 44×44px minimum touch target). Appears once the visitor scrolls past the Hero section, remains visible through the rest of the page.
- **Style exception:** Uses the standard, universally recognized WhatsApp green/icon rather than the Watt Gold accent — this is a deliberate exception to the brand palette because instant recognizability of the WhatsApp affordance outweighs strict palette consistency for this single, small, icon-only element. It should remain small and unobtrusive (icon-only, no large label) so it doesn't visually compete with the brand's dark/gold palette.
- **Accessibility:** Must have an accessible label (e.g., `aria-label="Chat with us on WhatsApp"`), keyboard-focusable, and clearly distinguishable via focus state — detailed in `ACCESSIBILITY_SPECIFICATION.md`.

## 5. Hierarchy Rules

1. **Only one Primary Button style per viewport at a time.** If a section's own CTA and the persistent WhatsApp button are both visible, the WhatsApp button is treated as a distinct, secondary-channel affordance (different color, smaller, corner-anchored) rather than a competing primary action — it never uses the Primary Button (gold) styling.
2. **No more than one primary + one secondary CTA per section.** Additional actions (e.g., "Learn More" on individual cards) are tertiary/text-link style, keeping visual weight proportional to importance, per `design/UI_COMPONENTS.md`.
3. **Every CTA states the action, not a vague label.** Avoid generic labels like "Click Here" or "Submit" — every CTA names the outcome ("Request a Quote," "Send Request," "Get Directions").
4. **CTA wording stays consistent across the site.** The same action always uses the same label (e.g., always "Request a Quote," never alternating with "Get a Free Quote" or "Ask for Pricing" in different places) — consistency of language reinforces the disciplined brand tone from `design/BRAND_GUIDE.md`.

## 6. Open Questions for Client Validation

- Confirm the real phone number and WhatsApp number to use across all CTAs (currently placeholders).
- Confirm whether "Request a Custom Security Plan" and "Request K9 Patrol" should route to the same single contact form (with a pre-selected dropdown value) or to distinct dedicated forms — the single-form approach is recommended for simplicity and is assumed above unless directed otherwise.
- Confirm whether a careers/recruitment path is in scope for this site at all — "Join Our Team" is included above as optional pending this confirmation.
