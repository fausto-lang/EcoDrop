document.addEventListener('DOMContentLoaded', () => {

    const opcionesMenu = document.querySelectorAll('.navegacion-lateral li');
    
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', function() {
            opcionesMenu.forEach(item => item.classList.remove('activo'));
            this.classList.add('active');
        });
    });

    const botonSubir = document.querySelector('.boton-primario');
    const botonCamara = document.querySelector('.boton-secundario');

    if (botonSubir) {
        botonSubir.addEventListener('click', () => {
            alert('Abriendo selector de archivos del sistema...');
        });
    }

    if (botonCamara) {
        botonCamara.addEventListener('click', () => {
            alert('Solicitando acceso a la cámara periférica...');
        });
    }

    const botonConfirmar = document.querySelector('.boton-confirmar');
    if (botonConfirmar) {
        botonConfirmar.addEventListener('click', () => {
            alert('Clasificación guardada exitosamente en el inventario.');
        });
    }
});