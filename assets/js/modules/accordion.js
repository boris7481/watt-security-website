/* ==========================================================================
   Accordion — renders the FAQ section from data/faq.json and powers its
   single-open-at-a-time expand/collapse behavior. This module never
   hardcodes any question/answer text — data/faq.json is the only place
   that content lives (same data-separation pattern as counters.js and
   testimonials.js from Milestones 10 and 13).

   The open/close animation itself is pure CSS (grid-template-rows 0fr/1fr
   on .faq-item__answer-wrapper.is-open, in components.css) — this module
   only toggles that class and the ARIA state; it never measures or sets
   any height. prefers-reduced-motion is already handled globally by the
   transition-duration override in utilities.css, so no extra check is
   needed here for the animation itself.
   ========================================================================== */

const DATA_URL = "data/faq.json";

export async function initAccordion() {
  const list = document.querySelector("[data-faq-list]");
  if (!list) return;

  let items;
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    items = data.items;
  } catch (error) {
    return; // Leave the noscript-equivalent message in place rather than a broken list.
  }

  if (!Array.isArray(items) || items.length === 0) return;

  list.innerHTML = items.map(faqItemMarkup).join("");

  const triggers = Array.from(list.querySelectorAll("[data-accordion-trigger]"));
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => toggleItem(trigger, triggers));
  });
}

function faqItemMarkup(item, index) {
  const triggerId = `faq-trigger-${index + 1}`;
  const panelId = `faq-panel-${index + 1}`;

  return `
    <div class="faq-item">
      <h3 class="faq-item__heading">
        <button
          type="button"
          class="faq-item__trigger"
          id="${triggerId}"
          data-accordion-trigger
          aria-expanded="false"
          aria-controls="${panelId}"
        >
          <span class="faq-item__question">${item.question}</span>
          <span class="faq-item__icon" aria-hidden="true">
            <span class="faq-item__icon-line faq-item__icon-line--h"></span>
            <span class="faq-item__icon-line faq-item__icon-line--v"></span>
          </span>
        </button>
      </h3>
      <div
        class="faq-item__answer-wrapper"
        id="${panelId}"
        role="region"
        aria-labelledby="${triggerId}"
      >
        <div class="faq-item__answer-inner">
          <p class="faq-item__answer">${item.answer}</p>
        </div>
      </div>
    </div>
  `;
}

function toggleItem(trigger, allTriggers) {
  const isOpen = trigger.getAttribute("aria-expanded") === "true";

  allTriggers.forEach((otherTrigger) => {
    if (otherTrigger !== trigger) {
      setExpanded(otherTrigger, false);
    }
  });

  setExpanded(trigger, !isOpen);
}

function setExpanded(trigger, expanded) {
  trigger.setAttribute("aria-expanded", String(expanded));
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  if (panel) {
    panel.classList.toggle("is-open", expanded);
  }
}
