//selectores 
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const fechaInput = document.querySelector('#fecha');
const emailInput = document.querySelector('#email');
const sintomasInput = document.querySelector('#sintomas');

//objeto de cita 
const citaObj = {
    mascota: '',
    propietario: '',
    fecha: '',
    email:'',
    sintomas: ''
}

// Eventos 
mascotaInput.addEventListener('change', (e) => {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
})
propietarioInput.addEventListener('change', (e) => {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
})