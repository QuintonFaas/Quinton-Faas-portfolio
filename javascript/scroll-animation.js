const scrollObserverOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
};

const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
};

const scrollObserver = new IntersectionObserver(handleScrollAnimation, scrollObserverOptions);

function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
        scrollObserver.observe(section);
    });
    
    const aboutDetails = document.querySelector('.about-details');
    if (aboutDetails) {
        aboutDetails.classList.add('stagger-children');
        scrollObserver.observe(aboutDetails);
    }
    
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('scroll-animate-left');
        scrollObserver.observe(aboutText);
    }
    
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('scroll-animate-left');
        heroText.classList.add('animated');
        scrollObserver.observe(heroText);
    }
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        if (item.classList.contains('left')) {
            item.classList.add('scroll-animate-left');
        } else {
            item.classList.add('scroll-animate-right');
        }
        scrollObserver.observe(item);
    });
    
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skillsContainer.classList.add('stagger-children');
        scrollObserver.observe(skillsContainer);
    }
    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.classList.add('scroll-animate-scale');
        scrollObserver.observe(item);
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        scrollObserver.observe(card);
    });
    
    const chatbotSection = document.querySelector('.chatbot-section');
    if (chatbotSection) {
        chatbotSection.classList.add('scroll-animate');
        scrollObserver.observe(chatbotSection);
    }
    
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.add('scroll-animate');
        scrollObserver.observe(footer);
    }
    
    const detailItems = document.querySelectorAll('.detail-item');
    detailItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('scroll-animate');
        scrollObserver.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
});

function refreshScrollAnimations() {
    scrollObserver.disconnect();
    initScrollAnimations();
}
