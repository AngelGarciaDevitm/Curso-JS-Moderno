localStorage.setItem('nombre', 'Angel');

const producto = {
    nombre : "monitor de 24 Pulgadas",
    precio : 300
}

const productoString = JSON.stringify( producto );
localStorage.setItem('Producto', productoString);


const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify( meses );
localStorage.setItem('Meses', mesesString);