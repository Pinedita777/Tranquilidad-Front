document.addEventListener("DOMContentLoaded", function () {
    const staticElements = document.querySelectorAll('.form-input.static');
    const citaCancelar = JSON.parse(localStorage.getItem("citaCancelar"));
    
    if (citaCancelar && staticElements.length === 4) {
        staticElements[0].textContent = citaCancelar.nombre || 'No disponible';
        staticElements[1].textContent = citaCancelar.especialidad || 'No disponible';
        staticElements[2].textContent = citaCancelar.fecha || 'No disponible';
        staticElements[3].textContent = citaCancelar.hora || 'No disponible';
    }

    const form = document.getElementById("cancellationForm");
    const enviarButton = document.querySelector('.form-button');

    if (form) {
        enviarButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            const motivoInput = form.querySelector('input[type="text"]');
            const reprogramarSelect = form.querySelector('select');
            const notasTextarea = form.querySelector('textarea');
            
            if (!motivoInput.value || !reprogramarSelect.value) {
                alert("Por favor complete todos los campos requeridos");
                return;
            }

            if (motivoInput && reprogramarSelect && citaCancelar) {
                const motivo = motivoInput.value;
                const reprogramar = reprogramarSelect.value;
                const notas = notasTextarea ? notasTextarea.value : '';
                
                const citasCanceladas = JSON.parse(localStorage.getItem("citasCanceladas")) || [];
                citasCanceladas.push({
                    ...citaCancelar,
                    motivo,
                    reprogramar,
                    notasAdicionales: notas,
                    fechaCancelacion: new Date().toISOString()
                });
                localStorage.setItem("citasCanceladas", JSON.stringify(citasCanceladas));

                let citas = JSON.parse(localStorage.getItem("citas")) || [];
                const index = citas.findIndex(c => 
                    c.nombre === citaCancelar.nombre &&
                    c.fecha === citaCancelar.fecha &&
                    c.hora === citaCancelar.hora
                );
                
                if (index !== -1) {
                    if (reprogramar === "no") {
                        citas.splice(index, 1);
                        localStorage.setItem("citas", JSON.stringify(citas));
                    }
                    window.location.href = reprogramar === "si" ? "../CitaActualizada_Usuario/cita-actualizada.html" : "../CitasProgramadas_Usuario/citas.html";
                }
            }
        });
    }
});


// Cargar el header
fetch('../Header/header.html')
.then(response => response.text())
.then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/inicio/inicio.html')
.then(response => response.text())
.then(data => document.getElementById('footer-container').innerHTML = data);