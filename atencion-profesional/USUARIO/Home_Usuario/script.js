document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const dotsContainer = document.querySelector('.carousel-indicators');
  let currentIndex = 0;
  const totalItems = items.length;
  const itemsPerView = window.innerWidth > 768 ? 3 : 2;
  const maxIndex = totalItems - itemsPerView;

  // Create dots
  items.forEach((_, index) => {
    if (index <= maxIndex) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    }
  });

  const dots = document.querySelectorAll('.carousel-dot');

  function updateSlidePosition() {
    const slideWidth = items[0].offsetWidth + 8; // Width + gap
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    if (index >= 0 && index <= maxIndex) {
      currentIndex = index;
      updateSlidePosition();
    }
  }

  function nextSlide() {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlidePosition();
    } else {
      // Smooth return to start
      currentIndex = 0;
      carousel.style.transition = 'none';
      updateSlidePosition();
      setTimeout(() => {
        carousel.style.transition = 'transform 0.8s ease-in-out';
      }, 50);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    } else {
      // Smooth wrap to end
      currentIndex = maxIndex;
      carousel.style.transition = 'none';
      updateSlidePosition();
      setTimeout(() => {
        carousel.style.transition = 'transform 0.8s ease-in-out';
      }, 50);
    }
  }

  // Event listeners
  document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
  document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);

  // Auto advance slides
  let autoAdvance = setInterval(nextSlide, 5000);

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
  carousel.addEventListener('mouseleave', () => {
    autoAdvance = setInterval(nextSlide, 5000);
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    // Update itemsPerView based on new window width
    const newItemsPerView = window.innerWidth > 768 ? 3 : 2;
    if (newItemsPerView !== itemsPerView) {
      currentIndex = 0; // Reset position on layout change
    }
    updateSlidePosition();
  });

  // Initial position
  updateSlidePosition();
});




// Cargar el header
fetch('../Header/header.html')
.then(response => response.text())
.then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/inicio/inicio.html')
.then(response => response.text())
.then(data => document.getElementById('footer-container').innerHTML = data);

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Cambiar automáticamente cada 3 segundos
setInterval(nextSlide, 3000);

// Mostrar la primera diapositiva al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

// Initialize the first slide
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});


const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('header');

  


  
 