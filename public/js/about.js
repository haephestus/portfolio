/*
 * about.html — holder morphs into fixed topbar on scroll and hover
 */
const holder = document.querySelector(".holder");
const profile = document.querySelector(".profile");

if (holder && profile) {
  const profileNav = document.createElement("div");
  profileNav.className = "profile-nav";

  const siteLinks = [
    { label: "Home", url: "/" },
    { label: "Art", url: "/html/art.html" },
    { label: "Blog", url: "/html/blog.html" },
    { label: "Projects", url: "/projects" },
  ];

  siteLinks.forEach(({ label, url }) => {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    profileNav.appendChild(a);
  });

  profile.appendChild(profileNav);

  // Spacer reserves the holder's space when it goes fixed
  const spacer = document.createElement("div");
  spacer.className = "holder-spacer";
  spacer.style.height = "0px";
  spacer.style.width = "100%";
  holder.after(spacer);

  const TRIGGER = 200;
  let isSticky = false;

  function setSticky(sticky) {
    if (sticky === isSticky) return;
    isSticky = sticky;
    if (sticky) {
      spacer.style.height = holder.offsetHeight + "px";
      holder.classList.add("sticky");
    } else {
      holder.classList.remove("sticky");
      spacer.style.height = "0px";
    }
  }

  profile.addEventListener("mouseenter", () => setSticky(true));
  profile.addEventListener("mouseleave", () => {
    if (window.scrollY <= TRIGGER) setSticky(false);
  });

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      if (scrollY > TRIGGER) {
        setSticky(true);
      } else if (!profile.matches(":hover")) {
        setSticky(false);
      }
      const scrollHint = document.querySelector(".scroll-hint");
      if (scrollHint) {
        scrollHint.style.opacity = scrollY > 50 ? "0" : "1";
      }
    });
  });
}

/*
 * about.html — IntersectionObserver for timeline items
 */
const tlItems = document.querySelectorAll(".tl-itm");
if (tlItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0, rootMargin: "0px 0px -50px 0px" },
  );
  tlItems.forEach((item) => observer.observe(item));
}
