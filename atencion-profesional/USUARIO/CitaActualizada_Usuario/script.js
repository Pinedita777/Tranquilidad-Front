document.addEventListener("DOMContentLoaded", function () {
    let citaEditar = JSON.parse(localStorage.getItem("citaEditar"));
    if (citaEditar) {
        document.getElementById("nombre").value = citaEditar.nombre;
        document.getElementById("correo").value = citaEditar.correo;
        document.getElementById("telefono").value = citaEditar.telefono;
        document.getElementById("paquete").value = citaEditar.paquete;
        document.getElementById("especialidad").value = citaEditar.especialidad;
        document.getElementById("fecha").value = citaEditar.fecha;
        document.getElementById("hora").value = citaEditar.hora;
        document.getElementById("comentarios").value = citaEditar.comentarios;
    }

    document.getElementById("actualizarCitaForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Actualizar los datos en localStorage
        let citas = JSON.parse(localStorage.getItem("citas")) || [];
        let index = citas.findIndex(c => c.correo === citaEditar.correo && c.fecha === citaEditar.fecha);
        if (index !== -1) {
            citas[index].fecha = document.getElementById("fecha").value;
            citas[index].hora = document.getElementById("hora").value;
            citas[index].comentarios = document.getElementById("comentarios").value;
            localStorage.setItem("citas", JSON.stringify(citas));
        }

        // Mostrar mensaje emergente
        document.getElementById("mensajeEmergente").style.display = "flex";
    });

    // Redirigir al apartado de citas agendadas al hacer clic en "Aceptar"
    document.getElementById("btnAceptar").addEventListener("click", function () {
        window.location.href = "../CitasProgramadas_Usuario/citas.html";
    });
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