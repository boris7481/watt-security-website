/* ==========================================================================
   Contact Info — renders the left-column contact details (address, phone,
   emails, hours, PO box, WhatsApp link, social links) from
   data/contact.json. This module never hardcodes any contact detail
   itself — the data file is the only place those values live (same
   data-separation pattern as counters.js, testimonials.js, accordion.js).

   Separate from contact-form.js on purpose: this module only renders
   static data, the other only handles form validation/submission
   behavior — two unrelated responsibilities, per
   architecture/JAVASCRIPT_ARCHITECTURE.md's one-module-per-responsibility
   principle.

   icon(), telHref(), waNumber(), and fetchContactData() are exported so
   footer.js (Milestone 16) can reuse them for the footer's own contact
   column instead of duplicating the icon set or the tel:/wa.me formatting
   logic — the footer still composes its own (shorter) list of rows, since
   its field selection genuinely differs from this section's (it adds a
   WhatsApp row, drops the PO box).
   ========================================================================== */

export const DATA_URL = "data/contact.json";

export async function fetchContactData() {
  const response = await fetch(DATA_URL);
  return response.json();
}

const ICONS = {
  pin: `<path d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>`,
  phone: `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
  box: `<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>`,
  chat: `<path d="M21 11.5a8.5 8.5 0 01-8.5 8.5 8.4 8.4 0 01-4-1L3 20l1-4.5a8.4 8.4 0 01-1-4A8.5 8.5 0 0111.5 3 8.5 8.5 0 0121 11.5z"/>`
};

export const SOCIAL_ICONS = {
  Facebook: `<circle cx="12" cy="12" r="10"/><path d="M14 8h-1.5c-.8 0-1.5.7-1.5 1.5V11h3l-.4 3H11v6h-3v-6H6v-3h2V9.2C8 7 9.8 5 12 5h2v3z"/>`,
  LinkedIn: `<circle cx="12" cy="12" r="10"/><rect x="7" y="10" width="2" height="7"/><circle cx="8" cy="7" r="1.2"/><path d="M11 10h2v1.3c.5-.8 1.4-1.5 2.7-1.5 2 0 3.3 1.3 3.3 4V17h-2v-3c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.3-.1.3-.1.6-.1 1V17h-2v-7z"/>`,
  Instagram: `<circle cx="12" cy="12" r="10"/><rect x="7" y="7" width="10" height="10" rx="3"/><circle cx="12" cy="12" r="2.5"/><circle cx="15.3" cy="8.7" r="0.6" fill="currentColor" stroke="none"/>`
};

export async function initContactInfo() {
  const detailsList = document.querySelector("[data-contact-details]");
  const actions = document.querySelector("[data-contact-actions]");
  const social = document.querySelector("[data-contact-social]");
  if (!detailsList && !actions && !social) return;

  let contact;
  try {
    contact = await fetchContactData();
  } catch (error) {
    return; // Leave the noscript-equivalent messages in place rather than a broken layout.
  }

  if (detailsList) detailsList.innerHTML = detailsMarkup(contact);
  if (actions) actions.innerHTML = actionsMarkup(contact);
  if (social) social.innerHTML = socialMarkup(contact.social);
}

export function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
}

function detailsMarkup(contact) {
  const { address, phone, emails, hours } = contact;

  const emailItems = emails
    .map(
      (email) => `
      <li class="contact__detail">
        <span class="contact__detail-icon">${icon("mail")}</span>
        <a href="mailto:${email}" class="contact__detail-link">${email}</a>
      </li>`
    )
    .join("");

  return `
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("pin")}</span>
      <span>${address.street}, ${address.city}, ${address.country}</span>
    </li>
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("phone")}</span>
      <a href="tel:${telHref(phone)}" class="contact__detail-link">${phone}</a>
    </li>
    ${emailItems}
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("clock")}</span>
      <span>${hours.join(" — ")}</span>
    </li>
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("box")}</span>
      <span>Boîte postale ${address.poBox}</span>
    </li>
  `;
}

function actionsMarkup(contact) {
  const whatsappUrl = `https://wa.me/${waNumber(contact.phone)}`;
  return `
    <a href="tel:${telHref(contact.phone)}" class="btn btn--secondary btn--secondary-on-light">
      ${icon("phone")}
      Appeler
    </a>
    <a href="${whatsappUrl}" class="btn btn--primary" target="_blank" rel="noopener">
      ${icon("chat")}
      Discuter sur WhatsApp
    </a>
  `;
}

function socialMarkup(socialLinks) {
  if (!Array.isArray(socialLinks)) return "";
  return socialLinks
    .map(
      (link) => `
      <a href="${link.url}" class="contact__social-link" aria-label="Watt Security sur ${link.name}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${SOCIAL_ICONS[link.name] ?? ""}</svg>
      </a>`
    )
    .join("");
}

/** Strips everything except digits and a leading + for a tel: href. */
export function telHref(phone) {
  return phone.replace(/[^\d+]/g, "");
}

/** wa.me requires digits only, no leading +. */
export function waNumber(phone) {
  return phone.replace(/[^\d]/g, "");
}
