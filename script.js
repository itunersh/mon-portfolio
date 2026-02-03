document.addEventListener('DOMContentLoaded', () => {
    // Observer pour détecter quand les éléments sont visibles à l'écran
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    // Cibler les éléments principaux
    const elements = document.querySelectorAll('.hero-text, .hero-image, .skill-tag, .formation-block, .card');
    
    // Appliquer l'état initial (invisible)
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Style dynamique pour l'état visible
    const style = document.createElement('style');
    style.innerHTML = `
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);
});