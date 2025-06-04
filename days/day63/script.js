const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
let index = 0;

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 800}px)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto-play every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);
