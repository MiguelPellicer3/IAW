let listaTarea = document.getElementById("listaTarea")
let textoTarea = document.getElementById("inputTarea")

function agregarTarea() {
    if (textoTarea.value != "") {
        let liTarea = document.createElement("li");
        let liTexto = document.createElement("span");
        let papelera = document.createElement("img");
        let lapiz = document.createElement("img");
        lapiz.src = "./th.jpeg";
        lapiz.className = "lapiz";
        lapiz.addEventListener("click", editarTarea);
        papelera.src = "./trash1600.png";
        papelera.className = "papelera";
        papelera.addEventListener("click", borrarEstaTarea);
        liTexto.innerHTML = textoTarea.value;
        liTarea.appendChild(liTexto);
        liTarea.appendChild(lapiz);
        liTarea.appendChild(papelera);
        listaTarea.appendChild(liTarea);
        textoTarea.value = "";
    }
    textoTarea.focus();
}

function editarTarea(evento) {
    let valorDevuelto = prompt("Renombra la tarea", evento.target.parentElement[0]);
}

function borrarEstaTarea(evento) {
    evento.target.parentElement.remove();
}

function gestionarTecla(evento) {
    // console.log(evento)
    if (evento.keyCode == 13) {
        agregarTarea();
    }
}

function borrarTarea() {
    let valorDevuelto = prompt("Escribe el número de tareas que quieres eliminar");
    if (valorDevuelto > 0 && valorDevuelto <= listaTarea.childElementCount) {
        listaTarea.children[valorDevuelto - 1].remove();
        //listaTarea.removeChild(listaTarea.children[valorDevuelto - 1]);        
    } else {
        alert("Esa tarea no existe en la lista");
    }

}