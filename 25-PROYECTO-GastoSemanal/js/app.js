// varibles y selectores 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//eventos 

eventListeners();
function eventListeners() { 
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto );
}


//clases



//funciones 
function preguntarPresupuesto() { 
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    console.log( Number( presupuestoUsuario ) );

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) ) {
        window.location.reload();
    }
}