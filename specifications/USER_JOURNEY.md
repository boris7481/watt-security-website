# User Journey — Watt Security Homepage

This document describes the complete path a visitor takes from arrival to contact, and identifies the specific moments where they must be reassured. It complements `HOME_PAGE_SPECIFICATION.md` by explaining *why* each section exists in the order it does.

## 1. Visitor Personas (entry context)

| Persona | Likely entry point | Primary need |
|---|---|---|
| Corporate facilities/operations manager | Google search ("private security company Douala"), referral | Reliability, licensing, ability to handle a corporate site at scale |
| Homeowner / villa owner | Google search, word of mouth | Trust, discretion, responsiveness |
| Event organizer | Referral, search for "event security Douala" | Speed of deployment, scalability for a specific date |
| Industrial site manager | Search, direct outreach | Technical surveillance capability, 24/7 coverage, patrol discipline |
| HR/procurement evaluating multiple vendors | Direct URL, comparison research | Proof (numbers, testimonials), clarity of service scope, ease of requesting a quote |

All personas converge on the same homepage, so the page must reassure broad, professional credibility first (Sections 1–5) before narrowing into proof and specialized content (Sections 6–10), and finally reducing friction to contact (Sections 11–13).

## 2. Step-by-Step Journey

### Step 1 — Arrival (Hero, Section 1)
**Visitor state of mind:** "Is this a serious company, or another generic template site?"
**What happens:** Full-screen video, confident headline, single clear CTA.
**Reassurance delivered:** Visual production quality and message clarity signal legitimacy within seconds — before any text is even read in detail.

### Step 2 — Orientation (Presentation, Section 2)
**Visitor state of mind:** "Who exactly is behind this, and do they know my market (Douala/Cameroon)?"
**What happens:** Short company summary — experience, philosophy, local coverage.
**Reassurance delivered:** Confirms local expertise and operating history without requiring the visitor to dig for an About page.

### Step 3 — Relevance Check (Services, Section 3)
**Visitor state of mind:** "Do they offer what I specifically need?"
**What happens:** All nine services presented clearly, each scannable in seconds.
**Reassurance delivered:** The visitor confirms their specific need (e.g., "Event Security" or "K9") is explicitly served, not lumped into vague "general security."

### Step 4 — Differentiation (Why Choose Us, Section 4)
**Visitor state of mind:** "Why this company over a competitor?"
**What happens:** Concrete differentiators — licensing, training, response time, local knowledge, technology, transparency.
**Reassurance delivered:** Moves the visitor from "they offer the service" to "they offer it better/more reliably than alternatives."

### Step 5 — Scale Validation (Key Numbers, Section 5)
**Visitor state of mind:** "Are they established enough to be dependable, or a small/informal outfit?"
**What happens:** Concrete figures (years of experience, sites protected, agents, availability).
**Reassurance delivered:** Numbers are processed faster and trusted more readily than adjectives — this is the quantitative proof point.

### Step 6 — Humanization (Our Team, Section 6)
**Visitor state of mind:** "Who will actually be responsible for my security, and can I trust them personally?"
**What happens:** Real leadership/staff presented with names, roles, and experience.
**Reassurance delivered:** Removes the anonymity that makes security services feel risky — a named, photographed team signals accountability.

### Step 7 — Specialized Capability (K9 Unit, Section 7)
**Visitor state of mind:** "Do they have unique/advanced capability beyond standard guarding?"
**What happens:** Dedicated K9 program presentation.
**Reassurance delivered:** A specialized, visibly professional capability (trained dog units) reinforces that Watt Security operates above the baseline of typical local guarding companies.

### Step 8 — Visual Proof (Photo Gallery, Section 8)
**Visitor state of mind:** "Is this real, or stock photography/marketing exaggeration?"
**What happens:** Real photographs across corporate, residential, industrial, event, and patrol contexts.
**Reassurance delivered:** Visual evidence of actual operations across the exact contexts the visitor cares about.

