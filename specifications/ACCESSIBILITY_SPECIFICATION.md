# Accessibility Specification — Watt Security Homepage

This document defines homepage-specific accessibility rules that extend the general standards already set in `PROJECT_RULES.md` and the accessibility notes embedded in `design/COLOR_PALETTE.md`, `design/TYPOGRAPHY.md`, `design/UI_COMPONENTS.md`, and `design/ANIMATIONS.md`. It applies those general rules to the specific sections and interactive patterns defined in `HOME_PAGE_SPECIFICATION.md`.

## 1. Keyboard Navigation

- **Skip link:** A visually-hidden-until-focused "Skip to main content" link must be the first focusable element on the page, allowing keyboard users to bypass the header/hero and jump directly to Section 2 onward.
- **Tab order:** Must follow the visual/DOM order of sections exactly as defined in `HOME_PAGE_SPECIFICATION.md` (Hero → Presentation → Services → ... → Footer) — no tabindex manipulation that reorders focus unexpectedly.
- **All interactive elements reachable by keyboard alone:** navigation menu, all CTA buttons/links, service cards (including the "whole card is clickable" pattern from `design/UI_COMPONENTS.md` — the card must be an actual focusable link/button, not a `div` with a click handler), FAQ accordion items, testimonial carousel controls (if a carousel is used), gallery lightbox triggers and in-modal controls, video play buttons, the Quick Contact form, the floating WhatsApp button.
- **Modals (Photo/Video Gallery lightbox):** Must trap focus within the modal while open (Tab/Shift+Tab cycles only through modal content, never escaping to the page behind it), must be closable via the `Escape` key and a visible close control, and must return focus to the element that triggered it once closed.
- **FAQ accordion:** Each question is a real button (`aria-expanded` reflecting open/closed state); arrow-key navigation between questions is a nice-to-have, not required, but Tab/Enter/Space must fully operate the accordion.

## 2. Color Contrast

- All text/background combinations used across the homepage must draw from the pairs already verified in `design/COLOR_PALETTE.md` (e.g., Ink on Pearl White, Off-White on Watt Navy). No new ad hoc color combination may be introduced without checking contrast first.
- **Hero section special case:** because Section 1's text sits over a video (variable content, unlike a flat color background), the Watt Navy Deep gradient/scrim overlay defined in `HOME_PAGE_SPECIFICATION.md` Section 1 is mandatory, not optional — it must be strong enough to guarantee the required contrast ratio for the H1/subtext regardless of the video's actual footage/brightness at any given frame.
- **Gallery hover captions and overlay text** (Section 8) must maintain sufficient contrast against the darkened hover overlay — reuse the same Watt Navy scrim approach as the hero rather than a lighter or transparent overlay.
- Semantic colors (Success Green, Alert Red, Warning Amber, used in form feedback per `design/UI_COMPONENTS.md`) must be re-checked with an actual contrast-checking tool before implementation — flagged as an open item carried over from the Milestone 2 review.

## 3. Focus States

- Every interactive element must show a visible focus indicator at all times when navigated via keyboard (never `outline: none` without an equally visible custom replacement), per `design/UI_COMPONENTS.md` Forms section.
- Focus indicator color must have sufficient contrast against both light and dark section backgrounds — a single focus-ring treatment that works on both (e.g., a Watt Gold ring with a subtle dark/light halo) should be defined once during CSS implementation and applied uniformly.
- Focus order inside the Quick Contact form (Section 12) must follow field order top-to-bottom (Name → Phone → Email → Service → Message → Submit), matching the visual layout exactly.

## 4. Alternative Text & Media Accessibility

- **Photo Gallery (Section 8):** Every image requires descriptive, specific `alt` text (e.g., "Watt Security agent patrolling a corporate office entrance at night" — not "security image" or a blank placeholder). Purely decorative images (if any) use `alt=""`.
- **Video content:**
  - The Hero video (Section 1) is decorative/ambient with no spoken audio — it does not require captions, but must have an accessible way to pause it (see Section 6 below) and must not autoplay with sound under any circumstance.
  - Any Video Gallery clip (Section 9) that includes spoken dialogue (e.g., a narrated intervention walkthrough) requires captions/subtitles; if any video eventually includes a spoken client testimonial, it also requires a text transcript or captions.
  - Video thumbnails require `alt` text describing the clip's content (e.g., "Video: Event security access control in action").
