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
 *   - gallery.js       → photo/video gallery grid + lightbox
 *   - lazy-load.js     → progressive loading helpers beyond native lazy-loading
 *
 * Each module is imported statically (if needed above the fold, e.g.
 * mobile-menu.js) or dynamically via import() (if tied to below-the-fold
 * content, e.g. gallery.js, counters.js, testimonials.js, accordion.js,
 * contact-info.js, contact-form.js) — see
 * architecture/JAVASCRIPT_ARCHITECTURE.md §6 for the loading strategy.
 *
 * Every module assumes prefers-reduced-motion is respected globally before
 * initializing any animation-driven behavior (counters, scroll reveal),
 * per specifications/ACCESSIBILITY_SPECIFICATION.md §6. The FAQ accordion's
 * open/close animation is pure CSS and already covered by the global
 * transition-duration override in utilities.css, so accordion.js needs no
 * reduced-motion check of its own.
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

  if (document.querySelector(".hero__media-img")) {
    const { initHeroVideo } = await import("./modules/hero-video.js");
    await initHeroVideo();
  }

  if (document.querySelector("[data-stats-grid]")) {
    const { initCounters } = await import("./modules/counters.js");
    await initCounters();
  }

  if (document.querySelector("[data-testimonials-grid]")) {
    const { initTestimonials } = await import("./modules/testimonials.js");
    await initTestimonials();
  }

  if (document.querySelector("[data-faq-list]")) {
    const { initAccordion } = await import("./modules/accordion.js");
    await initAccordion();
  }

  if (document.querySelector("[data-contact-details]")) {
    const { initContactInfo } = await import("./modules/contact-info.js");
    await initContactInfo();
  }

  if (document.querySelector("[data-contact-map]")) {
    const { initContactMap } = await import("./modules/contact-map.js");
    await initContactMap();
  }

  if (document.querySelector("[data-contact-form]")) {
    const { initContactForm } = await import("./modules/contact-form.js");
    initContactForm();
  }

  if (document.querySelector("[data-footer]")) {
    const { initFooter } = await import("./modules/footer.js");
    await initFooter();
  }

  if (document.querySelector("[data-legal-contact]")) {
    const { initLegalContact } = await import("./modules/legal-page.js");
    await initLegalContact();
  }

  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
