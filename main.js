// Minimalist JavaScript for seanoshea-inspired design

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';  // Changed to sun for dark mode (since it will toggle to light)
} else {
    themeToggle.textContent = '🌙';  // Changed to moon for light mode (since it will toggle to dark)
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';  // Sun icon when in dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';  // Moon icon when in light mode
        localStorage.setItem('theme', 'light');
    }
});

// Simple fade-in animation for content
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.section, .hero');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, 150 * index);
    });
});

// Form submission for contact page
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // In a real implementation, you would send this data to a server
        console.log({name, email, subject, message});
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}