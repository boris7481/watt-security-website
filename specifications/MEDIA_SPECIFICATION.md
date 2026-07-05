# Media Specification — Watt Security Homepage

This document lists every photo and video category needed for the homepage, recommended formats/resolutions, and where each media item is used. It does not include any actual media files — media production/sourcing happens in a future milestone.

## 1. Photography

General direction for all photography: professional, well-lit, candid-but-posed (not stiff stock-photo poses), consistent color grading (slightly cool/neutral tone that complements the Watt Navy palette — avoid warm/orange-heavy grading). No visible competitor branding, no images that look like generic international stock photography — authentic, Douala-context imagery is strongly preferred over stock substitutes wherever feasible, since authenticity directly supports the trust objective in `USER_JOURNEY.md`.

| Category | Subject guidance | Used in section(s) |
|---|---|---|
| Security agents | Agents in uniform, alert posture, on-site — headshots and full-body/action shots | Hero (poster fallback), Presentation, Why Choose Us, Photo Gallery |
| Surveillance | Control room monitors, CCTV camera hardware, an operator reviewing footage | Presentation, Photo Gallery, Why Choose Us |
| Corporate sites | Agents stationed at office building entrances/lobbies, corporate site exteriors | Services (Corporate Security card), Photo Gallery |
| Hotels | Agents at hotel entrances/lobbies, event-adjacent hospitality security context | Services (Event/VIP context), Photo Gallery |
| Events | Crowd/access control at an event entrance, agents coordinating at an event | Services (Event Security card), Photo Gallery, Video Gallery |
| K9 | Trained dogs with handlers, on patrol or in a controlled demonstration setting | K9 Section, Photo Gallery |
| Patrols/rounds | Agents walking a perimeter, checkpoint check-ins, night patrol context | Services (Patrol Services card), Why Choose Us, Photo Gallery |
| Vehicles | Branded/marked patrol vehicles, agents departing/arriving on-site | Photo Gallery, Presentation |
| Access control | Agents managing a checkpoint, ID verification, visitor log/badge process | Services (Corporate/Industrial cards), Photo Gallery |

### Recommended Formats & Resolutions

| Placement | Aspect ratio | Minimum resolution | Format |
|---|---|---|---|
| Hero poster/fallback image | 16:9 (or wider, matching video framing) | 1920×1080px | WebP (primary), JPEG (fallback) |
| Section feature images (Presentation, K9) | 4:5 or 1:1 | 1200×1200px (or 1200×1500px for 4:5) | WebP, JPEG fallback |
| Service/Team card thumbnails | 4:3 or 1:1 (consistent per grid) | 800×600px | WebP, JPEG fallback |
| Photo Gallery grid images | 4:3 (uniform grid, per `HOME_PAGE_SPECIFICATION.md` Section 8) | 1200×900px | WebP, JPEG fallback |
| Open Graph / social share image | 1200×630px exactly | 1200×630px | JPEG or PNG |

**Compression targets (performance — supports the Lighthouse >90 objective in `README.md`):**
- Card/thumbnail images: target under ~150KB each after compression.
- Full-width/gallery images: target under ~250–300KB each.
- Hero poster image: target under ~300KB (it loads immediately, so it's performance-critical).
- All images require descriptive, keyword-relevant file names and meaningful `alt` text (see `PROJECT_RULES.md` and `ACCESSIBILITY_SPECIFICATION.md`) — never generic names like `IMG_0234.jpg`.
- Serve responsive image sizes (`srcset`) at implementation time so mobile devices don't download desktop-resolution images.

## 2. Video

General direction: calm, procedural, professional tone — footage should communicate discipline and control, never dramatized or action-movie-style editing (consistent with the restrained brand tone in `design/ANIMATIONS.md` and `design/BRAND_GUIDE.md`). No loud music, no fast cuts; if music is used at all, it should be subtle and non-intrusive, and the hero video must always play muted by default regardless.

| Category | Content guidance | Used in section(s) |
|---|---|---|
| Hero | Short, calm b-roll loop: agents on duty, a patrol vehicle, a control room — no on-screen text needed since the H1/copy overlays it | Hero (Section 1) |
| Interventions | Procedural response demonstration (e.g., checkpoint response, coordinated communication) — must avoid depicting or implying violence; focus on discipline and coordination, not confrontation | Video Gallery |
| Events | Agents managing access/crowd flow at an event | Video Gallery |
| Surveillance | Control room operations, camera pan/monitoring b-roll | Video Gallery, Presentation (optional supporting clip) |
| Patrols | Vehicle and foot patrol footage, day and night contexts | Video Gallery, Why Choose Us (optional supporting clip) |

### Recommended Formats & Specifications

| Placement | Resolution | Format | Duration | Notes |
|---|---|---|---|---|
| Hero background video | 1920×1080 (1080p) minimum; export at a controlled bitrate (~4–6 Mbps) to balance quality and load time | MP4 (H.264, primary), WebM (VP9, fallback) | 15–30 seconds, seamless loop | Always muted, autoplay only on desktop/tablet with sufficient bandwidth; replaced by a static poster image on mobile (see `HOME_PAGE_SPECIFICATION.md` Section 1) to protect performance and mobile data costs |
| Video Gallery clips | 1920×1080 (1080p) | MP4 (H.264, primary), WebM (fallback) | 30–90 seconds each | Never autoplay; user-initiated playback only, opened in a modal player per `HOME_PAGE_SPECIFICATION.md` Section 9 |
| Video poster/thumbnail frames | 16:9, same resolution guidance as Photo Gallery images | WebP/JPEG | — | Required for every video (both hero and gallery) so a frame displays before playback and while loading |

### Performance & Accessibility Notes

- All video files should be pre-compressed and hosted efficiently (e.g., a CDN or optimized static hosting) — large uncompressed video is one of the most common causes of poor Lighthouse Performance scores, directly relevant to the `README.md` objective of a score above 90.
- Any video containing spoken dialogue (e.g., a testimonial-style video, if added later) requires captions/subtitles for accessibility — see `ACCESSIBILITY_SPECIFICATION.md`.
- The hero video and any autoplaying element must provide a visible pause/stop control (WCAG 2.2.2), detailed in `ACCESSIBILITY_SPECIFICATION.md`.

## 3. Open Questions for Client Validation

- Confirm availability of real staff/site photography and video footage, versus the need to commission a dedicated photo/video shoot — this materially affects the timeline before the Gallery and Team sections can be populated with real (non-placeholder) content.
- Confirm whether client/site photography requires consent forms (especially for corporate/residential client sites shown in the gallery) — a legal/operational matter outside this design milestone, but one that blocks final media sourcing.
- Confirm whether a company logo/wordmark exists or will be commissioned — required for the Open Graph image and video posters/watermarks, and explicitly out of scope for this and prior milestones per the stated constraints ("no logo").
