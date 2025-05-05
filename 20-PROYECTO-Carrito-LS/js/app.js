//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminaCurso);

    //Muestra los cursos de local Storage 
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];

        carritoHTML();
    });

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHTML(); //eliminamos todo el HTML
    })
}


//funciones
function agregarCurso(e) {
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDtosCurso(cursoSeleccionado);
    }

}

//elimina un curso del carrito 
function eliminaCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina el arreglo del articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId );

        carritoHTML(); //itera sobre el carrito y muestra su HTML 
        mostrarToast('Curso eliminado del carrito', '#dc3545');
    }

}

// lee el contenido del HTML al que le dimos click y extraer la informacion del curso
function leerDtosCurso(curso) { 
   //console.log(curso);

   //crear un objeto con el contenido del curso actual
   const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    prercio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
   }

   // revisa si un elemento ya existe en el carrito
   const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
   if(existe) {
    // Actualiza la cantidad
    const cursos = articulosCarrito.map(curso => {
        if( curso.id === infoCurso.id) {
            curso.cantidad++;
            return curso; // retorna el objeto actualizado
        } else{
            return curso; //retorna los objetos que no son los duplicados
        }
    });
    articulosCarrito = [...cursos];
   } else {
    //agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
   }

   
  

   console.log(articulosCarrito);
   carritoHTML()
   mostrarToast('Curso agregado al carrito', '#28a745');
}



//Muestra el carrito de compras en el HTML 
function carritoHTML() { 

    //Limpiar el HTML 
    limpiarHTML()

    //Recorrer el carrito y genera el HTML 
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, prercio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td> 
        <td>${titulo}</td>
        <td>${prercio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row) ;
});

//Agregar el carrito de compras al storage 
sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML() { 
    //forma lenta
    //contenedorCarrito.innerHTML = '';


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
function mostrarToast(mensaje, color = '#333') {
    const toast = document.getElementById('toast');
    toast.textContent = mensaje;
    toast.style.backgroundColor = color;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
