// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidad del Menú Hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Abrir/cerrar menú al hacer click en el botón
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer click en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Expansión de Casos de Estudio (Cards)
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Encuentra el contenedor de detalles asociado a este botón
            const card = e.target.closest('.project-card');
            const details = card.querySelector('.project-details');
            
            // Alterna la clase 'show'
            details.classList.toggle('show');
            
            // Cambia el texto del botón dependiendo del estado
            if (details.classList.contains('show')) {
                e.target.innerHTML = 'Ocultar detalles &uarr;';
            } else {
                e.target.innerHTML = 'Ver caso de estudio &rarr;';
            }
        });
    });

    // 3. Animación Fade-in al hacer Scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar una vez que ya apareció
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

});