let listaTarea = document.getElementById("listaTarea")
let textoTarea = document.getElementById("inputTarea")

function agregarTarea() {
    let liTarea = document.createElement("li");
    liTarea.innerHTML = textoTarea.value;
    listaTarea.appendChild(liTarea);
    textoTarea.value = "";
}