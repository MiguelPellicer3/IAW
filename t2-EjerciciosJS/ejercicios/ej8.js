//valor 5 puntos
alert("Empieza el ejercicio 8");
//formulario simple
//Cread mediante javascript 3 campos input de tipo texto y un botón al lado de cada campo en el body del archivo ej8.html
//Al hacer click sobre el input, su contenido se tendrá que borrar.
//Al hacer click sobre el botón, tendrá que mostrar un alert con el contenido del input que está a su lado.
//Para rellenar el los inputs, tendréis que hacer uso del tabulador.
let input1 = document.createElement("input");
input1.setAttribute(onclick, borrarContenido1())
document.body.appendChild(input1);
let boton1 = document.createElement("button");
button1.setAttribute(onclick, mostrarContenido1());
document.body.appendChild(boton1);

let input2 = document.createElement("input");
input2.setAttribute(onclick, borrarContenido2());
document.body.appendChild(input2);
let boton2 = document.createElement("button");
button2.setAttribute(onclick, mostrarContenido2());
document.body.appendChild(boton2);

let input3 = document.createElement("input");
input2.setAttribute(onclick, borrarContenido3());
document.body.appendChild(input3);
let boton3 = document.createElement("button");
button3.setAttribute(onclick, mostrarContenido3());
document.body.appendChild(boton3);

function borrarContenido1() {
    input1.innerHTML = "";
}

function borrarContenido2() {
    input2.innerHTML = "";
}

function borrarContenido3() {
    input3.innerHTML = "";
}

function mostrarContenido1() {
    alert(input1.innerHTML);
}

function mostrarContenido2() {
    alert(input2.innerHTML);
}

function mostrarContenido3() {
    alert(input3.innerHTML);
}