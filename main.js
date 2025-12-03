// Minimalist JavaScript for seanoshea-inspired design

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️"; // Changed to sun for dark mode (since it will toggle to light)
} else {
  themeToggle.textContent = "🌙"; // Changed to moon for light mode (since it will toggle to dark)
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️"; // Sun icon when in dark mode
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙"; // Moon icon when in light mode
    localStorage.setItem("theme", "light");
  }
});

// Simple fade-in animation for content
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".section, .hero");
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("fade-in");
    }, 150 * index);
  });

  // Initialize hamburger menu
  initHamburgerMenu();
});

// Hamburger menu functionality
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger-menu");
  const navContainer = document.querySelector(".nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navContainer.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navContainer.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

    // Close menu when clicking on contact button
    const contactBtn = document.querySelector(".nav-contact-btn");
    if (contactBtn) {
      contactBtn.addEventListener("click", () => {
        navContainer.classList.remove("active");
        hamburger.classList.remove("active");
      });
    }

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navContainer.contains(e.target)) {
        navContainer.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }
}

// Form submission for contact page
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  // Use FormSubmit for backend email handling
  contactForm.setAttribute("action", "https://formspree.io/f/myzqvyqq");
  contactForm.setAttribute("method", "POST");

  // Add real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
    });

    input.addEventListener("input", () => {
      clearError(input);
    });
  });

  contactForm.addEventListener("submit", function (e) {
    const fields = ["name", "email", "subject", "message"];
    let isValid = true;

    // Validate all fields
    fields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
}

// Field validation helper
function validateField(field) {
  const value = field.value.trim();
  const errorSpan = document.getElementById(field.id + "-error");

  let isValid = true;
  let errorMessage = "";

  if (!value) {
    isValid = false;
    errorMessage = "This field is required";
  } else if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address";
    }
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

// Clear error message on input
function clearError(field) {
  const errorSpan = document.getElementById(field.id + "-error");
  if (errorSpan && field.value.trim()) {
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
    field.setAttribute("aria-invalid", "false");
  }
}

// Back to Top Button functionality
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
