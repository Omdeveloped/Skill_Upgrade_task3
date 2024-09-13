let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Auto slide
setInterval(() => {
    nextSlide();
}, 3000); // Change slide every 3 seconds

// Initial slide
showSlide(slideIndex);