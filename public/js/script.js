// Let the browser handle scroll restoration natively
if ("scrollRestoration" in history) {
  history.scrollRestoration = "auto";
}

/*
 * index.html — clickable boxes
 */
document.querySelectorAll("#about, #art, #projects, #blog").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.dataset.url) window.location.href = el.dataset.url;
  });
});

// Page-specific imports — only load if the relevant elements exist
if (document.querySelector(".holder")) {
  import("./about.js");
}
if (document.querySelector(".tl-item")) {
  import("./art.js");
}
if (document.querySelector("#item-list")) {
  import("./blog.js");
}
if (document.querySelector(".projects-grid")) {
  import("./projects.js");
}
