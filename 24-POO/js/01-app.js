class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const isaac = new Cliente('Isaac', 400);
console.log(isaac);


const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const angel = new Cliente2('Angel', 500);
console.log(angel);