// Variables
const resultado = document.querySelector('#resultado');


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})


//Funciones
function mostrarAutos() {
    autos.forEach(auto =>{

        const {marca, modelo} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo}
            
            `;

            //insertar en el HTML 
            resultado.appendChild(autoHTML);
    })
} 
