class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Hola cliente ${this.nombre}!!, tu saldo es de; ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

//Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria) {
        super( nombre,saldo );
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {  //Reescribir un metodo
        return `Bienvenido al cajero de empresas`
    }
}


const isaac = new Cliente('Isaac', 400);
const empresa = new Empresa('Angel', 1000, 1234567890, 'Aprendizaje JavaScript');
console.log(empresa);
console.log(empresa.mostrarInformacion());


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());