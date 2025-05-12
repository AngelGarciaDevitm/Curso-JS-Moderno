//selectores 
const pacienteInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const fechaInput = document.querySelector('#fecha');
const emailInput = document.querySelector('#email');
const sintomasInput = document.querySelector('#sintomas');

//objeto de cita 
const citaObj = {
    paciente: '',
    propietario: '',
    fecha: '',
    email:'',
    sintomas: ''
}

// Eventos 
pacienteInput.addEventListener('change', (e) => {
    citaObj.paciente = e.target.value;

    console.log(citaObj);
})