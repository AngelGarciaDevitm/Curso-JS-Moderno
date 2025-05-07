function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this .saldo > 10000) {
        tipo = 'Gold';
    } else if(this,this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre Cliente: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}




function persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

persona.prototype = Object.create( Cliente.prototype );
persona.prototype.constructor = Cliente;

// instanciarlo
const angel = new persona('Angel', 7000, 1234567890)
console.log(angel);
console.log(angel.nombreClienteSaldo());

persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(angel.mostrarTelefono());