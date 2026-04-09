document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    const slides = document.querySelector('.hero-slides');
    const dots = document.querySelectorAll('.hero-dot');
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    let current = 0;
    let autoplay;

    const goTo = (idx) => {
        current = (idx + totalSlides) % totalSlides;
        if (slides) slides.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    document.querySelector('.hero-prev')?.addEventListener('click', () => {
        clearInterval(autoplay);
        goTo(current - 1);
        startAutoplay();
    });

    document.querySelector('.hero-next')?.addEventListener('click', () => {
        clearInterval(autoplay);
        goTo(current + 1);
        startAutoplay();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(autoplay);
            goTo(i);
            startAutoplay();
        });
    });

    const startAutoplay = () => {
        autoplay = setInterval(() => goTo(current + 1), 5000);
    };

    if (totalSlides > 0) startAutoplay();

    const messages = document.querySelectorAll('.message');
    messages.forEach(msg => {
        setTimeout(() => {
            msg.style.transition = 'opacity 0.5s';
            msg.style.opacity = '0';
            setTimeout(() => msg.remove(), 500);
        }, 4000);
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.featured-card, .about-feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
