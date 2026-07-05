/* ==========================================================================
   Footer — renders the site footer from data/footer.json (company blurb,
   quick links, social links, legal links) AND data/contact.json (address,
   phone, WhatsApp, emails, hours). Neither file duplicates the other:
   contact details are read once, directly from data/contact.json — the
   same single source of truth the Contact section (Milestone 15) uses —
   via the icon()/telHref()/waNumber()/fetchContactData() helpers exported
   by assets/js/modules/contact-info.js, reused here rather than
   reimplemented.
   ========================================================================== */

import { icon, telHref, waNumber, fetchContactData, SOCIAL_ICONS } from "./contact-info.js";

const FOOTER_DATA_URL = "data/footer.json";

const EXTRA_SOCIAL_ICONS = {
  YouTube: `<rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9.5l6 2.5-6 2.5z" fill="currentColor" stroke="none"/>`
};

export async function initFooter() {
  const footer = document.querySelector("[data-footer]");
  if (!footer) return;

  let footerData;
  let contact;
  try {
    [footerData, contact] = await Promise.all([
      fetch(FOOTER_DATA_URL).then((response) => response.json()),
      fetchContactData()
    ]);
  } catch (error) {
    return; // Leave the noscript-equivalent messages in place rather than a broken layout.
  }

  renderCompany(footerData.company);
  renderQuickLinks(footerData.quickLinks);
  renderContactColumn(contact);
  renderSocial(footerData.social);
  renderBottomBar(footerData.legal, contact.company);
}

function renderCompany(company) {
  const descriptionEl = document.querySelector("[data-footer-description]");
  const taglineEl = document.querySelector("[data-footer-tagline]");
  if (descriptionEl && company?.description) descriptionEl.textContent = company.description;
  if (taglineEl && company?.tagline) taglineEl.textContent = company.tagline;
}

function renderQuickLinks(links) {
  const list = document.querySelector("[data-footer-nav]");
  if (!list || !Array.isArray(links)) return;
  list.innerHTML = links
    .map((link) => `<li><a href="${link.href}" class="footer__link">${link.label}</a></li>`)
    .join("");
}

/** Same detail-row markup/icons as the Contact section, but with the
    field set the footer actually asked for: adds a WhatsApp row, drops
    the PO box (specifications for this milestone vs. Milestone 15). */
function renderContactColumn(contact) {
  const list = document.querySelector("[data-footer-contact]");
  if (!list) return;

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

  list.innerHTML = `
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("pin")}</span>
      <span>${address.street}, ${address.city}</span>
    </li>
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("phone")}</span>
      <a href="tel:${telHref(phone)}" class="contact__detail-link">${phone}</a>
    </li>
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("chat")}</span>
      <a href="https://wa.me/${waNumber(phone)}" class="contact__detail-link" target="_blank" rel="noopener">WhatsApp</a>
    </li>
    ${emailItems}
    <li class="contact__detail">
      <span class="contact__detail-icon">${icon("clock")}</span>
      <span>${hours.join(" — ")}</span>
    </li>
  `;
}

function renderSocial(socialLinks) {
  const container = document.querySelector("[data-footer-social]");
  if (!container || !Array.isArray(socialLinks)) return;
  const icons = { ...SOCIAL_ICONS, ...EXTRA_SOCIAL_ICONS };
  container.innerHTML = socialLinks
    .map(
      (link) => `
      <a href="${link.url}" class="contact__social-link" aria-label="Watt Security sur ${link.name}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${icons[link.name] ?? ""}</svg>
      </a>`
    )
    .join("");
}

/** Copyright year is computed (not read from data/footer.json) so it never
    goes stale — see this milestone's report for the reasoning. */
function renderBottomBar(legal, companyName) {
  const copyrightEl = document.querySelector("[data-footer-copyright]");
  const legalList = document.querySelector("[data-footer-legal]");
  const year = new Date().getFullYear();

  if (copyrightEl) {
    copyrightEl.textContent = `© ${year} ${companyName}. Tous droits réservés.`;
  }

  if (legalList && Array.isArray(legal?.links)) {
    legalList.innerHTML = legal.links
      .map((link) => `<li><a href="${link.href}" class="footer__legal-link">${link.label}</a></li>`)
      .join("");
  }
}
