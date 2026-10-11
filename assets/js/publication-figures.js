(() => {
  const dialog = document.getElementById("publication-figure-dialog");
  if (!dialog) return;
  const image = dialog.querySelector(".publication-figure-image");
  const caption = dialog.querySelector("#publication-figure-caption");
  const heading = dialog.querySelector("#publication-figure-heading");

  document.querySelectorAll(".publication-preview-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const source = button.querySelector("img");
      image.src = source.currentSrc || source.src;
      image.alt = source.alt;
      heading.textContent = button.querySelector(".publication-preview-label span").textContent;
      caption.textContent = button.dataset.figureCaption;
      dialog.showModal();
    });
  });
  dialog.querySelector(".publication-figure-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();
