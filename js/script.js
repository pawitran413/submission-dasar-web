// JavaScript untuk Navbar
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.nav-contain');
    const lines = document.querySelectorAll('.line, .linee, .lineee');
    const navLinks = document.querySelectorAll('.nav-link');
    const main = document.querySelector('.main');

    // Fungsi untuk menutup navbar
    const closeNav = () => {
        navbar.classList.remove('nav-open');
        main.classList.remove('nav-open');
        lines.forEach(line => line.classList.remove('nav-open'));
    };

    // Toggle navbar saat tombol toggle diklik
    if (navToggle && navbar && lines.length > 0) {
        navToggle.addEventListener('click', () => {
            navbar.classList.toggle('nav-open');
            main.classList.toggle('nav-open');
            lines.forEach(line => line.classList.toggle('nav-open'));
        });
    }

    // Tutup navbar saat klik di luar navbar atau tombol toggle
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navbar.contains(e.target);
        const isClickOnToggle = navToggle.contains(e.target);

        if (!isClickInsideNav && !isClickOnToggle && navbar.classList.contains('nav-open')) {
            closeNav();
        }
    });

    // Tutup navbar saat .nav-link diklik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
        });
    });
});

// ANIMASI SAAT SCROLL
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});