/*
 * blog.html — carousel
 */
document.querySelectorAll("#item-list .item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll("#item-list .item")
      .forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
  });
});
