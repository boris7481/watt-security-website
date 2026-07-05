# UI Components — Watt Security

This document describes the visual and behavioral style of core UI components. It defines **what each component looks like and how it behaves**, not markup or code — implementation happens in a later milestone.

All components must use the colors defined in `COLOR_PALETTE.md`, the type defined in `TYPOGRAPHY.md`, and the spacing values defined in `SPACING.md`.

## 1. Buttons

**Primary Button**
- Background: Watt Gold (`#B8933E`); text: Watt Navy Deep (`#08131F`) for strong contrast on the accent color.
- Hover: background shifts to Watt Gold — Deep (`#96762E`); no scale/bounce effect, only the color transition and a subtle shadow lift.
- Shape: slightly rounded corners (small radius — sharp enough to feel formal, not pill-shaped/playful).
- Used for: the single primary action per section ("Request a Quote," "Contact Us").

**Secondary Button**
- Background: transparent; border: 1–2px Watt Navy (on light backgrounds) or Off-White (on dark backgrounds); text matches border color.
- Hover: background fills subtly with a low-opacity tint of the border color; text/border remain legible.
- Used for: secondary actions ("Learn More," "View All Services") that should not compete with the primary CTA.

**Tertiary / Text Link Button**
- No background or border; text in Watt Navy (light bg) or Off-White (dark bg), with an underline or gold arrow indicator on hover.
- Used for: inline or low-emphasis actions ("See details →").

**General button rules:**
- Only one primary button visible per viewport section at a time.
- Buttons never use pure drop shadows that look "floaty"/skeuomorphic — shadows, if used, are minimal and grounded (soft, low-spread, low-opacity).
- Disabled state: reduced opacity (~40%), no hover interaction, cursor indicates non-interactive.

## 2. Cards

**Service Card**
- Light background (Pearl White) with a thin Mist border, or a Watt Navy Light background when placed on a dark section — never a heavy drop shadow as the primary depth cue; prefer a thin border plus a very subtle shadow.
- Structure (visual, not markup): icon (top), heading (H4/H5), short description (body small), optional text link ("Learn more →").
- Hover: subtle lift (small shadow increase, 2–4px translate up) and the icon or heading accent shifts to Watt Gold — signals interactivity without being flashy.
- Equal height across a row (grid-aligned), consistent internal padding per `SPACING.md`.

**Stat / Proof Card**
- Used for numbers like "10+ Years," "24/7 Availability," "200+ Sites Protected."
- Large Montserrat numeral in Watt Gold, small Inter label underneath in Graphite/Cool Gray.
- Minimal or no border — designed to sit directly on a section background, often grouped in a row of 3–4.

**Testimonial Card**
- Quiet, editorial feel: quotation mark accent in Watt Gold, quote text in Inter (large body), attribution (name/role/company) in smaller Montserrat 600.
- Neutral card background, thin border — must not look like a "review widget" from a generic template.

## 3. Forms

- Inputs: light background (Pearl White/Fog), 1px Mist border, comfortable padding per `SPACING.md`, label always visible above the field (never placeholder-only labels, for accessibility).
- Focus state: border changes to Watt Navy or Watt Gold with a visible focus ring (accessibility requirement — never remove focus outlines without an equally visible replacement).
- Error state: border and helper text in Alert Red, with a short specific message (e.g., "Please enter a valid phone number") — never color alone.
- Success state (e.g., after submission): confirmation message uses Success Green with a checkmark icon, calm and factual tone ("Your request has been received. Our team will contact you within 24 hours.").
- Submit button follows the Primary Button style.

## 4. Badges

- Small, pill-or-slightly-rounded label used for tags like "24/7," "Certified," "Licensed," service categories on cards.
- Neutral style by default: Fog background, Ink text, thin Mist border — reserved emphasis badges (e.g., "Most Requested") may use a subtle Watt Gold border or text instead of a solid gold fill, to avoid visual noise.
- Uppercase text, small size (per Typography "eyebrow" styling), letter-spacing for a structured/label feel rather than a soft conversational chip.

## 5. Alerts / Notices

- Used sparingly (e.g., site-wide notice, form feedback, availability status).
- Structure: icon + short message, left border accent in the relevant semantic color (Success/Error/Warning) rather than a fully colored block, keeping the overall page tone calm even when displaying a status message.
- Dismissible alerts include a simple close control, no animation beyond a quick fade-out.

## 6. Icons

- Used consistently at defined sizes (see `ICONOGRAPHY.md`) inside buttons, cards, list items, and navigation.
- Default icon color inherits the surrounding text color; Watt Gold is used only for icons that need to draw specific attention (e.g., a featured stat, an active nav/service indicator).
- Icons are never purely decorative filler — each icon must reinforce meaning (a specific service, a specific action).

## 7. CTA Blocks (Call-To-Action Sections)

- Full-width section, typically on a Watt Navy or Watt Navy Deep background, used to prompt contact/quote requests between major content sections.
- Structure (visual): short H2/H3 heading, one supporting sentence, one Primary Button (Watt Gold) — nothing else competing for attention in this block.
- Used at most 1–2 times per page to preserve impact (overuse dilutes urgency and feels like generic template filler).

## 8. Service Cards (Homepage / Services Overview)

(See also "Service Card" under Cards above — this entry covers the grid-level behavior.)

- Displayed in a responsive grid: 1 column (mobile), 2 columns (tablet), 3–4 columns (desktop), per the grid rules in `SPACING.md`.
- Each card represents exactly one service from the confirmed list (Corporate Security, Residential Security, Industrial Site Surveillance, Event Security, VIP Protection, Security Guards, Patrol Services, K9 Security Dogs, 24/7 Security Services).
- Clicking/tapping a card (or its "Learn more" link) is the only interactive affordance — the whole card should be a single clickable target once implemented, not just the text link, for a larger and more forgiving touch target on mobile.

## 9. Navigation Bar

- Fixed or sticky header (behavior to be confirmed at implementation), Watt Navy background with Off-White text and a Watt Gold active-state indicator (underline or dot) for the current section/page.
- On scroll, header may adopt a slightly more compact height and/or subtle shadow to separate it from page content — no color change, no logo resizing that causes layout shift.
- Mobile: condenses to a hamburger menu opening a full-screen or slide-in panel using the same navy/gold/off-white treatment as the desktop header, keeping brand consistency across breakpoints.

## 10. Footer

- Watt Navy Deep background, Off-White/Cool Gray text, Montserrat uppercase small headings per column (per `TYPOGRAPHY.md`).
- Structured in clear columns (Company, Services, Contact, Legal) rather than a single dense block of links/text.
- Bottom bar (copyright, legal links) visually separated by a thin Steel border from the main footer content above it.
