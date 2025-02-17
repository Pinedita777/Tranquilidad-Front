document.addEventListener("DOMContentLoaded", function () {
    const contenedorCitas = document.getElementById("contenedorCitas");
    const modalIngresar = document.getElementById("modalIngresar");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalDetalles = document.getElementById("modalDetalles");
    const btnAceptarIngresar = document.getElementById("btnAceptarIngresar");

    function mostrarCitas() {
        const citas = JSON.parse(localStorage.getItem("citas")) || [];
        contenedorCitas.innerHTML = "";

        if (citas.length === 0) {
            contenedorCitas.innerHTML = "<p>No hay citas agendadas</p>";
            return;
        }

        citas.forEach((cita, index) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");
            tarjeta.innerHTML = `
                <h3>${cita.nombre}</h3>
                <p><strong>Correo:</strong> ${cita.correo}</p>
                <p><strong>Teléfono:</strong> ${cita.telefono}</p>
                <p><strong>Paquete:</strong> ${cita.paquete}</p>
                <p><strong>Especialidad:</strong> ${cita.especialidad}</p>
                <p><strong>Profesional:</strong> ${cita.profesional}</p>
                <p><strong>Fecha:</strong> ${cita.fecha}</p>
                <p><strong>Hora:</strong> ${cita.hora}</p>
                <p><strong>Comentarios:</strong> ${cita.comentarios || 'Sin comentarios'}</p>
                <button class="btn-ingresar" data-index="${index}">Ingresar</button>
                <button class="btn-editar" data-index="${index}">Editar</button>
                <button class="btn-cancelar" data-index="${index}">Cancelar</button>
            `;
            contenedorCitas.appendChild(tarjeta);
        });
    }
    
    mostrarCitas();

    contenedorCitas.addEventListener("click", function (event) {
        const button = event.target;
        if (!button.matches('button')) return;

        const index = button.getAttribute("data-index");
        const citas = JSON.parse(localStorage.getItem("citas")) || [];
        const cita = citas[index];
        if (!cita) return;

        if (button.classList.contains("btn-cancelar")) {
            localStorage.setItem("citaCancelar", JSON.stringify(cita));
            window.location.href = "../CancelarCita2_Profesional/CancelarCita2.html";
        } else if (button.classList.contains("btn-ingresar")) {
            modalTitulo.textContent = `Ingresando a la cita de ${cita.nombre}`;
            modalDetalles.innerHTML = `
                <p><strong>Especialidad:</strong> ${cita.especialidad}</p>
                <p><strong>Fecha:</strong> ${cita.fecha}</p>
                <p><strong>Hora:</strong> ${cita.hora}</p>
            `;
            modalIngresar.classList.add("show");
            modalIngresar.style.display = "flex";
            localStorage.setItem("citaActual", JSON.stringify(cita));
        } else if (button.classList.contains("btn-editar")) {
            localStorage.setItem("citaEditar", JSON.stringify(cita));
            window.location.href = "../CitaActualizada-Profesional/CitaActualizada.html";
        }
    });

    btnAceptarIngresar?.addEventListener("click", function () {
        window.location.href = "../Consulta_Profesional/ConsultaProfesional.html";
    });

    modalIngresar?.addEventListener("click", function (event) {
        if (event.target === modalIngresar) {
            modalIngresar.classList.remove("show");
            setTimeout(() => {
                modalIngresar.style.display = "none";
            }, 300);
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