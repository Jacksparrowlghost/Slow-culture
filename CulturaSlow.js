let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'inactive');
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.add('inactive');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
