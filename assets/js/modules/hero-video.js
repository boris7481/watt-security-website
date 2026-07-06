/* ==========================================================================
   Hero Video — progressively upgrades the Hero's static poster <img>
   (assets/images/hero/hero-poster.webp, Milestone 23) into an autoplaying
   background <video> once real footage exists at the conventional path
   below (Milestone 24 — specifications/HOME_PAGE_SPECIFICATION.md §1).

   Until a video file is actually dropped in assets/videos/hero/ — and on
   any browser/network failure — the poster <img> is left completely
   untouched. No HTML change is ever needed on either side of that
   transition: index.html always just authors the poster <img>; this
   module is the only thing that knows how to upgrade it.

   Existence is checked with a HEAD request *before* ever creating a
   <video>/<source> element: a <source> pointing at a file that doesn't
   exist yet triggers the browser's own "Failed to load resource" console
   message and a visible 404 in the Network tab — exactly what this
   milestone must avoid while the real files aren't there yet. A HEAD
   request's 404 (if any) is just a normally-resolved fetch() response
   that this module checks and silently discards — no console noise, no
   broken <video> element ever appears in the DOM.
   ========================================================================== */

const SOURCES = [
  { src: "assets/videos/hero/hero-loop.webm", type: "video/webm" },
  { src: "assets/videos/hero/hero-loop.mp4", type: "video/mp4" }
];

async function exists(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export async function initHeroVideo() {
  const poster = document.querySelector(".hero__media-img");
  if (!poster) return;

  const checks = await Promise.all(SOURCES.map((source) => exists(source.src)));
  const available = SOURCES.filter((_, index) => checks[index]);

  if (available.length === 0) return; // No video yet — the poster <img> stays exactly as it is.

  const video = document.createElement("video");
  video.className = poster.className;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = poster.getAttribute("src");
  // Setting the IDL property alone doesn't reliably reflect the `muted`
  // content attribute in every browser, and some autoplay policies check
  // the attribute itself — set both so autoplay is never silently blocked.
  video.muted = true;
  video.setAttribute("muted", "");

  available.forEach(({ src, type }) => {
    const sourceEl = document.createElement("source");
    sourceEl.src = src;
    sourceEl.type = type;
    video.appendChild(sourceEl);
  });

  poster.replaceWith(video);
}
