/**
 * Phase 1: Script Logic
 * Focus: Security (Strict DOM Handling, i18n via textContent) and Interactions.
 */

// 1. Safe i18n System (Data vs. Instruction)
// Hardcoded translations to prevent external JSON injection risks during phase 1.
const translations = {
    en: {
        heroTitle: "Exquisite Plaster Artistry",
        heroSubtext: "Elevate your space with bespoke, hand-crafted wall textures and luxurious finishes.",
        heroCTA: "Discover Our Craft",
        aboutTitle: "The Art of Texture",
        aboutDesc: "We specialize in premium decorative plaster, transforming ordinary walls into extraordinary centerpieces. Our master artisans blend traditional techniques with modern aesthetics to create textures that breathe life into any interior.",
        aboutSubDesc: "From subtle Venetian stucco to bold concrete finishes, our work is defined by precision, passion, and unparalleled quality.",
        highlightsTitle: "Signature Finishes",
        card1Title: "Venetian Stucco",
        card1Desc: "A classic, polished finish with a mirror-like depth.",
        card2Title: "Microcement",
        card2Desc: "Seamless, modern concrete aesthetics for any surface.",
        card3Title: "Marmorino",
        card3Desc: "Elegant matte finish with subtle tonal variations.",
        card4Title: "Travertino",
        card4Desc: "Textured natural stone appearance.",
        galleryTitle: "Our Portfolio",
        contactsTitle: "Get in Touch",
        contactAddressLabel: "Address:",
        contactAddress: "Plasterstr. 1, 14467 Potsdam, Germany",
        contactPhoneLabel: "Phone:",
        contactPhone: "+49 331 1234567",
        contactEmailLabel: "Email:",
        contactEmail: "info@dekorpotsdam.de",
        contactHoursLabel: "Business Hours:",
        contactHours: "Mon-Fri: 9:00 - 18:00",
        navHome: "Home",
        navAbout: "About",
        navHighlights: "Highlights",
        navGallery: "Gallery",
        navContacts: "Contacts",
        footerCopy: "© 2026 Dekor Potsdam. All rights reserved."
    },
    de: {
        heroTitle: "Ihr Zuhause, Ihre Wohlfühloase",
        heroSubtext: "Ob stilvolle Gestaltung von Wänden, Decken oder Böden - wir verwandeln Ihr Büro, Ihr Zuhause oder Ihr Geschäft in eine einzigartige Wohlfühloase.",
        heroCTA: "Entdecken Sie unsere Kunst",
        aboutTitle: "Dekor Salon Potsdam - Ihr Partner für Raumgestaltung",
        aboutDesc: "Wir sind spezialisiert auf hochwertige dekorative Putze, die gewöhnliche Wände in außergewöhnliche Blickfänge verwandeln. Unsere Handwerksmeister verbinden traditionelle Techniken mit moderner Ästhetik, um Texturen zu schaffen, die jedem Interieur Leben einhauchen.",
        aboutSubDesc: "Von dezentem venezianischem Stuck bis hin zu markanten Betonoberflächen - unsere Arbeit zeichnet sich durch Präzision, Leidenschaft und unvergleichliche Qualität aus.",
        highlightsTitle: "Unsere Highlights",
        card1Title: "Professionelle Gestaltung",
        card1Desc: "Ästhetik und Funktionalität in jedem Raum.",
        card2Title: "Hochwertige Materialien",
        card2Desc: "Schadstofffreie und natürliche Materialien",
        card3Title: "Renovierung leicht gemacht",
        card3Desc: "Ob kleine Ausbesserungen oder umfassende Renovierungsarbeiten, wir sind für Sie da.",
        card4Title: "Erfahrene Malermeister",
        card4Desc: "Unser Team besteht aus erfahrenen Experten, die Ihre Wünsche umsetzen.",
        galleryTitle: "Unser Portfolio",
        contactsTitle: "Kontakt aufnehmen",
        contactAddressLabel: "Adresse:",
        contactAddress: "Plasterstr. 1, 14467 Potsdam, Deutschland",
        contactPhoneLabel: "Telefon:",
        contactPhone: "+49 331 1234567",
        contactEmailLabel: "E-Mail:",
        contactEmail: "info@dekorpotsdam.de",
        contactHoursLabel: "Öffnungszeiten:",
        contactHours: "Mo-Fr: 9:00 - 18:00",
        navHome: "Startseite",
        navAbout: "Über uns",
        navHighlights: "Highlights",
        navGallery: "Galerie",
        navContacts: "Kontakt",
        footerCopy: "© 2026 Dekor Potsdam. Alle Rechte vorbehalten."
    },
    ru: {
        heroTitle: "Изысканное Искусство Штукатурки",
        heroSubtext: "Преобразите свое пространство с помощью уникальных фактур стен ручной работы и роскошной отделки.",
        heroCTA: "Откройте для себя наше ремесло",
        aboutTitle: "Искусство Текстуры",
        aboutDesc: "Мы специализируемся на премиальной декоративной штукатурке, превращая обычные стены в выдающиеся центральные элементы. Наши мастера-ремесленники сочетают традиционные методы с современной эстетикой для создания текстур, которые вдыхают жизнь в любой интерьер.",
        aboutSubDesc: "От нежной венецианской штукатурки до смелой отделки под бетон — наша работа отличается точностью, страстью и непревзойденным качеством.",
        highlightsTitle: "Фирменные Покрытия",
        card1Title: "Венецианская Штукатурка",
        card1Desc: "Классическая полированная отделка с зеркальной глубиной.",
        card2Title: "Микроцемент",
        card2Desc: "Бесшовная современная бетонная эстетика для любой поверхности.",
        card3Title: "Марморино",
        card3Desc: "Элегантная матовая поверхность с тонкими цветовыми вариациями.",
        card4Title: "Травертино",
        card4Desc: "Текстурированный вид натурального камня.",
        galleryTitle: "Наше Портфолио",
        contactsTitle: "Свяжитесь с нами",
        contactAddressLabel: "Адрес:",
        contactAddress: "Plasterstr. 1, 14467 Потсдам, Германия",
        contactPhoneLabel: "Телефон:",
        contactPhone: "+49 331 1234567",
        contactEmailLabel: "Эл. почта:",
        contactEmail: "info@dekorpotsdam.de",
        contactHoursLabel: "Часы работы:",
        contactHours: "Пн-Пт: 9:00 - 18:00",
        navHome: "Главная",
        navAbout: "О нас",
        navHighlights: "Покрытия",
        navGallery: "Галерея",
        navContacts: "Контакты",
        footerCopy: "© 2026 Dekor Potsdam. Все права защищены."
    }
};

