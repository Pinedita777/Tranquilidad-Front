
// Funcion que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("resolver");
        habilidades[1].classList.add("trabajo");
        habilidades[2].classList.add("observacion");
        habilidades[3].classList.add("manejo");
        habilidades[4].classList.add("capacidad");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyecto");
    }
}


// detecto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll = function(){
    efectoHabilidades();
}


// Get the modal
var modal = document.getElementById("modalActualizar");

// Get the button that opens the modal
var btn = document.getElementById("btnActualizar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Desactiva el scroll del fondo
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Reactiva el scroll del fondo
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Reactiva el scroll del fondo
    }
}

// Handle form submission
document.getElementById("formActualizar").onsubmit = function(event) {
    event.preventDefault();
    alert("Información actualizada exitosamente");
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Reactiva el scroll del fondo
}

function toggleProfileMenu() {
    const menu = document.getElementById("profile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  function toggleModules() {
    const overlay = document.getElementById("modules-overlay");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  }
  
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".profile-container")) {
      document.getElementById("profile-menu").style.display = "none";
    }
    if (!e.target.closest(".modules-item")) {
      document.getElementById("modules-overlay").style.display = "none";
    }
  });
  function toggleHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar
  }
  function toggleModulues() {
    const modulesContent = document.getElementById("modules-content");
    modulesContent.style.display = modulesContent.style.display === "block" ? "none" : "block";
  }
  
  // Cargar el header
  fetch('../Header/Header/header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/Footer/inicio/inicio.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer-container').innerHTML = data);