/* ==========================================================================
   Page Paths — shared helpers so data-driven modules (contact-info.js,
   footer.js) work correctly whether the current document is index.html
   (site root) or one of the pages/*.html pages added in Milestone 21, one
   directory deeper.

   Two distinct problems this solves:
   1. fetch("data/contact.json") resolves relative to the current page's
      own URL, not the JS module's location — so the exact same fetch call
      needs a "../" prefix when running from pages/*.html.
   2. data/footer.json's hrefs ("#services", "pages/legal-notice.html", …)
      are authored relative to index.html, since that's the only page that
      existed when that file was written — they need the same adjustment.

   Kept as one small shared module (rather than duplicating this detection
   in both contact-info.js and footer.js) so there is exactly one place to
   update if the site's folder depth ever changes.
   ========================================================================== */

const IS_INNER_PAGE = /\/pages\//.test(window.location.pathname);

/** Adjusts a data/*.json path so it resolves correctly from any page depth. */
export function resolveDataUrl(path) {
  return IS_INNER_PAGE ? `../${path}` : path;
}

/** Adjusts an index.html-relative href (from data/footer.json) so it
    resolves correctly from any page depth. */
export function resolveHref(href) {
  if (!IS_INNER_PAGE || /^https?:\/\//.test(href)) return href;
  if (href === "#") return "../index.html";
  if (href.startsWith("#")) return `../index.html${href}`;
  if (href.startsWith("pages/")) return href.slice("pages/".length);
  return href;
}
