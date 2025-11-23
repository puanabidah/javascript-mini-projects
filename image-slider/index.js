// IMAGE SLIDER
let slides;
let currentSlide = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
  slides = document.querySelectorAll('.slide');

  if (slides.length > 0) {
    showSlide();
    startAutoSlider();
  }

  document.querySelector('.next-btn').addEventListener('click', () => {
    nextSlide();
    resetAutoSlider();
  });

  document.querySelector('.prev-btn').addEventListener('click', () => {
    prevSlide();
    resetAutoSlider();
  });
}

function startAutoSlider() {
  intervalId = setInterval(nextSlide, 5000);
}

function resetAutoSlider() {
  clearInterval(intervalId);
  startAutoSlider();
}

function showSlide() {
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  showSlide();
}

function prevSlide() {
  currentSlide--;
  showSlide();
}
