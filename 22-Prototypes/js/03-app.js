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


//instanciarlo 
const isaac = new Cliente('Isaac', 6000);
console.log (isaac.tipoCliente() );
console.log( isaac.nombreClienteSaldo());
isaac.retiraSaldo(800);
console.log( isaac.nombreClienteSaldo());

console.log(isaac);


