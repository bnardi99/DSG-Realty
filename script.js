
// Hamburger Menu Toggle Function
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.querySelector(".hamburger");
  const body = document.body;

  const isOpen = nav.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", isOpen);
}

// Apply event listener for hamburger click
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
  hamburger.addEventListener("click", toggleMenu);
}

// Handle scroll behavior for the navbar
const navbar = document.querySelector(".navbar");
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    if (navbar) navbar.classList.add("scrolled");
    if (navbar) navbar.classList.remove("on-hero");
  } else {
    if (navbar) navbar.classList.add("on-hero");
    if (navbar) navbar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("load", handleNavbarScroll);

// Intersection Observer for fade-in effect (for Testimonial section)
const fadeElements = document.querySelectorAll(".fade-in:not(.fade-heading)");
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

// Intersection Observer for heading fade-in (for Testimonial heading)
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

// Star-click animation (Testimonial section stars)
document.querySelectorAll(".stars").forEach((stars) => {
  stars.addEventListener("click", () => {
    stars.classList.remove("animate");
    void stars.offsetWidth; // force reflow
    stars.classList.add("animate");
  });
});

// Define the sections for active nav link highlighting
const sections = document.querySelectorAll("section[id]");
const footer = document.querySelector("footer");

// Intersection Observer for active nav link highlighting
const navLinks = document.querySelectorAll('.nav-links a');

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

    // Remove 'active' class from all nav links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the correct nav link
    if (current) {
        const activeLink = document.querySelector(`.nav-links a[href="#${current}"]`);
        if (activeLink) activeLink.classList.add("active");
    }
}

// Adding scroll listener to call setActiveLink on scroll and load
window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

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

    // Check if footer is in view
    if (footer && window.scrollY + window.innerHeight >= document.body.offsetHeight - 5) {
        current = "contact";  // Force "Contact Me" link to be active
    }

    // Remove 'active' class from all nav links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the correct nav link
    if (current) {
        const activeLink = document.querySelector(`.nav-links a[href="#${current}"]`);
        if (activeLink) activeLink.classList.add("active");
    }
}
