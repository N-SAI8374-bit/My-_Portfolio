const header = document.querySelector(".header");
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const topBtn = document.querySelector(".back-top");

document.getElementById("year").textContent = new Date().getFullYear();

/* Mobile menu */
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* Close mobile menu after clicking a navigation link */
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

/* Header and Back-to-top button */
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  topBtn.classList.toggle("show", window.scrollY > 500);
});

/* Back to top */
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* Active navigation item */
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.remove("active"));

        const active = links.find(
          (link) => link.getAttribute("href") === `#${entry.target.id}`,
        );

        if (active) {
          active.classList.add("active");
        }
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
  },
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

/* Scroll reveal animation */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
