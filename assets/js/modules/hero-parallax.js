/* ==========================================================================
   Hero Parallax — a very subtle, scroll-linked translate on the Hero
   background layer. Skipped entirely under prefers-reduced-motion (the
   listener is never attached, not merely disabled). GPU-accelerated via
   translate3d and throttled with requestAnimationFrame so it stays cheap.
   ========================================================================== */

const MAX_OFFSET_PX = 40;
const SPEED_FACTOR = 0.15;

export function initHeroParallax() {
  const media = document.querySelector(".hero__media");
  if (!media) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  let ticking = false;

  function update() {
    const offset = Math.min(window.scrollY * SPEED_FACTOR, MAX_OFFSET_PX);
    media.style.transform = `translate3d(0, ${offset}px, 0)`;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}
