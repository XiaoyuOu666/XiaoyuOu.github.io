(() => {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const storageKey = "xiaoyu-sidebar-navigation";
  let nav, highlight, content, previous, initialized = false;

  function placeHighlight() {
    const link = nav.querySelector('[aria-current="page"]');
    if (!link) return null;
    const bounds = link.getBoundingClientRect();
    const origin = nav.getBoundingClientRect();
    const box = { x: bounds.left - origin.left, y: bounds.top - origin.top, width: bounds.width, height: bounds.height };
    highlight.style.width = `${box.width}px`;
    highlight.style.height = `${box.height}px`;
    highlight.style.transform = `translate(${box.x}px, ${box.y}px)`;
    return box;
  }

  function initialize() {
    if (initialized) return;
    nav = document.getElementById("navbar");
    highlight = nav?.querySelector(".nav-highlight");
    content = document.getElementById("main-content");
    if (!highlight || !nav.querySelector('[aria-current="page"]')) return;
    initialized = true;
    placeHighlight();
    nav.classList.add("nav-motion-enabled");
    new ResizeObserver(placeHighlight).observe(nav);
    try {
      previous = JSON.parse(sessionStorage.getItem(storageKey));
      sessionStorage.removeItem(storageKey);
    } catch { /* Navigation also works when browser storage is unavailable. */ }
    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a.nav-link");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || reducedMotion.matches) return;
      const target = new URL(link.href);
      if (target.origin !== location.origin || target.pathname === location.pathname) return;
      try {
        sessionStorage.setItem(storageKey, JSON.stringify({ target: target.href, time: Date.now(), box: placeHighlight(), viewport: innerWidth }));
      } catch { /* Native links remain available without storage. */ }
    });
  }

  function reveal(transition) {
    initialize();
    if (!initialized) return;
    const target = placeHighlight();
    if (reducedMotion.matches) { transition?.skipTransition(); return; }
    // Native cross-document transitions keep the sidebar stable between real pages.
    if (transition || !previous || previous.target !== location.href || Date.now() - previous.time > 10000) return;
    if (previous.viewport === innerWidth && previous.box && target) {
      const from = previous.box;
      highlight.animate([
        { transform: `translate(${from.x}px, ${from.y}px)`, width: `${from.width}px`, height: `${from.height}px` },
        { transform: highlight.style.transform, width: highlight.style.width, height: highlight.style.height }
      ], { duration: 220, easing: "cubic-bezier(.22,.61,.36,1)" });
    }
    content?.animate([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 360, easing: "cubic-bezier(.22,.61,.36,1)" });
    previous = null;
  }

  window.addEventListener("pagereveal", (event) => reveal(event.viewTransition));
  document.addEventListener("DOMContentLoaded", () => {
    initialize();
    if (!("onpagereveal" in window)) requestAnimationFrame(() => reveal(null));
  });
  window.addEventListener("pageshow", () => { if (initialized) placeHighlight(); });
})();
