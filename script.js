// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact button functionality
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Simple alert for demonstration
            alert('Course Information:\n\n' +
                  'Course: WDD 131 - Web Design and Development\n' +
                  'Focus: HTML, CSS, and JavaScript fundamentals\n' +
                  'Duration: Full semester\n\n' +
                  'This is a demo page for the course repository.');
        });
    }
    
    // Add fade-in animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Create intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Apply initial styles and observe cards
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Add current year to footer
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace('2024', currentYear);
    }
    
    console.log('WDD 131 page loaded successfully!');
});