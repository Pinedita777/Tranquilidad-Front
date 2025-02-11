document.addEventListener("DOMContentLoaded", function () {
    const contenedorCitas = document.getElementById("contenedorCitas");
    const modalIngresar = document.getElementById("modalIngresar");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalDetalles = document.getElementById("modalDetalles");
    const btnAceptarIngresar = document.getElementById("btnAceptarIngresar");

    let citas = JSON.parse(localStorage.getItem("citas")) || [];

    function mostrarCitas() {
        contenedorCitas.innerHTML = "";

        citas.forEach((cita, index) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
                <h3>${cita.nombre}</h3>
                <p><strong>Correo:</strong> ${cita.correo}</p>
                <p><strong>Teléfono:</strong> ${cita.telefono}</p>
                <p><strong>Paquete:</strong> ${cita.paquete}</p>
                <p><strong>Especialidad:</strong> ${cita.especialidad}</p>
                <p><strong>Fecha:</strong> ${cita.fecha}</p>
                <p><strong>Hora:</strong> ${cita.hora}</p>
                <p><strong>Comentarios:</strong> ${cita.comentarios}</p>
                <button class="btn-ingresar" data-index="${index}">Ingresar</button>
                <button class="btn-editar" data-index="${index}">Editar</button>
                <button class="btn-cancelar" data-index="${index}">Cancelar</button>
            `;

            contenedorCitas.appendChild(tarjeta);
        });
    }

    mostrarCitas();

    // Evento para manejar los botones
    contenedorCitas.addEventListener("click", function (event) {
        const index = event.target.getAttribute("data-index");

        if (event.target.classList.contains("btn-cancelar")) {
            citas.splice(index, 1);
            localStorage.setItem("citas", JSON.stringify(citas));
            mostrarCitas();
        } else if (event.target.classList.contains("btn-ingresar")) {
            const cita = citas[index];

            // Mostrar los detalles en el modal
            modalTitulo.textContent = `Ingresando a la cita de ${cita.nombre}`;
            modalDetalles.innerHTML = `
                <p><strong>Especialidad:</strong> ${cita.especialidad}</p>
                <p><strong>Fecha:</strong> ${cita.fecha}</p>
                <p><strong>Hora:</strong> ${cita.hora}</p>
            `;

            // Agregar clase para animación y mostrar el modal
            modalIngresar.classList.add("show");
            modalIngresar.style.display = "flex";

            // Guardar la cita en localStorage
            localStorage.setItem("citaActual", JSON.stringify(cita));
        } else if (event.target.classList.contains("btn-editar")) {
            localStorage.setItem("citaEditar", JSON.stringify(citas[index]));
            window.location.href = "../CitaActualizada_Usuario/cita-actualizada.html";
        }
    });

    // Botón Aceptar del modal (redirección a videollamadas)
    btnAceptarIngresar.addEventListener("click", function () {
        window.location.href = "../Consulta_Usuario/ConsultaUsuario.html";
    });

    // Cerrar modal al hacer clic fuera de él
    modalIngresar.addEventListener("click", function (event) {
        if (event.target === modalIngresar) {
            modalIngresar.classList.remove("show");
            setTimeout(() => {
                modalIngresar.style.display = "none";
            }, 300); // Espera que termine la animación antes de ocultarlo
        }
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