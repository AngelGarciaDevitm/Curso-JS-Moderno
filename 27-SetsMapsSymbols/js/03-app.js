
const cliente = new Map();

cliente.set('nombre', 'Angel');
cliente.set('Tipo', 'Premium');
cliente.set('Saldo', 10000);



console.log(cliente.size);

console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre'));


cliente.delete('saldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

cliente.clear();
console.log(cliente);



const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Isaac');

console.log(paciente);

paciente.forEach( (datos, index)=> {
    console.log(index);
})