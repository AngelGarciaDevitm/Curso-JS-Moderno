class Cliente {

    #nombre;
    saldo;

    constructor(nombre, saldo ) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Hola cliente ${this.#nombre}!!, tu saldo es de; ${this.saldo}`;
    }

    getName() {
        return this.#nombre
    }
    getSaldo() {
        return this.saldo
    }

    setName(nombre) {
        this.#nombre = nombre
    }

    setSaldo(saldo) {
        this.saldo = saldo 
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}


const isaac = new Cliente('Isaac', 500);
console.log(isaac.getName())
console.log(isaac.getSaldo())
isaac.setName('pepe')
console.log(isaac.getName())
isaac.setSaldo(2000)
console.log(isaac.getSaldo())


//console.log(isaac.mostrarInformacion());
//console.log(isaac.#nombre);