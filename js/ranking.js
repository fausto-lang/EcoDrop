document.addEventListener('DOMContentLoaded', () => {

    const opcionesMenu = document.querySelectorAll('.navegacion-lateral li');
    
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', function() {
            opcionesMenu.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    const botonesFiltro = document.querySelectorAll('.boton-filtro-tiempo');
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            botonesFiltro.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    const botonTienda = document.querySelector('.boton-tienda');
    if (botonTienda) {
        botonTienda.addEventListener('click', () => {
            alert('Redireccionando al catálogo de la EcoTienda de beneficios...');
        });
    }

    const opcionesTabla = document.querySelectorAll('.boton-opcion-tabla');
    opcionesTabla.forEach(opcion => {
        opcion.addEventListener('click', (evento) => {
            evento.stopPropagation();
            alert('Desplegando perfil o interacciones del usuario...');
        });
    });
});