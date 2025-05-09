// varibles y selectores 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//eventos 

eventListeners();
function eventListeners() { 
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto );
}


//Classes
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {

}


//instanciar 
const ui = new UI();
let presupuesto;

//funciones 

function preguntarPresupuesto() { 
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    //console.log( Number( presupuestoUsuario ) );

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
}