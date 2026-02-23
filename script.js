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

    // 3. LOGIQUE DE LA POP-UP CONTACT
    const contactBtn = document.querySelector('.btn-nav');
    
    // Création de l'élément HTML de la pop-up
    const popupHTML = `
        <div class="popup-overlay" id="contactPopup">
            <div class="popup-content">
                <h2>Me contacter</h2>
                <p>Remi.Scordilis@etu.univ-grenoble-alpes.fr</p>
                <button class="close-popup">Fermer</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const popup = document.getElementById('contactPopup');
    const closeBtn = document.querySelector('.close-popup');

    // Ouvrir la pop-up au clic
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        popup.style.display = 'flex';
    });

    // Fermer la pop-up
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Fermer en cliquant à côté de la boîte
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

});
