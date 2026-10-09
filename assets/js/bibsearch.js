document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  if (!input) return;
  const entries = Array.from(document.querySelectorAll(".bibliography > li"));
  const status = document.createElement("p");
  status.className = "publication-status-note";
  status.setAttribute("role", "status");
  input.after(status);

  const filter = () => {
    const term = input.value.trim().toLocaleLowerCase();
    let visible = 0;
    entries.forEach((entry) => {
      const text = Array.from(entry.querySelectorAll(".title, .author, .periodical"))
        .map((part) => {
          const copy = part.cloneNode(true);
          copy.querySelectorAll(".doi").forEach((doi) => doi.remove());
          return copy.textContent;
        }).join(" ").toLocaleLowerCase();
      const matches = text.includes(term);
      entry.classList.toggle("unloaded", !matches);
      if (matches) visible++;
    });
    document.querySelectorAll("ol.bibliography").forEach((list) => {
      const empty = !list.querySelector("li:not(.unloaded)");
      list.classList.toggle("unloaded", empty);
      const heading = list.previousElementSibling;
      if (heading && heading.matches("h2.bibliography")) heading.classList.toggle("unloaded", empty);
    });
    document.querySelectorAll(".publication-group").forEach((group) => {
      group.classList.toggle("unloaded", !group.querySelector("li:not(.unloaded)"));
    });
    status.textContent = term ? `${visible} of ${entries.length} publications match your search.` : "";
  };
  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(filter, 150);
  });
  // Paper ID fragments navigate to a publication without activating the filter.
  const readSearch = () => {
    if (window.location.hash.startsWith("#search=")) {
      try { input.value = decodeURIComponent(window.location.hash.slice(8)); }
      catch { input.value = ""; }
      filter();
    }
  };
  window.addEventListener("hashchange", readSearch);
  readSearch();
});
