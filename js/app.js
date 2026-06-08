document.addEventListener('DOMContentLoaded', () => {
    // Sistema de navegación entre secciones
    const items = document.querySelectorAll('.navegacion-lateral li[data-page]');
    const secciones = document.querySelectorAll('.seccion-pagina');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover clase activa de todos los items
            items.forEach(i => i.classList.remove('activo'));
            // Agregar clase activa al item clickeado
            item.classList.add('activo');
            
            // Obtener el nombre de la página del atributo data-page
            const pageName = item.getAttribute('data-page');
            
            // Ocultar todas las secciones
            secciones.forEach(sec => sec.classList.remove('activa'));
            
            // Mostrar la sección seleccionada
            const seccion = document.getElementById(pageName);
            if (seccion) {
                seccion.classList.add('activa');
            }
        });
    });

    // Botón nuevo registro
    const botonNuevoRegistro = document.querySelector('.boton-nuevo-registro');
    if (botonNuevoRegistro) {
        botonNuevoRegistro.addEventListener('click', () => {
            alert('Abriendo formulario de clasificación...');
        });
    }

    // Pestañas de cabecera
    const pestanasCabecera = document.querySelectorAll('.pestanas-cabecera a');
    pestanasCabecera.forEach(pestana => {
        pestana.addEventListener('click', function(evento) {
            evento.preventDefault();
            pestanasCabecera.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    // Filtro de tiempo en ranking
    const botonesFiltro = document.querySelectorAll('.boton-filtro-tiempo');
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');
        });
    });
});