- **Icons:** Icon-only interactive elements (floating WhatsApp button, gallery lightbox close/next/prev controls, video play buttons, accordion toggles) require an `aria-label` describing their function, per `design/ICONOGRAPHY.md` usage rules.
- **Animated counters (Section 5):** The final numeric value must be available to assistive technology immediately (e.g., via the underlying text content or an `aria-label` stating the final number), not conveyed only through a rapidly-changing visual count-up that a screen reader would announce incoherently mid-animation.

## 5. Screen Reader Structure

- Use correct semantic landmarks: `<header>` (site header/nav), `<main>` (all homepage sections), `<footer>` (Section 14) — per `PROJECT_RULES.md`.
- Each major section (Sections 1–13) should be wrapped in a `<section>` with an accessible name (via its H2, referenced through `aria-labelledby`, or an explicit `aria-label` for the Hero which uses an H1 instead) so screen reader users navigating by landmark/region can identify each section.
- Form fields (Section 12) require properly associated `<label>` elements for every input — no placeholder-only labels, per `design/UI_COMPONENTS.md` Forms.
- Form submission feedback (success/error messages) must be announced to assistive technology via an `aria-live="polite"` region, since it appears dynamically without a full page reload.
- The FAQ accordion (Section 11) should use `aria-expanded` on each toggle button and ensure the associated answer panel is properly associated (`aria-controls` / matching `id`) so screen reader users understand what content will appear/disappear.

## 6. Motion & Auto-Updating Content

- All animations described in `design/ANIMATIONS.md` (scroll-reveal fades, counter count-up, card hover lifts, accordion transitions, carousel/slider transitions) must be disabled or reduced to near-instant under `prefers-reduced-motion: reduce`.
- **Hero video:** per WCAG 2.2.2 (Pause, Stop, Hide), any content that auto-plays and lasts more than 5 seconds must offer a visible mechanism to pause it — the pause/play control specified in `HOME_PAGE_SPECIFICATION.md` Section 1 is a hard accessibility requirement, not a nice-to-have.
- **Testimonial carousel (Section 10), if implemented with autoplay:** must include visible, always-available previous/next controls, must pause on hover and on keyboard focus, and must fully stop autoplay under `prefers-reduced-motion`. The static-grid alternative noted in `HOME_PAGE_SPECIFICATION.md` Section 10 avoids this requirement entirely and is the lower-risk choice from an accessibility standpoint.

## 7. Responsive & Touch Accessibility

- **Minimum touch target size:** 44×44px for every interactive element on mobile (buttons, links, accordion toggles, gallery thumbnails acting as lightbox triggers, the floating WhatsApp button).
- **Text resize/zoom:** the layout must remain usable and non-overlapping at up to 200% browser text zoom, per `PROJECT_RULES.md`.
- **No hover-only content:** any information or interaction revealed on hover (e.g., gallery caption overlays, card hover states) must also be accessible via focus (keyboard) and via an always-visible alternative on touch devices, which don't have a true hover state.
- **Orientation:** the homepage must remain fully usable in both portrait and landscape orientation on mobile/tablet, with no content or functionality locked to a single orientation.

## 8. Summary Checklist (per section)

| Section | Key accessibility requirement |
|---|---|
| 1. Hero | Contrast scrim over video, visible pause control, skip link present |
| 2. Presentation | Standard heading/landmark structure, image `alt` text |
| 3. Services | Cards fully keyboard-operable as single link targets |
| 4. Why Choose Us | Icon+text pairs readable without relying on icon meaning alone |
| 5. Key Numbers | Final counter value available to assistive tech immediately |
| 6. Our Team | Meaningful photo `alt` text (name/role, not "photo") |
| 7. K9 Unit | Standard heading/landmark/image `alt` requirements |
| 8. Photo Gallery | Descriptive `alt` text per image, keyboard/focus-trapped lightbox |
| 9. Video Gallery | Captions where dialogue exists, no autoplay, accessible play controls |
| 10. Testimonials | Carousel controls + pause, or static grid (preferred) |
| 11. FAQ | `aria-expanded`/`aria-controls` on accordion, full keyboard operability |
| 12. Quick Contact | Labeled fields, `aria-live` feedback, logical focus order |
| 13. Google Maps | Accessible "Get Directions" link as a text alternative to the interactive map |
| 14. Footer | Landmark structure, all links keyboard-reachable |

No open questions for this document — the rules above are direct applications of established WCAG practice and the project's existing accessibility commitments in `PROJECT_RULES.md`; none require client input to proceed.
