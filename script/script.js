const boton = document.querySelector('mostrar-mensaje');
const cuadro = document.querySelector('cuadro-flotante');

boton.addEventListener('click', () => {
    if (cuadro.style.display === 'none' || cuadro.style.display === '') {
        cuadro.style.display = 'block';
    } else {
        cuadro.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!cuadro.contains(e.target) && !boton.contains(e.target)) {
        cuadro.style.display = 'none';
    }
});