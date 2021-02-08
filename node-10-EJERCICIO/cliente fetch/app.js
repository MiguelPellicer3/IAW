alert('Aún no hemos empezado');

fetch('http://localhost:3000/lista')
    .then(respuesta => respuesta.json()) //convierte la respuesta en JSON
    .then( objeto => anadirLista(objeto.lista))
    .catch( error => console.error( "Fallo:", error) );

fetch('http://localhost:3000/texto')
.then(respuesta => respuesta.json()) //convierte la respuesta en JSON
.then( objeto => rellenartxeto(objeto.texto))
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
function rellenartxeto(txt) {
    let p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML=txt;
}