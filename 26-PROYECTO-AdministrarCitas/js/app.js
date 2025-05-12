//selectores 
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita')

// Eventos
mascotaInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
telefonoInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
horaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

//objeto de cita 
const citaObj = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    telefono:'',
    sintomas: ''
}

function datosCita (e) {
    citaObj[e.target.name] = e.target.value;
}

function submitCita (e) {
    e.preventDefault();

    
    if( Object.values(citaObj).some(valor => valor.trim() === '') ) {
        const notificacion = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'exito'
        })
        return;
    }
}

class Notificacion {

    constructor({texto, tipo}) {
        this.texto =  texto
        this.tipo = tipo

        this.mostrar();
    }

    mostrar() { 
        // crear la notificacion 
        const alerta = document.createElement('DIV')
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm')

        // si es de tipo error agrega una clase 
        this.tipo = 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500')

        //Mensaje de error
        alerta.textContent = this.texto;

        //insertar en el dom 
        formulario.parentElement.insertBefore(alerta, formulario)
    }
}