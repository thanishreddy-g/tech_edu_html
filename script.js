// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top';
document.body.appendChild(scrollBtn);

// Add styles for scroll button
const style = document.createElement('style');
style.textContent = `
    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 20px;
        transition: opacity 0.3s;
        z-index: 1000;
    }
    .scroll-top:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Show/hide scroll button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation to course cards on scroll
const observeElements = (elements, className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .course-card, .feature-card, .testimonial-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s, transform 0.6s;
    }
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyle);

// Apply animations
document.addEventListener('DOMContentLoaded', () => {
    observeElements(document.querySelectorAll('.course-card'), 'fade-in');
    observeElements(document.querySelectorAll('.feature-card'), 'fade-in');
    observeElements(document.querySelectorAll('.testimonial-card'), 'fade-in');
}); 