/**
 * Update page language securely.
 * @param {string} langCode - The target language code ('en', 'de', 'ru')
 */
function setLanguage(langCode) {
    if (!translations[langCode]) return;

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
}

// 2. Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {

    // Setup Language Switcher Listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const langCode = btn.getAttribute('data-lang');
            setLanguage(langCode);
        });

        // Ensure keyboard accessibility
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const langCode = btn.getAttribute('data-lang');
                setLanguage(langCode);
            }
        });
    });

    // Burger Menu Logic
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

    // CTA Smooth Scroll
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

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
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

    // Slider Logic
    const sliderTrack = document.getElementById('highlights-slider');
    const sliderPrev = document.querySelector('.slider-prev');
    const sliderNext = document.querySelector('.slider-next');
    let currentSlide = 0;

    if (sliderTrack && sliderPrev && sliderNext) {
        const cards = Array.from(sliderTrack.children);
        const totalCards = cards.length;

        const updateSlider = () => {
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');

                if (index === currentSlide) {
                    card.classList.add('active');
                } else if (index === (currentSlide - 1 + totalCards) % totalCards) {
                    card.classList.add('prev');
                } else if (index === (currentSlide + 1) % totalCards) {
                    card.classList.add('next');
                }
            });
        };

        sliderNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalCards;
            updateSlider();
        });

        sliderPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalCards) % totalCards;
            updateSlider();
        });

        // Initialize carousel positioning
        updateSlider();
    }

    // Gallery Mobile Navigation
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryMobilePrev = document.querySelector('.gallery-prev');
    const galleryMobileNext = document.querySelector('.gallery-next');

    if (galleryGrid && galleryMobilePrev && galleryMobileNext) {
        const galleryItemsMobile = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
        const totalGalleryItems = galleryItemsMobile.length;
        let currentGallerySlide = 0;

        const updateMobileGallery = () => {
            galleryItemsMobile.forEach((item, index) => {
                item.classList.remove('active-mobile', 'prev-mobile', 'next-mobile');

                if (index === currentGallerySlide) {
                    item.classList.add('active-mobile');
                } else if (index === (currentGallerySlide - 1 + totalGalleryItems) % totalGalleryItems) {
                    item.classList.add('prev-mobile');
                } else if (index === (currentGallerySlide + 1) % totalGalleryItems) {
                    item.classList.add('next-mobile');
                } else {
                    item.classList.add('next-mobile'); // Keep rest ready on the right
                }
            });
        };

        galleryMobileNext.addEventListener('click', () => {
            currentGallerySlide = (currentGallerySlide + 1) % totalGalleryItems;
            updateMobileGallery();
        });

        galleryMobilePrev.addEventListener('click', () => {
            currentGallerySlide = (currentGallerySlide - 1 + totalGalleryItems) % totalGalleryItems;
            updateMobileGallery();
        });

        // Initialize mobile carousel classes
        updateMobileGallery();
    }

    // Lightbox Logic
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentLightboxIndex = 0;

    if (lightboxModal && lightboxImg && lightboxClose) {
        const updateLightboxImage = (index) => {
            if (index < 0 || index >= galleryItems.length) return;
            const img = galleryItems[index].querySelector('img');
            if (img) {
                const fullSrc = img.getAttribute('data-full') || img.getAttribute('src');
                const altText = img.getAttribute('alt') || 'Gallery Image';
                lightboxImg.setAttribute('src', fullSrc);
                lightboxImg.setAttribute('alt', altText);
            }
        };

        const openLightbox = (index) => {
            currentLightboxIndex = index;
            updateLightboxImage(index);
            lightboxModal.removeAttribute('hidden');
            lightboxClose.focus();
        };

        const closeLightbox = () => {
            lightboxModal.setAttribute('hidden', '');
            lightboxImg.setAttribute('src', ''); // Clear source
        };

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });

        const nextLightboxImage = () => {
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
            updateLightboxImage(currentLightboxIndex);
        };

        const prevLightboxImage = () => {
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
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

    // Scroll Animations (Intersection Observer)
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

    // Parallax Effect
    const heroBg = document.querySelector('.hero-bg');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking && heroBg) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                // Only animate if in view
                if (scrolled < window.innerHeight) {
                    heroBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Set initial language
    setLanguage('de');
});
