const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let index = 0;

// Function to show next slide
function nextSlide() {
    index++;
    if (index >= images.length) {
        index = 0; // Loop back to first image
    }
    updateSlider();
}

// Function to show previous slide
function prevSlide() {
    index--;
    if (index < 0) {
        index = images.length - 1; // Loop to last image
    }
    updateSlider();
}

// Update slider position
function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
