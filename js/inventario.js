document.addEventListener('DOMContentLoaded', () => {

    const seccionesMenu = document.querySelectorAll('.navegacion-lateral li');
    
    seccionesMenu.forEach(seccion => {
        seccion.addEventListener('click', function() {
            seccionesMenu.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    const botonExportar = document.querySelector('.boton-exportar');
    if (botonExportar) {
        botonExportar.addEventListener('click', () => {
            alert('Generando archivo estructurado en formato CSV...');
        });
    }

    const botonManual = document.querySelector('.boton-registro-manual');
    if (botonManual) {
        botonManual.addEventListener('click', () => {
            alert('Desplegando asistente para el registro físico de residuos...');
        });
    }

    const botonesOpciones = document.querySelectorAll('.boton-tabla-accion');
    botonesOpciones.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            evento.stopPropagation();
            alert('Desplegando menú contextual del registro seleccionado...');
        });
    });
});