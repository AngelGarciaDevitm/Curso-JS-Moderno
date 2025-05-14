// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Isaac',
    saldo: 300
}


weakset.add(cliente);

//console.log(weakset.has(cliente))

//weakset.delete(cliente);

console.log(cliente.size);


console.log(weakset);