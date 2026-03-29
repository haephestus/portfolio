/*
 * art.html — timeline accordion
 */
const tlClickItems = document.querySelectorAll(".tl-item");
tlClickItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    tlClickItems.forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

// Active nav link highlight
document.querySelectorAll(".nav-items a").forEach((link) => {
  if (
    link.textContent
      .toLowerCase()
      .includes(location.pathname.split("/").pop().replace(".html", ""))
  )
    link.classList.add("active");
});
