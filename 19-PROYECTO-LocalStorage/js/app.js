//Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event listeners
eventListeners();

function eventListeners() {
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        console.log(tweets);

        crearHTML();
    });
 }



 // Funciones
function agregarTweet(e) {
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validacion
     if (tweet === '') {
       mostrarError('UN mensaje no puede ir vacio');

        return; //evita que se ejecuten mas lineas de codigo
     }

     const tweetObj = {
        id: Date.now(),
        tweet
     }

     // Añadir al arreglo de tweets
     tweets = [...tweets, tweetObj];

     //Una vez agregado, crear HTMl
     crearHTML();

     //reiniociar el formulario
     formulario.reset();
}


// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 2 segundos
    setTimeout(()=>{
        mensajeError.remove();
    }, 2000);
}


//Muestra el resultado de los tweets
function crearHTML() {

    limpiarHTML();
    
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear HTML 
            const li = document.createElement('li');

            //añadir texto
            li.innerText = tweet.tweet;

            //asignar el boton 
            li.appendChild(btnEliminar);

            // insertarlo en el HTML 
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega los tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
   
    crearHTML();
}

//limpiar HTML
function limpiarHTML() {
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}