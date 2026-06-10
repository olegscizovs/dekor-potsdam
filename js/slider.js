/**
 * Highlights Slider Component
 */
function initSlider() {
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
}
