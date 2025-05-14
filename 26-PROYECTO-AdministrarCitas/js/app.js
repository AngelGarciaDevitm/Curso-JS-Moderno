//selectores 
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita')

const contenedor = document.querySelector('#administra');

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

class Notificacion {

    constructor({texto, tipo}) {
        this.texto =  texto
        this.tipo = tipo

        this.mostrar();
    }

    mostrar() { 
        // crear la notificacion 
        const alerta = document.createElement('DIV')
        alerta.classList.add('text-center', 'alert', 'd-block', 'col-12');
        //eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove();
        
        // si es de tipo error agrega una clase 
        this.tipo = 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500')

        //Mensaje de error
        alerta.textContent = this.texto;

        //insertar en el dom 
        formulario.parentElement.insertBefore(alerta, formulario)

        //Quitar despues de 5 segundos 
        setTimeout(() => {
            alerta.remove();
        }, 3000)
    }
}

class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        this.mostrarCita();
    }

    mostrarCita() {

        //Limpiar el HTML 
        while(contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }

        //Generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-weight-bolder">Paciente: </span> ${cita.mascota}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${cita.propietario}`;
        
            const telefono = document.createElement('p');
            telefono.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            telefono.innerHTML = `<span class="font-weight-bolder">Telefono: </span> ${cita.telefono}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-weight-bolder">Fecha: </span>${cita.fecha}`;
        
            const hora = document.createElement('p');
            hora.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            hora.innerHTML = `<span class="font-weight-bolder">Hora: </span>${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-weight-bolder">Sintomas: </span> ${cita.sintomas}`;
        
            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(telefono);
            divCita.appendChild(hora);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            contenedor.appendChild(divCita);
        });    
    }
}

function datosCita (e) {
    citaObj[e.target.name] = e.target.value;
}

const citas = new Citas();

function submitCita (e) {
    e.preventDefault();

    
    if( Object.values(citaObj).some(valor => valor.trim() === '') ) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'exito'
        })
        return;
    }

    citas.agregarCita(citaObj);
}
