document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.nav-contain');

    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
    });

    document.addEventListener('click', (e) => {
        const isClickInsideNav = navbar.contains(e.target);
        const isClickOnToggle = navToggle.contains(e.target); // ✅ Tambahkan ini!

        if (!isClickInsideNav && !isClickOnToggle && navbar.classList.contains('nav-open')) {
            navbar.classList.remove('nav-open');
        }
    });
    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('nav-open');
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
        });
    });
});