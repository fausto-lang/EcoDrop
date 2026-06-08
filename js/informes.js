document.addEventListener('DOMContentLoaded', () => {

    const elementosNavegacion = document.querySelectorAll('.navegacion-lateral li');
    
    elementosNavegacion.forEach(elemento => {
        elemento.addEventListener('click', function() {
            elementosNavegacion.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    const botonExcel = document.querySelector('.boton-excel');
    if (botonExcel) {
        botonExcel.addEventListener('click', () => {
            alert('Compilando datos tabulares para descarga en formato .xlsx...');
        });
    }

    const botonPdf = document.querySelector('.boton-pdf');
    if (botonPdf) {
        botonPdf.addEventListener('click', () => {
            alert('Generando documento de cierre contable en formato .pdf...');
        });
    }

    const selectorFiltro = document.querySelector('.selector-periodo');
    if (selectorFiltro) {
        selectorFiltro.addEventListener('change', (evento) => {
            alert(`Actualizando gráficos para el rango: ${evento.target.value}`);
        });
    }
});