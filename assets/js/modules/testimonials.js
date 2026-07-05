/* ==========================================================================
   Testimonials — renders the Testimonials section from data/testimonials.json.
   This module never hardcodes any testimonial content itself — the data
   file is the only place those values live, and it can be edited freely
   later (e.g., swapped for real, consented client quotes) without touching
   this file or index.html (architecture/JAVASCRIPT_ARCHITECTURE.md §3,
   the data-separation pattern established for Key Numbers in Milestone 10).

   No animation logic lives here: each rendered card carries
   [data-scroll-reveal], the same attribute used by Why-Us and the Gallery,
   so the existing assets/js/modules/scroll-reveal.js handles the reveal —
   main.js calls initScrollReveal() only after this module has finished
   rendering, so it can actually find these cards.
   ========================================================================== */

const DATA_URL = "data/testimonials.json";
const AVATAR_SRC = "assets/images/avatars/placeholder-avatar.svg";
const STAR_PATH =
  "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z";

export async function initTestimonials() {
  const grid = document.querySelector("[data-testimonials-grid]");
  if (!grid) return;

  let testimonials;
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    testimonials = data.testimonials;
  } catch (error) {
    return; // Leave the noscript-equivalent message in place rather than a broken grid.
  }

  if (!Array.isArray(testimonials) || testimonials.length === 0) return;

  grid.innerHTML = testimonials.map(testimonialCardMarkup).join("");
}

function testimonialCardMarkup(testimonial) {
  return `
    <figure class="testimonial-card" data-scroll-reveal>
      <blockquote class="testimonial-card__quote">
        <span class="testimonial-card__quote-mark" aria-hidden="true">&ldquo;</span>
        <p class="testimonial-card__text">${testimonial.text}</p>
      </blockquote>
      <div class="testimonial-card__rating" aria-hidden="true">${starsMarkup(testimonial.rating)}</div>
      <span class="visually-hidden">Note : ${testimonial.rating} sur 5 étoiles</span>
      <figcaption class="testimonial-card__attribution">
        <img
          class="testimonial-card__avatar"
          src="${AVATAR_SRC}"
          alt=""
          width="200"
          height="200"
          loading="lazy"
        >
        <div class="testimonial-card__identity">
          <p class="testimonial-card__name">${testimonial.name}</p>
          <p class="testimonial-card__company">${testimonial.company}</p>
        </div>
      </figcaption>
    </figure>
  `;
}

function starsMarkup(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    stars += `<svg viewBox="0 0 24 24" class="testimonial-card__star${filled ? " testimonial-card__star--filled" : ""}" ${
      filled ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.5"'
    }><path d="${STAR_PATH}"/></svg>`;
  }
  return stars;
}
