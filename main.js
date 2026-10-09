// Portfolio interactions: theme, nav, motion, form validation

// ---------- Theme (dark-first) ----------
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Dark is the default; only an explicit saved "light" preference switches it.
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "🌙"; // clicking will switch to dark
} else {
  themeToggle.textContent = "☀️"; // clicking will switch to light
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});

// ---------- Hamburger menu ----------
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger-menu");
  const navContainer = document.querySelector(".nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navContainer.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    const closeMenu = () => {
      navContainer.classList.remove("active");
      hamburger.classList.remove("active");
    };

    document.querySelectorAll(".nav-link, .nav-contact-btn").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navContainer.contains(e.target)) {
        closeMenu();
      }
    });
  }
}

// ---------- Scroll motion (GSAP, progressively enhanced) ----------
function initMotion() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const hasGsap =
    typeof window.gsap !== "undefined" &&
    typeof window.ScrollTrigger !== "undefined";

  if (!hasGsap || reducedMotion) return; // content stays fully visible

  gsap.registerPlugin(ScrollTrigger);

  // Hero intro: staggered rise
  gsap.from("[data-hero]", {
    y: 42,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
  });

  // Sections and cards: reveal as they enter the viewport
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 36,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  // Subtle parallax drift on work visuals
  gsap.utils.toArray(".work-visual").forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: 4 },
      {
        yPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });
}

// ---------- Back to top ----------
const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("show", window.scrollY > 400);
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- Contact form ----------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.setAttribute("action", "https://formspree.io/f/myzqvyqq");
  contactForm.setAttribute("method", "POST");

  contactForm.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => clearError(input));
  });

  contactForm.addEventListener("submit", function (e) {
    let isValid = true;
    ["name", "email", "subject", "message"].forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (!validateField(field)) isValid = false;
    });
    if (!isValid) e.preventDefault();
  });
}

function validateField(field) {
  const value = field.value.trim();
  const errorSpan = document.getElementById(field.id + "-error");

  let isValid = true;
  let errorMessage = "";

  if (!value) {
    isValid = false;
    errorMessage = "This field is required";
  } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    isValid = false;
    errorMessage = "Please enter a valid email address";
  }

  if (errorSpan) {
    if (isValid) {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
      field.setAttribute("aria-invalid", "false");
    } else {
      errorSpan.textContent = errorMessage;
      errorSpan.style.display = "block";
      field.setAttribute("aria-invalid", "true");
    }
  }

  return isValid;
}

function clearError(field) {
  const errorSpan = document.getElementById(field.id + "-error");
  if (errorSpan && field.value.trim()) {
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
    field.setAttribute("aria-invalid", "false");
  }
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  initHamburgerMenu();
  initMotion();
});
