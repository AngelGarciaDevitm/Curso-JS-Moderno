//selectores 
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita')

const contenedor = document.querySelector('#administra');

const btnEditar = document.querySelector('.btn-editar');

btnEditar?.addEventListener('click', () => {
    alert('diste click');
})

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
    id: generarId(),
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
        alerta.classList.add('text-center', 'alert', 'd-block', 'col-12')

        //eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove();
        
        // si es de tipo error agrega una clase 
        this.tipo = 'error' ? alerta.classList.add('alert-danger') : alerta.classList.add('alert-success')

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

        console.log(this.citas);
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

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);
            btnEditar.classList.add('btn', 'btn-info', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            const contenedorBotones = document.createElement('DIV');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10')

            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);


            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(telefono);
            divCita.appendChild(hora);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
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
            tipo: 'error'
        })
        return;
    }

    citas.agregarCita({...citaObj});
    formulario.reset();
    reiniciarObjeto();
    new Notificacion({
        texto: 'Paciente registrado',
        tipo: 'correcto'
    })
}

function reiniciarObjeto() {
    //Reiniciar el objeto 
    //citaObj.mascota = '';
    //citaObj.propietario = '';
    //citaObj.fecha = '';
    //citaObj.hora = '';
    //citaObj.telefono = '';
    //citaObj.sintomas = '';

    Object.assign(citaObj, {
        id: generarId(),
        mascota:'',
        propietario: '',
        fecha: '',
        hora: '',
        telefono: '',
        sintomas: ''
    })
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now()
}

function cargarEdicion (cita) {
    Object.assign(citaObj, cita); 

    mascotaInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    telefonoInput.value = cita.telefono
    fechaInput.value = cita.fecha
    horaInput.value = cita.hora
    sintomasInput.value = cita.sintomas
}