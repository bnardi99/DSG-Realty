/* =========================
   MOBILE NAV TOGGLE
========================= */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.querySelector(".hamburger");
  const body = document.body;

  const isOpen = nav.classList.toggle("open");

  burger.classList.toggle("active");
  body.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", isOpen);
}

/* =========================
   CLOSE MOBILE NAV ON LINK CLICK
========================= */
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    document.querySelector(".hamburger").classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "";
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => link.classList.remove("active"));

  if (current) {
    const activeLink = document.querySelector(
      `.nav-links a[href="#${current}"]`
    );
    if (activeLink) activeLink.classList.add("active");
  }

  /* Force CONTACT active at bottom */
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[navLinks.length - 1].classList.add("active");
  }
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

/* =========================
   NAVBAR SCROLL STATE
========================= */
const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("on-hero");
  } else {
    navbar.classList.add("on-hero");
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("load", handleNavbarScroll);

/* =========================
   FADE-IN OBSERVER
========================= */
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

/* =========================
   HEADING FADE-IN OBSERVER
========================= */
const headingElements = document.querySelectorAll(".fade-heading");

const headingObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        headingObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

headingElements.forEach((el) => headingObserver.observe(el));

/* =========================
   BACK TO TOP BUTTON
========================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =========================
   STAR CLICK ANIMATION
========================= */
document.querySelectorAll(".stars").forEach((stars) => {
  stars.addEventListener("click", () => {
    stars.classList.remove("animate");
    void stars.offsetWidth; // force reflow
    stars.classList.add("animate");
  });
});
