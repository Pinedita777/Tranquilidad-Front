// buzon.js
document.addEventListener('DOMContentLoaded', function() {
    const buzonContainer = document.getElementById('buzonContainer');
    
    function cargarCitasPendientes() {
        const todasLasCitas = JSON.parse(localStorage.getItem('citas')) || [];
        // Filtramos solo las citas que están pendientes de revisión
        const citasPendientes = todasLasCitas.filter(cita => 
            !cita.estado || cita.estado === 'pendiente'
        );

        if (citasPendientes.length === 0) {
            buzonContainer.innerHTML = `
                <div class="empty-message">
                    <i class="fas fa-inbox fa-2x" style="color: #59009A; margin-bottom: 10px;"></i>
                    <p>No hay citas pendientes de revisión</p>
                </div>
            `;
            return;
        }

        buzonContainer.innerHTML = '';
        
        citasPendientes.forEach((cita, index) => {
            const indexEnTotal = todasLasCitas.findIndex(c => 
                c.nombre === cita.nombre && 
                c.fecha === cita.fecha && 
                c.hora === cita.hora
            );

            const citaCard = document.createElement('div');
            citaCard.className = 'cita-card';
            citaCard.innerHTML = `
                <div class="cita-header">
                    <div class="cita-icon">
                        <i class="fas fa-user-clock"></i>
                    </div>
                    <div class="cita-info">
                        <div class="cita-tipo">${cita.paquete || 'Cita Regular'}</div>
                        <h3>${cita.nombre}</h3>
                    </div>
                </div>
                <div class="cita-detalles">
                    <p><i class="far fa-envelope"></i> ${cita.correo}</p>
                    <p><i class="fas fa-phone"></i> ${cita.telefono}</p>
                    <p><i class="fas fa-user-md"></i> ${cita.especialidad}</p>
                    <p><i class="far fa-calendar-alt"></i> ${cita.fecha}</p>
                    <p><i class="far fa-clock"></i> ${cita.hora}</p>
                    ${cita.comentarios ? `<p><i class="far fa-comment"></i> ${cita.comentarios}</p>` : ''}
                </div>
                <div class="cita-actions">
                    <button class="btn-aceptar" data-index="${indexEnTotal}">
                        <i class="fas fa-check"></i> Aceptar
                    </button>
                    <button class="btn-denegar" data-index="${indexEnTotal}">
                        <i class="fas fa-times"></i> Denegar
                    </button>
                </div>
            `;
            buzonContainer.appendChild(citaCard);
        });

        document.querySelectorAll('.btn-aceptar').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                aceptarCita(index);
            });
        });

        document.querySelectorAll('.btn-denegar').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                denegarCita(index);
            });
        });
    }

    function aceptarCita(index) {
        const todasLasCitas = JSON.parse(localStorage.getItem('citas')) || [];
        if (todasLasCitas[index]) {
            todasLasCitas[index].estado = 'aceptada';
            localStorage.setItem('citas', JSON.stringify(todasLasCitas));
            cargarCitasPendientes();
        }
    }

    function denegarCita(index) {
        if (confirm('¿Estás seguro de que deseas denegar esta cita?')) {
            const todasLasCitas = JSON.parse(localStorage.getItem('citas')) || [];
            if (todasLasCitas[index]) {
                todasLasCitas[index].estado = 'denegada';
                localStorage.setItem('citas', JSON.stringify(todasLasCitas));
                cargarCitasPendientes();
            }
        }
    }

    cargarCitasPendientes();
});

  
  // Cargar el header
  fetch('../Header/header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header-container').innerHTML = data);

// Cargar el footer
fetch('../Footer/inicio/inicio.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer-container').innerHTML = data);