const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);  // Cambié "slider" por "slides" para que coincida

const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});
/*Para el menu hamburguesa*/
const menuToggle = document.querySelector('.menu-toggle');
const articulos1 = document.querySelector('.Articulos1');

menuToggle.addEventListener('click', () => {
    articulos1.classList.toggle('active');
});

/*Esta es una funcion para hacer que el menu se oculte automaticamente al quitar el cursor*/


