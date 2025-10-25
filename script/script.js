const boton = document.getElementById('mostrar-mensaje');
const cuadro = document.getElementById('cuadro-flotante');

boton.addEventListener('click', () => {
    if (cuadro.style.display === 'none' || cuadro.style.display === '') {
        cuadro.style.display= 'block';
    } else {
        cuadro.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!cuadro.contains(e.target) && e.target !== boton) {
        cuadro.style.display = 'none';
    }
});