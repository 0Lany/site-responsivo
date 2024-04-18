
const slider = document.getElementById('slider');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // Mude de slide a cada 3 segundos
