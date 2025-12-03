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
    
    // Initialize hamburger menu functionality
    initHamburgerMenu();
});

// Hamburger menu functionality
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Form submission for contact page
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        let errors = [];
        
        if (!name) {
            errors.push('Name is required.');
        }
        
        if (!email) {
            errors.push('Email is required.');
        } else {
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.push('Please enter a valid email address.');
            }
        }
        
        if (!subject) {
            errors.push('Subject is required.');
        }
        
        if (!message) {
            errors.push('Message is required.');
        } else if (message.length < 10) {
            errors.push('Message should be at least 10 characters long.');
        }
        
        // Display errors if any
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }
        
        // In a real implementation, you would send this data to a server
        // For now, we'll just show a success message and reset the form
        console.log({name, email, subject, message});
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
        
        // Send email using a service like EmailJS (in a real implementation)
        // sendEmail(name, email, subject, message);
    });
}

// Function to send email using EmailJS (example implementation)
function sendEmail(name, email, subject, message) {
    // This is a placeholder for actual email sending functionality
    // In a real implementation, you would use EmailJS, Formspree, or similar service
    console.log('Sending email:', {name, email, subject, message});
    
    // Example EmailJS implementation (uncomment and configure with your EmailJS details):
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
    });
    */
}

// Back to Top Button functionality
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}