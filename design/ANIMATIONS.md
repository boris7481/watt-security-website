# Animations — Watt Security

## 1. Philosophy

Motion on this site exists to **clarify**, not to entertain. Every animation should answer one of these questions for the user: "what just changed," "what will happen if I interact with this," or "where should I look next." If an animation doesn't answer one of those, it doesn't belong on the site.

Given the brand values of discipline and restraint (`DESIGN_SYSTEM.md`, `BRAND_GUIDE.md`), animation must feel **controlled and precise** — closer to the motion of a well-engineered instrument panel than a consumer app. No bounce, no elastic/spring overshoot, no playful wobble.

## 2. Speed & Easing

| Interaction type | Duration | Easing |
|---|---|---|
| Micro-interactions (button hover, link underline, icon color shift) | 150–200ms | ease-out |
| Component state changes (card hover/lift, input focus) | 200–250ms | ease-out |
| Transitions between visual states (menu open/close, accordion expand) | 250–350ms | ease-in-out |
| Scroll-reveal entrance animations | 400–600ms | ease-out |
| Page-level transitions (if implemented) | 300–400ms | ease-in-out |

**Rules:**
- Never exceed ~600ms for any single UI animation — beyond that, the interface starts to feel sluggish rather than deliberate.
- No spring/bounce/elastic easing curves anywhere on the site — they read as playful, which conflicts with the brand tone.
- Prefer `ease-out` for anything entering/appearing (feels responsive) and `ease-in-out` for anything transitioning between two stable states.

## 3. Hover States

- Buttons: color shift only (per `UI_COMPONENTS.md`), no scale/grow effect.
- Cards: subtle lift (small shadow increase + 2–4px upward translate), no rotation, no scale beyond ~1.01–1.02 if used at all — the lift should be barely perceptible as an intentional cue, not a showy effect.
- Links: underline fade-in or color shift to Watt Gold, not both simultaneously with additional movement.
- Icons: color shift matching their parent element's hover state; icons should not spin, bounce, or pulse on hover.

## 4. Scroll Animations

- Content sections may use a simple **fade + slight upward translate (8–16px)** as they enter the viewport, once, on first scroll into view — not a repeating/looping animation.
- Stagger consecutive elements (e.g., a row of service cards) by a small delay (~60–100ms each) so they don't all animate simultaneously, but keep the total stagger short so the section doesn't feel slow to fully render.
- No parallax effects, no elements flying in from off-screen sides, no rotation-on-scroll — these read as "template gimmick" rather than premium/editorial.
- Respect `prefers-reduced-motion`: when set, scroll-reveal and hover-lift animations should be disabled or reduced to instant/near-instant state changes, per the accessibility rule in `PROJECT_RULES.md`.

## 5. Micro-interactions

- Form field focus: border/ring color transition only (200ms), no layout shift.
- Form submission: button may show a brief, simple loading state (e.g., subtle opacity change or a minimal spinner) — no playful loading animations (no bouncing dots, no mascot).
- Navigation active-state indicator (underline/dot) transitions smoothly between items rather than appearing/disappearing abruptly.
- Mobile menu open/close: slide or fade transition (250–300ms), consistent direction, no bounce on open/close.

## 6. What to Avoid

- Auto-playing looping animations of any kind (distracting, undermines the calm/controlled tone).
- Cursor-follow effects, custom cursors, or gimmick interactions.
- Excessive parallax or scroll-jacking (hijacking native scroll behavior).
- Confetti, celebratory, or playful success animations — success/confirmation states should remain calm and factual (see Alerts in `UI_COMPONENTS.md`).
- Animating more than 2–3 properties at once on a single element (keep transitions simple: e.g., color + shadow, not color + shadow + rotation + scale together).

## 7. Accessibility

- All animations must respect the `prefers-reduced-motion: reduce` media query — reduced-motion users should see instant or near-instant (≤50ms) state changes instead of the durations listed above.
- No animation should be required to understand or use core functionality (e.g., a scroll-reveal fade should never leave content invisible if JavaScript fails or motion is disabled — content must be visible by default, with the animation as a progressive enhancement only).
