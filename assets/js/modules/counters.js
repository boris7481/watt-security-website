/* ==========================================================================
   Counters — renders the Key Numbers section from data/stats.json and
   animates the count-up for the stats marked "animated": true. This module
   never hardcodes any of the figures itself — data/stats.json is the only
   place those values live, and it can be edited freely later without
   touching this file or index.html (architecture/JAVASCRIPT_ARCHITECTURE.md
   §3, this milestone's data-separation requirement).
   ========================================================================== */

const DATA_URL = "data/stats.json";
const ANIMATION_DURATION_MS = 1200;

const ICONS = {
  agents: `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`,
  clients: `<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M16 10h.01"/><path d="M8 15a4 4 0 008 0"/>`,
  interventions: `<circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/>`,
  availability: `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>`
};

export async function initCounters() {
  const grid = document.querySelector("[data-stats-grid]");
  if (!grid) return;

  let stats;
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    stats = data.stats;
  } catch (error) {
    return; // Leave the noscript-equivalent message in place rather than a broken grid.
  }

  if (!Array.isArray(stats) || stats.length === 0) return;

  grid.innerHTML = stats.map(statCardMarkup).join("");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedValues = grid.querySelectorAll("[data-animate-value]");

  if (reduceMotion || animatedValues.length === 0) return; // final values are already rendered as static text

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  animatedValues.forEach((el) => observer.observe(el));
}

function statCardMarkup(stat) {
  const icon = ICONS[stat.id] ?? "";
  const subvalue = stat.subvalue
    ? `<span class="key-numbers__subvalue">${stat.subvalue}</span>`
    : "";
  const subtitle = stat.subtitle
    ? `<p class="key-numbers__subtitle">${stat.subtitle}</p>`
    : "";

  // The visible number is always rendered as its final value (correct with
  // no JS, no animation, or reduced motion); animateValue() below only
  // varies it temporarily when the count-up actually runs. A duplicate,
  // visually-hidden, non-animated copy guarantees assistive tech always
  // reads the final figure rather than a mid-animation one (specifications/
  // ACCESSIBILITY_SPECIFICATION.md §4).
  const valueMarkup = stat.animated
    ? `<span aria-hidden="true" data-animate-value="${stat.value}">${stat.value}</span><span class="visually-hidden">${stat.value}</span>`
    : `<span>${stat.value}</span>`;

  return `
    <article class="key-numbers__stat">
      <div class="key-numbers__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
      </div>
      <p class="key-numbers__value">${valueMarkup}${subvalue}</p>
      <h3 class="key-numbers__stat-title">${stat.title}</h3>
      ${subtitle}
    </article>
  `;
}

function animateValue(el) {
  const target = Number(el.dataset.animateValue);
  el.textContent = "0"; // avoid a one-frame flash of the final value before the first tick
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / ANIMATION_DURATION_MS, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(tick);
}
