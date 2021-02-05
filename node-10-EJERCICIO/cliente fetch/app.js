const bodyParser = require("body-parser");

alert('Aún no hemos empezado');

fetch('http://localhost:3000')
    .then(respuesta => respuesta.json()) //convierte la respuesta en JSON
    .then( objeto => anadirLista(objeto.lista))
    .catch( error => console.error( "Fallo:", error) );

alert('Ya hemos empezado');

function anadirLista(texto) {
    let lista = document.createElement("ul");
    document.body.appendChild(lista);
    objeto.lista.forEach(elemento => {
        let puntoNuevo = document.createElement("li");
        lista.appendChild(puntoNuevo);
        puntoNuevo.innerHTML=elemento;
    });
}