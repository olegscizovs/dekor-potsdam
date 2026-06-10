/**
 * Dekor Potsdam - Main Application Logic
 * Focus: Modularity, Accessibility, and Strict DOM Handling.
 */

// Safe i18n Language Update
function setLanguage(langCode) {
    if (typeof translations === 'undefined' || !translations[langCode]) return;

    const dictionary = translations[langCode];
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key]) {
            // SECURE EXECUTION: Strictly use textContent to neutralize potential HTML injection
            element.textContent = dictionary[key];
        }
    });

    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === langCode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', langCode);
}

// Lightbox Modal Component
function initLightbox(galleryImages) {
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentLightboxIndex = 0;

    if (lightboxModal && lightboxImg && lightboxClose && galleryImages && galleryImages.length > 0) {
        const updateLightboxImage = (index) => {
            if (index < 0 || index >= galleryImages.length) return;
            lightboxImg.setAttribute('src', galleryImages[index]);
            lightboxImg.setAttribute('alt', 'Gallery Image');
        };

        const openLightbox = (index) => {
            currentLightboxIndex = index;
            updateLightboxImage(index);
            lightboxModal.removeAttribute('hidden');
            lightboxClose.focus();
        };

        document.addEventListener('openLightbox', (e) => {
            openLightbox(e.detail.index);
        });

        const closeLightbox = () => {
            lightboxModal.setAttribute('hidden', '');
            lightboxImg.setAttribute('src', ''); // Clear source
        };

        const nextLightboxImage = () => {
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
            updateLightboxImage(currentLightboxIndex);
        };

        const prevLightboxImage = () => {
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightboxImage(currentLightboxIndex);
        };

        lightboxClose.addEventListener('click', closeLightbox);

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                prevLightboxImage();
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                nextLightboxImage();
            });
        }

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightboxModal.hasAttribute('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextLightboxImage();
                if (e.key === 'ArrowLeft') prevLightboxImage();
            }
        });
    }
}

// Main DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Switcher initialization
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const langCode = btn.getAttribute('data-lang');
            setLanguage(langCode);
        });

        // Keyboard support (Space/Enter)
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const langCode = btn.getAttribute('data-lang');
                setLanguage(langCode);
            }
        });
    });

    // 2. Burger Menu Setup
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (burgerMenu && mobileNav) {
        const toggleMenu = () => {
            const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
            burgerMenu.setAttribute('aria-expanded', !isExpanded);
            burgerMenu.classList.toggle('is-active');
            mobileNav.classList.toggle('is-open');

            // Prevent body scroll when menu is open
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        };

        burgerMenu.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('is-open')) {
                    toggleMenu();
                }
            });
        });
    }

    // 3. CTA Smooth Scroll
    const discoverBtn = document.getElementById('discover-btn');
    const aboutSection = document.getElementById('about');

    if (discoverBtn && aboutSection) {
        discoverBtn.addEventListener('click', () => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Keyboard support for custom buttons acting as links
        discoverBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 4. Back to Top Button Setup
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        backToTopBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // 5. Initialize Components if loaded on page
    if (typeof initSlider === 'function') {
        initSlider();
    }

    let galleryImages = [];
    if (typeof initSliceGallery === 'function') {
        galleryImages = initSliceGallery();
    }

    initLightbox(galleryImages);

    // 6. Intersection Observer Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 7. Parallax Background Animation
    const heroBg = document.querySelector('.hero-bg');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking && heroBg) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                // Only animate if in viewport height scope
                if (scrolled < window.innerHeight) {
                    heroBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // 8. Set Language (DE default, or stored preference)
    const savedLang = localStorage.getItem('preferredLang') || 'de';
    setLanguage(savedLang);
});
