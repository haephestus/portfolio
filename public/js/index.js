/*
 * index.html — clickable boxes
 */
document.querySelectorAll("#about, #art, #projects, #blog").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.dataset.url) window.location.href = el.dataset.url;
  });
});
