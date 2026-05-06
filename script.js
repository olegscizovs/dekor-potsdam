/**
 * Phase 1: Script Logic
 * Focus: Security (Strict DOM Handling, i18n via textContent) and Interactions.
 */

// 1. Safe i18n System (Data vs. Instruction)
// Hardcoded translations to prevent external JSON injection risks during phase 1.
const translations = {
    de: {
        heroTitle: "Ihr Zuhause, Ihre Wohlfühloase",
        heroSubtext: "Ob stilvolle Gestaltung von Wänden, Decken oder Böden - wir verwandeln Ihr Büro, Ihr Zuhause oder Ihr Geschäft in eine einzigartige Wohlfühloase.",
        heroCTA: "Entdecken Sie unsere Kunst",
        aboutTitle: "Dekor Salon Potsdam - Ihr Partner für Raumgestaltung",
        aboutList1: "Individuelle Wand-, Decken- & Bodengestaltung",
        aboutList2: "Hochwertige, natürliche und schadstofffreie Materialien für ein gesundes Raumklima - kombiniert mit kreativen Techniken und beeindruckenden Effekten.",
        aboutList3: "Professionelle Umsetzung mit Liebe zum Detail",
        aboutList4: "Gestalten Sie Ihr Zuhause neu - stilvoll & einzigartig!",
        aboutList5: "Besuchen Sie unsere Ausstellung!",
        aboutList6: "Vereinbaren Sie einen Termin für eine persönliche Beratung",
        aboutList7: "Oder schauen Sie sich unsere Werke selbst an - Eingang durch den Kosmetiksalon \"Lera\"",
        cubeGalleryTitle: "3D Galerie",
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
        contactAddress: "Gutenbergstraße 32, Potsdam, 14467,  Deutschland",
        contactPhoneLabel: "Telefon:",
        contactPhone: "+49 152 34599997",
        contactEmailLabel: "E-Mail:",
        contactEmail: "dekor@salonpotsdam.de",
        contactHoursLabel: "Öffnungszeiten:",
        contactHours: "nach Vereinbarung",
        navHome: "Startseite",
        navAbout: "Über uns",
        navHighlights: "Highlights",
        navGallery: "Galerie",
        navContacts: "Kontakt",
        footerCopy: "© 2026 Dekor Potsdam. Alle Rechte vorbehalten."
    },
    en: {
        heroTitle: "Your Home, Your Oasis of Well-being",
        heroSubtext: "Whether stylish design of walls, ceilings or floors - we transform your office, your home or your shop into a unique oasis of well-being.",
        heroCTA: "Discover our art",
        aboutTitle: "Dekor Salon Potsdam - Your Partner for Interior Design",
        aboutList1: "Individual wall, ceiling & floor design",
        aboutList2: "High-quality, natural and pollutant-free materials for a healthy indoor climate - combined with creative techniques and impressive effects.",
        aboutList3: "Professional implementation with attention to detail",
        aboutList4: "Redesign your home - stylish & unique!",
        aboutList5: "Visit our exhibition!",
        aboutList6: "Make an appointment for a personal consultation",
        aboutList7: "Or see our works for yourself - entrance through the beauty salon \"Lera\"",
        cubeGalleryTitle: "3D Gallery",
        highlightsTitle: "Our Highlights",
        card1Title: "Professional Design",
        card1Desc: "Aesthetics and functionality in every room.",
        card2Title: "High-Quality Materials",
        card2Desc: "Pollutant-free and natural materials.",
        card3Title: "Renovation Made Easy",
        card3Desc: "Whether minor repairs or comprehensive renovations, we are here for you.",
        card4Title: "Experienced Master Painters",
        card4Desc: "Our team consists of experienced experts who realize your wishes.",
        galleryTitle: "Our Portfolio",
        contactsTitle: "Get in Touch",
        contactAddressLabel: "Address:",
        contactAddress: "Gutenbergstraße 32, Potsdam, 14467, Germany",
        contactPhoneLabel: "Phone:",
        contactPhone: "+49 152 34599997",
        contactEmailLabel: "Email:",
        contactEmail: "dekor@salonpotsdam.de",
        contactHoursLabel: "Opening Hours:",
        contactHours: "by appointment",
        navHome: "Home",
        navAbout: "About us",
        navHighlights: "Highlights",
        navGallery: "Gallery",
        navContacts: "Contact",
        footerCopy: "© 2026 Dekor Potsdam. All rights reserved."
    },
    ru: {
        heroTitle: "Ваш дом, ваш оазис благополучия",
        heroSubtext: "Будь то стильный дизайн стен, потолков или полов - мы превратим ваш офис, дом или магазин в уникальный оазис благополучия.",
        heroCTA: "Откройте для себя наше искусство",
        aboutTitle: "Dekor Salon Potsdam - Ваш партнер по дизайну интерьера",
        aboutList1: "Индивидуальный дизайн стен, потолков и полов",
        aboutList2: "Высококачественные, натуральные и экологически чистые материалы для здорового микроклимата в помещении в сочетании с креативными техниками и впечатляющими эффектами.",
        aboutList3: "Профессиональное исполнение с вниманием к деталям",
        aboutList4: "Преобразите свой дом - стильно и уникально!",
        aboutList5: "Посетите нашу выставку!",
        aboutList6: "Запишитесь на индивидуальную консультацию",
        aboutList7: "Или посмотрите наши работы сами - вход через салон красоты \"Lera\"",
        cubeGalleryTitle: "3D Галерея",
        highlightsTitle: "Наши преимущества",
        card1Title: "Профессиональный дизайн",
        card1Desc: "Эстетика и функциональность в каждом помещении.",
        card2Title: "Качественные материалы",
        card2Desc: "Экологически чистые и натуральные материалы.",
        card3Title: "Ремонт - это просто",
        card3Desc: "От мелкого ремонта до комплексной отделки - мы всегда к вашим услугам.",
        card4Title: "Опытные мастера",
        card4Desc: "Наша команда состоит из опытных специалистов, которые воплотят ваши пожелания в жизнь.",
        galleryTitle: "Наше портфолио",
        contactsTitle: "Связаться с нами",
        contactAddressLabel: "Адрес:",
        contactAddress: "Gutenbergstraße 32, Potsdam, 14467, Германия",
        contactPhoneLabel: "Телефон:",
        contactPhone: "+49 152 34599997",
        contactEmailLabel: "Эл. почта:",
        contactEmail: "dekor@salonpotsdam.de",
        contactHoursLabel: "Часы работы:",
        contactHours: "по договоренности",
        navHome: "Главная",
        navAbout: "О нас",
        navHighlights: "Преимущества",
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

    // 3D Transform Slice Gallery Logic
    class SliceGallery {
        constructor(containerId, images) {
            this.container = document.getElementById(containerId);
            if (!this.container) return;
            
            this.images = images;
            this.currentIndex = 0;
            this.isAnimating = false;
            
            this.staticImage = document.createElement('img');
            this.staticImage.style.width = '100%';
            this.staticImage.style.height = '100%';
            this.staticImage.style.objectFit = 'cover';
            this.staticImage.style.position = 'absolute';
            this.staticImage.style.top = '0';
            this.staticImage.style.left = '0';
            this.staticImage.src = this.images[this.currentIndex];
            
            this.container.appendChild(this.staticImage);
            
            this.startTimer();

            this.container.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('openLightbox', { detail: { index: this.currentIndex } }));
            });

            this.container.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.container.click();
                }
            });
            
            const prevBtn = document.querySelector('.slice-prev');
            const nextBtn = document.querySelector('.slice-next');
            if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
            if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));
        }
        
        startTimer() {
            clearInterval(this.timer);
            this.timer = setInterval(() => this.navigate(1), 3000);
        }
        
        navigate(dir) {
            if (this.isAnimating) return;
            this.isAnimating = true;
            this.startTimer();
            
            const nextIndex = (this.currentIndex + dir + this.images.length) % this.images.length;
            const currentSrc = this.images[this.currentIndex];
            const nextSrc = this.images[nextIndex];
            
            // Hide the static image during rotation so it doesn't peek through the gaps
            this.staticImage.style.visibility = 'hidden';
            
            const types = ['verticalSlices', 'horizontalSlices', 'wholeCube'];
            const type = types[Math.floor(Math.random() * types.length)];
            const pieces = type === 'wholeCube' ? 1 : Math.floor(Math.random() * 3) + 3;
            
            let orientation = 'vertical';
            let rotateAxis = 'rotateX';
            
            if (type === 'verticalSlices') {
                orientation = 'vertical';
                rotateAxis = Math.random() > 0.5 ? 'rotateX' : 'rotateY';
            } else if (type === 'horizontalSlices') {
                orientation = 'horizontal';
                rotateAxis = Math.random() > 0.5 ? 'rotateX' : 'rotateY';
            } else {
                orientation = Math.random() > 0.5 ? 'vertical' : 'horizontal';
                rotateAxis = Math.random() > 0.5 ? 'rotateX' : 'rotateY';
            }
            
            const direction = Math.random() > 0.5 ? 1 : -1;
            
            this.animateSlices(pieces, orientation, rotateAxis, direction, currentSrc, nextSrc, () => {
                this.currentIndex = nextIndex;
                
                // Show the static image instantly after rotation ends
                this.staticImage.src = this.images[this.currentIndex];
                this.staticImage.style.visibility = 'visible';
                
                const slices = this.container.querySelectorAll('.slice-wrapper');
                slices.forEach(s => s.remove());
                this.isAnimating = false;
            });
        }
        
        animateSlices(pieceCount, orientation, rotateAxis, direction, currentSrc, nextSrc, callback) {
            const width = this.container.offsetWidth;
            const height = this.container.offsetHeight;
            
            let sliceWidth = orientation === 'vertical' ? width / pieceCount : width;
            let sliceHeight = orientation === 'horizontal' ? height / pieceCount : height;
            
            let depth = rotateAxis === 'rotateX' ? sliceHeight : sliceWidth;
            let halfDepth = depth / 2;
            let rotateDeg = direction * 90; 
            
            let completed = 0;
            
            for (let i = 0; i < pieceCount; i++) {
                const wrapper = document.createElement('div');
                wrapper.className = 'slice-wrapper';
                
                let left = orientation === 'vertical' ? i * sliceWidth : 0;
                let top = orientation === 'horizontal' ? i * sliceHeight : 0;
                
                Object.assign(wrapper.style, {
                    left: left + 'px',
                    top: top + 'px',
                    width: sliceWidth + 'px',
                    height: sliceHeight + 'px',
                    transform: `translateZ(-${halfDepth}px)`,
                    transition: `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.1}s`
                });
                
                const inner = document.createElement('div');
                inner.className = 'slice-inner';
                inner.style.animationDelay = `${i * 0.1}s`;
                
                let faces = [];
                if (rotateAxis === 'rotateX') {
                    faces = [ { rx: 0, ry: 0, n: 'front' }, { rx: 180, ry: 0, n: 'back' }, { rx: 90, ry: 0, n: 'top' }, { rx: -90, ry: 0, n: 'bottom' } ];
                } else {
                    faces = [ { rx: 0, ry: 0, n: 'front' }, { rx: 0, ry: 180, n: 'back' }, { rx: 0, ry: 90, n: 'right' }, { rx: 0, ry: -90, n: 'left' } ];
                }
                
                let targetAngle = direction === 1 ? -90 : 90;
                
                faces.forEach(f => {
                    const faceEl = document.createElement('div');
                    faceEl.className = 'slice-face';
                    Object.assign(faceEl.style, {
                        width: sliceWidth + 'px',
                        height: sliceHeight + 'px',
                        transform: `rotateX(${f.rx}deg) rotateY(${f.ry}deg) translateZ(${halfDepth}px)`
                    });
                    
                    let angleToMatch = rotateAxis === 'rotateX' ? f.rx : f.ry;
                    
                    if (f.n === 'front') {
                        faceEl.appendChild(this.createImg(sliceWidth, sliceHeight, currentSrc, left, top, width, height));
                    } else if (angleToMatch === targetAngle) {
                        faceEl.appendChild(this.createImg(sliceWidth, sliceHeight, nextSrc, left, top, width, height));
                    } else {
                        faceEl.style.background = '#111';
                    }
                    inner.appendChild(faceEl);
                });
                
                wrapper.appendChild(inner);
                this.container.appendChild(wrapper);
                
                wrapper.offsetHeight; // trigger layout
                wrapper.style.transform = `translateZ(-${halfDepth}px) ${rotateAxis}(${rotateDeg}deg)`;
                
                wrapper.addEventListener('transitionend', (e) => {
                    if (e.target === wrapper) {
                        completed++;
                        if (completed === pieceCount) callback();
                    }
                });
            }
        }
        
        createImg(w, h, src, left, top, totalW, totalH) {
            const img = document.createElement('img');
            img.src = src;
            Object.assign(img.style, {
                position: 'absolute',
                width: totalW + 'px',
                height: totalH + 'px',
                maxWidth: 'none',
                maxHeight: 'none',
                left: -left + 'px',
                top: -top + 'px',
                objectFit: 'cover'
            });
            return img;
        }
    }

    const galleryImages = Array.from(document.querySelectorAll('.gallery-source')).map(img => img.src);
    if (galleryImages.length > 0) {
        new SliceGallery('slice-gallery', galleryImages);
    }

    // Lightbox Logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentLightboxIndex = 0;

    if (lightboxModal && lightboxImg && lightboxClose && galleryImages.length > 0) {
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
