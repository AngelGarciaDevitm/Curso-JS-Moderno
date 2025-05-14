const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

//carrito.delete('Camisa');

//console.log(carrito);

//console.log(carrito.size);

//carrito.clear()

carrito.forEach( (producto, index, pertenece) => {
    console.log(pertenece);
})

console.log(carrito);


//del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDupli = new Set(numeros);

console.log(noDupli);