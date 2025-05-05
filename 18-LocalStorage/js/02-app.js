const nombre = localStorage.getItem('nombre');
console.log(nombre);


const productoJSON = localStorage.getItem('Producto');
console.log( JSON.parse ( productoJSON ) ) ;


const mes = localStorage.getItem('Meses');
console.log( JSON.parse(mes));