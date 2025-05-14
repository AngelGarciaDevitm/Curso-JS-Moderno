function crearIterafdor(carrito) {

    let i = 0;

    return {
        siguiente: () => {
            const fin = ( i >= carrito.length );
            const valor = !fin ? carrito[i++] : undefined;

            return{
                fin,
                valor
            }
        }
    }
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];

//Utilizar el interador 
const recorrerCarrito = crearIterafdor(carrito);

//console.log(recorrerCarrito.siguiente());