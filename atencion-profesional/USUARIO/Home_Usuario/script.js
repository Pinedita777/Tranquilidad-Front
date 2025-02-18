const stories = [
  [
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen4.jpg", text: "Los atardeceres nos enseñan a dejar ir lo que no podemos cambiar. 🌅" },
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen5.jpg", text: "El final del día es la mejor oportunidad para respirar y agradecer. 🌄" },
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen6.jpg", text: "La calma del atardecer nos recuerda que cada día tiene su belleza. 🌅" }
  ],
  [
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen7.jpg", text: "Incluso en la rutina, un atardecer nos da un momento de paz. 🌇" },
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen8.jpg", text: "Los colores del atardecer nos inspiran a soñar sin límites. 🌆" },
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen9.jpg", text: "Cada puesta de sol es un recordatorio de que siempre hay un nuevo comienzo. 🌄" }
  ],
  [
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen10.jpg", text: "Mira el atardecer y recuerda que la vida es un hermoso viaje. 🌅" },
      { img: "/atencion-profesional/USUARIO/Imagenes/Imagen2.jpg", text: "El sol se despide, pero mañana nos traerá nuevas oportunidades. 🌞" },
      { img: "/atencion-profesional/USUARIO/Home_Usuario/Imagenes/Imagen4.jpg", text: "Siente la brisa del atardecer y deja ir las preocupaciones del día. 🍃" }
  ]
];

let currentIndexes = [0, 0, 0];

const updateStories = () => {
  for (let i = 0; i < 3; i++) {
      document.getElementById(`story-image-${i + 1}`).src = stories[i][currentIndexes[i]].img;
      document.getElementById(`story-text-${i + 1}`).textContent = stories[i][currentIndexes[i]].text;
  }
};

// Cambio automático cada 5 segundos
setInterval(() => {
  for (let i = 0; i < 3; i++) {
      currentIndexes[i] = (currentIndexes[i] + 1) % stories[i].length;
  }
  updateStories();
}, 5000);

window.onload = () => {
  updateStories();
};




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

  


  
 