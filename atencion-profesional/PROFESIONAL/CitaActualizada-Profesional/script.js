// Cargar el header
fetch('../Header/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/inicio/inicio.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-container').innerHTML = data);

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del formulario
    const form = document.getElementById("actualizarCitaForm");
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const telefonoInput = document.getElementById("telefono");
    const paqueteSelect = document.getElementById("paquete");
    const especialidadSelect = document.getElementById("especialidad");
    const fechaInput = document.getElementById("fecha");
    const horaInput = document.getElementById("hora");
    const comentariosInput = document.getElementById("comentarios");
    const mensajeEmergente = document.getElementById("mensajeEmergente");

    // Obtener la cita a editar del localStorage
    let citaEditar = JSON.parse(localStorage.getItem("citaEditar"));

    if (citaEditar) {
        // Rellenar los campos con la información de la cita
        nombreInput.value = citaEditar.nombre;
        correoInput.value = citaEditar.correo;
        telefonoInput.value = citaEditar.telefono;
        paqueteSelect.value = citaEditar.paquete;
        especialidadSelect.value = citaEditar.especialidad;
        fechaInput.value = citaEditar.fecha;
        horaInput.value = citaEditar.hora;
        comentariosInput.value = citaEditar.comentarios || '';

        // Asegurarse de que los campos no editables estén deshabilitados
        nombreInput.disabled = true;
        correoInput.disabled = true;
        telefonoInput.disabled = true;
        paqueteSelect.disabled = true;
        especialidadSelect.disabled = true;

        // Asegurarse de que los campos editables NO estén deshabilitados
        fechaInput.disabled = false;
        horaInput.disabled = false;
        comentariosInput.disabled = false;
    }

    // Manejar el envío del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Actualizar los datos en localStorage
        let citas = JSON.parse(localStorage.getItem("citas")) || [];
        let index = citas.findIndex(c => 
            c.correo === citaEditar.correo && 
            c.fecha === citaEditar.fecha &&
            c.hora === citaEditar.hora
        );

        if (index !== -1) {
            // Actualizar solo los campos editables
            citas[index].fecha = fechaInput.value;
            citas[index].hora = horaInput.value;
            citas[index].comentarios = comentariosInput.value;

            // Guardar las citas actualizadas
            localStorage.setItem("citas", JSON.stringify(citas));

            // Mostrar el mensaje emergente
            mensajeEmergente.style.display = "flex";
        }
    });

    // Manejar el botón de aceptar en el mensaje emergente
    document.getElementById("btnAceptar").addEventListener("click", function () {
        window.location.href = "../MisCitas/MisCitas.html";
    });

    // Cerrar el mensaje emergente si se hace clic fuera de él
    mensajeEmergente.addEventListener("click", function (event) {
        if (event.target === mensajeEmergente) {
            mensajeEmergente.style.display = "none";
        }
    });
});