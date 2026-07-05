/* ==========================================================================
   Legal Page Contact Block — renders the NAP (name/address/phone/email)
   block shared by pages/legal-notice.html ("Éditeur du site") and
   pages/privacy-policy.html ("Contact"), from data/contact.json — the same
   single source of truth already used by the homepage Contact section and
   Footer (assets/js/modules/contact-info.js, footer.js). Reusing it here
   guarantees NAP consistency across the whole site rather than hand-typing
   a copy that can drift (specifications/SEO_SPECIFICATION.md §7 §2 flags
   inconsistent NAP as a common local SEO failure).

   Both pages share this one module since the rendered block is identical
   (company name, address, phone, email) — only its section heading and
   surrounding legal copy differ, and that copy lives directly in each
   page's own HTML.
   ========================================================================== */

import { icon, telHref, fetchContactData } from "./contact-info.js";

export async function initLegalContact() {
  const list = document.querySelector("[data-legal-contact]");
  if (!list) return;

  let contact;
  try {
    contact = await fetchContactData();
  } catch (error) {
    return; // Leave the noscript-equivalent message in place rather than a broken list.
  }

  const { company, address, phone, emails } = contact;

  list.innerHTML = `
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("pin")}</span>
      <span>${company} — ${address.street}, ${address.city}, ${address.country}</span>
    </li>
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("phone")}</span>
      <a href="tel:${telHref(phone)}" class="contact__detail-link">${phone}</a>
    </li>
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("mail")}</span>
      <a href="mailto:${emails[0]}" class="contact__detail-link">${emails[0]}</a>
    </li>
  `;
}
