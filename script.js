document.addEventListener('DOMContentLoaded', () => {
    // --- ANIMATIONS AU SCROLL (VOTRE CODE) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.hero-text, .hero-image, .skill-tag, .formation-block, .card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);

    // --- LOGIQUE POP-UP (CORRIGÉE) ---
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

        // Fermer en cliquant sur le fond flouté
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});
