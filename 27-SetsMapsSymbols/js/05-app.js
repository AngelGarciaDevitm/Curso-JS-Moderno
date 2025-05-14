const sym = Symbol('1');
const sym2 = Symbol('1');

//console.log( Symbol() === Symbol() );


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Isaac';
persona[apellido] = 'Garcia';
persona.tipo = 'Premium';
persona.saldo = 500;


console.log(persona);
//console.log(persona[nombre]);

//las propiedades que utiliza un symbol no so iterables
for(let i in persona) {
    console.log(i);
}


//definir una descripcion del Symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};


cliente[nombreCliente] = 'Isaac';


console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);