<template>
  <div id="legacy-host"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(async () => {
  const container = document.getElementById("legacy-host");
  if (!container) return;

  // Fetch original static homepage HTML
  const res = await fetch("/home/index.html", { cache: "no-cache" });
  const html = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Inject body content
  container.innerHTML = doc.body.innerHTML;

  // Apply original body class for styling
  document.body.classList.add("dropify");

  // Ensure required styles are present
  const ensureLink = (href) => {
    if (!href) return;
    if ([...document.styleSheets].some((s) => s.href && s.href.includes(href)))
      return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  };

  // Local CSS and FA CDN
  ensureLink("/home/style.css?v=1.1");
  const faLink = doc.querySelector('link[href*="font-awesome"]');
  if (faLink) ensureLink(faLink.getAttribute("href"));

  // Load scripts sequentially to preserve behavior, avoid reloading
  const loaded = (window.__legacyLoadedScripts ||= new Set());
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      if (loaded.has(src)) return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = (e) => reject(e);
      document.body.appendChild(s);
      loaded.add(src);
    });

  const cdnScripts = Array.from(doc.querySelectorAll("script[src]"))
    .map((s) => s.getAttribute("src"))
    .filter((src) => src && (src.includes("jquery") || src.includes("anime")));

  const localScripts = [
    "/home/js/TweenMax.min.js",
    "/home/js/imagesLoaded.pkgd.min.js",
    "/home/js/pixi.min.js",
    "/home/js/pixi-filters.min.js",
    // '/home/js/jquery.ripples-min.js', // intentionally disabled in original
    "/home/js/grained.min.js",
    "/home/js/slider-source.js",
    "/home/js/tilt.jquery.min.js",
    "/home/js/script.js",
    "/home/js/cookie.js",
  ];

  for (const src of [...cdnScripts, ...localScripts]) {
    // eslint-disable-next-line no-await-in-loop
    await loadScript(src);
  }
});

onUnmounted(() => {
  // Clean up body class when navigating away in VitePress
  document.body.classList.remove("dropify");
  const host = document.getElementById("legacy-host");
  if (host) host.innerHTML = "";
});
</script>

<style>
#legacy-host {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}
.VPDoc,
.VPContent,
.VPApp,
.VPNav,
.VPNavBar {
  background: transparent !important;
}
</style>
