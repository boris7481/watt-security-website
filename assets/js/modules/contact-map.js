/* ==========================================================================
   Contact Map — renders a Google Maps iframe into the Contact section from
   data/contact.json (same data-separation pattern as contact-info.js,
   counters.js, testimonials.js, accordion.js). No address is hardcoded
   here: editing that file's `address` (or, once known, `gps`) updates the
   map alongside the contact details already rendered by contact-info.js.

   Uses the key-less Google Maps "output=embed" query endpoint — a plain
   <iframe>, no Google Maps JavaScript API, no API key, no external
   library, per Milestone 17's performance/dependency constraints. When
   data/contact.json's `gps` field is filled in with real coordinates
   (currently null), the map automatically switches to pinning those exact
   coordinates instead of a text address search — no code change needed.
   ========================================================================== */

import { fetchContactData } from "./contact-info.js";

const MAP_BASE_URL = "https://www.google.com/maps";

/** Prefers precise GPS coordinates once set; falls back to the text address. */
export function buildMapQuery(contact) {
  const { gps, address } = contact;
  if (gps && typeof gps.lat === "number" && typeof gps.lng === "number") {
    return `${gps.lat},${gps.lng}`;
  }
  return `${address.street}, ${address.city}, ${address.country}`;
}

export function buildMapEmbedUrl(contact) {
  const query = encodeURIComponent(buildMapQuery(contact));
  return `${MAP_BASE_URL}?q=${query}&output=embed`;
}

export async function initContactMap() {
  const wrapper = document.querySelector("[data-contact-map]");
  if (!wrapper) return;

  let contact;
  try {
    contact = await fetchContactData();
  } catch (error) {
    return; // Leave the noscript-equivalent message in place rather than a broken layout.
  }

  const { address, company } = contact;
  const title = `Localisation de ${company} — ${address.street}, ${address.city}, ${address.country}`;

  wrapper.innerHTML = `
    <iframe
      class="contact__map-frame"
      src="${buildMapEmbedUrl(contact)}"
      title="${title}"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;
}
