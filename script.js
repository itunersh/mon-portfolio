document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ANIMATIONS D'APPARITION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.hero-text, .hero-image, .skill-tag, .formation-block, .card, .faq-item');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);

    // --- 2. LOGIQUE FAQ ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            
            // On bascule la classe active
            item.classList.toggle('active');
            
            // On referme les autres (optionnel, pour faire propre)
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
        });
    });

    // --- 3. LOGIQUE POP-UP CONTACT ---
    const contactBtn = document.querySelector('.btn-nav');
    const popup = document.getElementById('contact-popup');
    const closeBtn = document.querySelector('.close-btn');

    if (contactBtn && popup) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});
