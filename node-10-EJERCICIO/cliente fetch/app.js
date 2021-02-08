alert('Aún no hemos empezado');

fetch('http://localhost:3000')
    .then(respuesta => respuesta.json()) //convierte la respuesta en JSON
    .then( objeto => anadirLista(objeto.lista))
    .catch( error => console.error( "Fallo:", error) );

alert('Ya hemos empezado');

function anadirLista(objeto) {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (const texto of objeto) {
        let puntoNuevo = document.createElement("li");
        ul.appendChild(puntoNuevo);
        puntoNuevo.innerHTML=texto;
    };
}