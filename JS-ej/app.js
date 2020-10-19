const mensaje1 = "Quieres cambiar el contenido del párrafo"
const mensaje2 = "Quieres añadir un párrafo"
const mensaje3 = "Quieres crear una lista"

let parrafo1 = document.getElementById("p1");

console.log(parrafo1.innerHTML);

if (confirm(mensaje1)) {
    parrafo1.innerHTML = "contenido cambiado";
}

function crearParrafo() {
    if (confirm(mensaje2)) {
        let parrafoNuevo = document.createElement("p");
        document.body.appendChild(parrafoNuevo);
        parrafoNuevo.innerHTML = "Hola párrafo";
        parrafoNuevo.id = "pn";
        parrafoNuevo.className = "advertencia"
    }
}

if (confirm(mensaje3)) {
    let listaNueva = document.createElement("ul");
    document.body.appendChild(listaNueva);
    listaNueva.id = "lista1";
    for (let i = 0; i < 5; i++) {
        let puntoNuevo = document.createElement("li");
        listaNueva.appendChild(puntoNuevo);
        puntoNuevo.innerHTML = "Elemento número " + (i + 1);
    }
}