### Step 9 — Dynamic Proof (Video Gallery, Section 9)
**Visitor state of mind:** "What does their operation actually look like in motion?"
**What happens:** Short video clips of patrols, events, surveillance operations.
**Reassurance delivered:** Motion footage is harder to fake convincingly than photos and communicates competence and calm procedure.

### Step 10 — Social Proof (Testimonials, Section 10)
**Visitor state of mind:** "Have real clients actually been satisfied, or is this all self-reported?"
**What happens:** Direct client quotes, ideally with company/role attribution.
**Reassurance delivered:** Third-party validation — the single most persuasive trust signal before contact, because it's not the company talking about itself.

### Step 11 — Objection Removal (FAQ, Section 11)
**Visitor state of mind:** "I'm mostly convinced, but I still have a few practical concerns (cost, coverage, contracts, licensing)."
**What happens:** Direct, factual answers to the most common blocking questions.
**Reassurance delivered:** Removes the last friction points that would otherwise require an email/call just to ask basic questions — this reduces drop-off right before the conversion step.

### Step 12 — Conversion (Quick Contact, Section 12)
**Visitor state of mind:** "I'm ready — how do I reach them, and will they respond quickly?"
**What happens:** Low-friction form plus direct call/WhatsApp options.
**Reassurance delivered:** Multiple contact channels match different visitor preferences (some want to call immediately, others prefer a written form); visible business hours/24-7 messaging reassures responsiveness.

### Step 13 — Legitimacy Confirmation (Google Maps, Section 13)
**Visitor state of mind:** "Do they have a real, physical presence?"
**What happens:** Embedded map with office location.
**Reassurance delivered:** A verifiable physical address is a strong final legitimacy signal, particularly important in a market where informal/unregistered security providers exist.

### Step 14 — Safety Net (Footer, Section 14)
**Visitor state of mind:** "If I scrolled straight to the bottom, can I still find what I need?"
**What happens:** Full navigation, contact info, and legal links repeated.
**Reassurance delivered:** No dead end — a visitor who skimmed the whole page can still act immediately from the footer.

## 3. Post-Contact Path (beyond the homepage)

- **Form submission:** Immediate on-screen confirmation (calm, factual — see `UI_COMPONENTS.md` Forms) stating expected response time (e.g., "Our team will contact you within 24 hours"). This sets a clear expectation and reduces anxiety about being ignored.
- **WhatsApp/Call path:** Visitor leaves the site directly into a live conversation channel — the site's job here is simply to make that channel obvious and immediately accessible from any scroll position (see floating WhatsApp CTA in `CTA_STRATEGY.md`).
- **No-conversion path:** A visitor who leaves without converting has still been exposed to the full trust-building sequence; retargeting/newsletter capture is out of scope for this milestone but could be considered in a future one (flagged as an open item).

## 4. Key Reassurance Moments — Summary Table

| Reassurance needed | Delivered in section |
|---|---|
| "Is this legitimate/professional?" | 1. Hero, 13. Google Maps |
| "Do they know my local market?" | 2. Presentation |
| "Do they offer what I need?" | 3. Services |
| "Are they better than alternatives?" | 4. Why Choose Us |
| "Are they big/established enough?" | 5. Key Numbers |
| "Who will actually protect me/my site?" | 6. Our Team |
| "Do they have unique capability?" | 7. K9 Unit |
| "Is this real, not just marketing?" | 8. Photo Gallery, 9. Video Gallery |
| "Have others been satisfied?" | 10. Testimonials |
| "What about my specific practical concerns?" | 11. FAQ |
| "How do I act on this now?" | 12. Quick Contact, 14. Footer |

## 5. Open Question for Client Validation

- Confirm whether a post-submission automated email/WhatsApp confirmation is planned (affects the "expected response time" promise made on the confirmation state) — implementation detail for a later milestone, but worth flagging now since it affects the trust promise made in Section 12.
