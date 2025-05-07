class Cliente { 
    #nombre = '';
    constructor( nombre, saldo = 0) {
        // this._nombre = nombre;
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    nombreCliente() {
        return this.#nombre;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
}

const pedro = new Cliente('Pedro');
 console.log(pedro.nombreCliente() );
// console.log(pedro._nombre);
// SOLUCION
// console.log(pedro.#nombre);
