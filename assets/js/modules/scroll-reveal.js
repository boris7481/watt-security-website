/* ==========================================================================
   Scroll Reveal — generic fade/slide-in-on-scroll for any element marked
   with [data-scroll-reveal]. See architecture/JAVASCRIPT_ARCHITECTURE.md §3.

   Progressive enhancement contract: every target element must already be
   fully visible by default in CSS. This module only ADDS a "has-scroll-reveal"
   class to <html> — the pre-reveal (invisible/offset) styles are themselves
   scoped under that class in CSS, so if this script never runs (JS error,
   disabled JS), targets simply stay in their default, fully visible state
   (specifications/ACCESSIBILITY_SPECIFICATION.md §6, design/ANIMATIONS.md §7).
   ========================================================================== */

const REVEAL_CLASS = "is-visible";
const ENABLED_CLASS = "has-scroll-reveal";
const ROOT_MARGIN = "0px 0px -10% 0px";

export function initScrollReveal() {
  const targets = document.querySelectorAll("[data-scroll-reveal]");
  if (targets.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return; // targets stay in their default (visible) CSS state

  document.documentElement.classList.add(ENABLED_CLASS);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(REVEAL_CLASS);
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: ROOT_MARGIN, threshold: 0.1 }
  );

  targets.forEach((target) => observer.observe(target));
}
