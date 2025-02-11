document.getElementById("citaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let paquete = document.getElementById("paquete").value;
    let especialidad = document.getElementById("especialidad").value;
    let profesional = document.getElementById("profesional").value; 
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let comentarios = document.getElementById("comentarios").value;

    let nuevaCita = {
        nombre, correo, telefono, paquete, especialidad, profesional, fecha, hora, comentarios
    };

    // Guardar en localStorage
    let citas = JSON.parse(localStorage.getItem("citas")) || [];
    citas.push(nuevaCita);
    localStorage.setItem("citas", JSON.stringify(citas));

    // Mostrar mensaje emergente
    document.getElementById("mensajeEmergente").style.display = "flex";
});

// Botón Aceptar del mensaje emergente
document.getElementById("btnAceptar").addEventListener("click", function() {
    window.location.href = "../CitasProgramadas_Usuario/citas.html"; // Redirigir a la página de citas
});




document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Previene que el click se propague al documento
        dropdownMenu.classList.toggle('show');
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});



  
  // Cargar el header
  fetch('../Header/header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/inicio/inicio.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer-container').innerHTML = data);


 

