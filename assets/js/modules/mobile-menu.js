/* ==========================================================================
   Mobile Menu — toggles the primary navigation open/closed on viewports
   below the desktop breakpoint. See architecture/JAVASCRIPT_ARCHITECTURE.md
   §3 and architecture/COMPONENT_ARCHITECTURE.md §2.

   Visibility is controlled entirely by CSS (assets/css/components.css
   .nav / .nav.is-open) via a visibility-transition technique, so this
   module only ever toggles a class and the relevant ARIA attributes —
   it never touches inline styles or the `hidden` attribute.
   ========================================================================== */

const DESKTOP_BREAKPOINT = 1024; // px — must match the literal value used in assets/css/components.css

export function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.getElementById("primary-navigation");

  if (!toggle || !nav) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fermer le menu");
  }

  function closeMenu({ refocusToggle = false } = {}) {
    isOpen = false;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
    if (refocusToggle) toggle.focus();
  }

  toggle.addEventListener("click", () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Selecting any nav link or the CTA closes the drawer (they are all
  // placeholder "#" links for now, but the behavior must already be correct).
  nav.addEventListener("click", (event) => {
    if (event.target.closest(".nav__link, .nav__cta")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) {
      closeMenu({ refocusToggle: true });
    }
  });

  // Defensive: if the viewport crosses into desktop while the drawer is
  // open (e.g., rotating a tablet or resizing a browser window), close it
  // so it can't get stuck open under the desktop inline nav layout.
  window.addEventListener("resize", () => {
    if (isOpen && window.innerWidth >= DESKTOP_BREAKPOINT) {
      closeMenu();
    }
  });
}
