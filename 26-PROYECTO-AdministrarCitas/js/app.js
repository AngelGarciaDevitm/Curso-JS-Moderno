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
        console.log('Todos los campos son obligatorios')
        return;
    }
}