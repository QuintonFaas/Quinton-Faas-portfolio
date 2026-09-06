// ========== ENHANCED SCROLL ANIMATIONS ==========

// Configuration for Intersection Observer
const scrollObserverOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -50px 0px', // trigger slightly before element enters
    threshold: 0.15 // trigger when 15% of element is visible
};

// Callback function to add animation class
const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animated class to trigger CSS transition
            entry.target.classList.add('animated');
            
            // Optional: If you want to keep observing for reverse animation (when scrolling up out of view)
            // Uncomment below if you want animation to replay when scrolling back
            // observer.unobserve(entry.target);
        } else {
            // Optional: Remove class when out of view to replay animation when scrolling back up
            // Comment out if you want animation only once
            // entry.target.classList.remove('animated');
        }
    });
};

// Create the observer
const scrollObserver = new IntersectionObserver(handleScrollAnimation, scrollObserverOptions);

// Function to add animation classes to elements
function initScrollAnimations() {
    // Add animation class to sections (main containers)
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
        scrollObserver.observe(section);
    });
    
    // Animate about details with staggered effect
    const aboutDetails = document.querySelector('.about-details');
    if (aboutDetails) {
        aboutDetails.classList.add('stagger-children');
        scrollObserver.observe(aboutDetails);
    }
    
    // Animate about text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('scroll-animate-left');
        scrollObserver.observe(aboutText);
    }
    
    // Animate hero text while keeping it visible initially
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('scroll-animate-left');
        // Hero is already visible, so trigger immediately
        heroText.classList.add('animated');
        scrollObserver.observe(heroText);
    }
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        // Add alternating animation directions for timeline
        if (item.classList.contains('left')) {
            item.classList.add('scroll-animate-left');
        } else {
            item.classList.add('scroll-animate-right');
        }
        scrollObserver.observe(item);
    });
    
    // Animate skill categories with stagger
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skillsContainer.classList.add('stagger-children');
        scrollObserver.observe(skillsContainer);
    }
    
    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.classList.add('scroll-animate-scale');
        scrollObserver.observe(item);
    });
    
    // Animate chatbot section
    const chatbotSection = document.querySelector('.chatbot-section');
    if (chatbotSection) {
        chatbotSection.classList.add('scroll-animate');
        scrollObserver.observe(chatbotSection);
    }
    
    // Animate footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.add('scroll-animate');
        scrollObserver.observe(footer);
    }
    
    // Animate any detail items
    const detailItems = document.querySelectorAll('.detail-item');
    detailItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('scroll-animate');
        scrollObserver.observe(item);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a tiny bit for dynamic content (timeline, skills) to be populated
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
});

// If you have dynamically added content after (like skills from JS), re-run after they're populated
// This is already covered because your skills population happens before this script runs.
// But if you want to be safe, you can call initScrollAnimations again after populating.
// We'll modify your existing populate functions to re-trigger animations.

// Optional: Re-observe after dynamic content loads
function refreshScrollAnimations() {
    // Disconnect old observer
    scrollObserver.disconnect();
    // Re-run initialization
    initScrollAnimations();
}

// Call this after your timeline and skills are populated (add at the end of your populate code)
// Add this line after your skills population loop:
// refreshScrollAnimations();

// But to avoid duplication, we'll modify your existing populate code to include animation refresh