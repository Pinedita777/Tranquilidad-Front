// Cargar el header
fetch('../Header/header.html')
.then(response => response.text())
.then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/inicio/inicio.html')
.then(response => response.text())
.then(data => document.getElementById('footer-container').innerHTML = data);

const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('header');

  
  
  function mostrarMensaje() {
    document.getElementById("modal").style.display = "flex";
}

function redirigir() {
    window.location.href = "../AgendarCita_Usuario/AgendarCitaUsuario.html";
}