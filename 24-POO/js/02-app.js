class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de; ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }

}

const isaac = new Cliente('Isaac', 400);
console.log(isaac.mostrarInformacion());
console.log(isaac);

console.log(Cliente.bienvenida());



const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de; ${this.saldo}`;
    }
}

const angel = new Cliente2('Angel', 500);
console.log(angel.mostrarInformacion());
console.log(angel);