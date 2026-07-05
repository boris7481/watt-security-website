/* ==========================================================================
   Watt Security — JavaScript Entry Point
   Loaded via <script type="module"> (deferred by default, no render-block).
   This file orchestrates feature modules — it does not implement any
   feature itself. See architecture/JAVASCRIPT_ARCHITECTURE.md for the full
   module inventory and responsibilities.
   ========================================================================== */

import { initMobileMenu } from "./modules/mobile-menu.js";
import { initHeroParallax } from "./modules/hero-parallax.js";
import { initScrollReveal } from "./modules/scroll-reveal.js";

/**
 * Remaining future modules will live in assets/js/modules/ and be imported
 * here the same way, one responsibility per file
 * (architecture/JAVASCRIPT_ARCHITECTURE.md §3):
 *
 *   - accordion.js     → generic expand/collapse (powers the FAQ section)
 *   - gallery.js       → photo/video gallery grid + lightbox
 *   - contact-form.js  → form validation, submission, accessible feedback
 *   - lazy-load.js     → progressive loading helpers beyond native lazy-loading
 *
 * Each module is imported statically (if needed above the fold, e.g.
 * mobile-menu.js) or dynamically via import() (if tied to below-the-fold
 * content, e.g. gallery.js, counters.js, testimonials.js) — see
 * architecture/JAVASCRIPT_ARCHITECTURE.md §6 for the loading strategy.
 *
 * Every module assumes prefers-reduced-motion is respected globally before
 * initializing any animation-driven behavior (counters, scroll reveal),
 * per specifications/ACCESSIBILITY_SPECIFICATION.md §6.
 *
 * initScrollReveal() is called LAST, after every data-driven module has
 * finished rendering its own [data-scroll-reveal] elements (e.g. the
 * testimonial cards below are fetched and inserted asynchronously) — it
 * only observes elements present in the DOM at the moment it runs, so
 * anything rendered after it would otherwise never fade in.
 */

async function init() {
  initMobileMenu();
  initHeroParallax();

  if (document.querySelector("[data-stats-grid]")) {
    const { initCounters } = await import("./modules/counters.js");
    await initCounters();
  }

  if (document.querySelector("[data-testimonials-grid]")) {
    const { initTestimonials } = await import("./modules/testimonials.js");
    await initTestimonials();
  }

  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
