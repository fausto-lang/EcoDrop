document.addEventListener('DOMContentLoaded', () => {
    
    const elementosMenu = document.querySelectorAll('.navegacion-lateral li');
    
    elementosMenu.forEach(elemento => {
        elemento.addEventListener('click', function() {
            elementosMenu.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    const pestanasCabecera = document.querySelectorAll('.pestanas-cabecera a');
    
    pestanasCabecera.forEach(pestana => {
        pestana.addEventListener('click', function(evento) {
            evento.preventDefault();
            pestanasCabecera.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    const botonNuevoRegistro = document.querySelector('.boton-nuevo-registro');
    if (botonNuevoRegistro) {
        botonNuevoRegistro.addEventListener('click', () => {
            alert('Abriendo formulario de clasificación...');
        });
    }
});