alert('JS en cliente');
let respuesta;
let httpreq = new XMLHttpRequest();

httpreq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        respuesta = JSON.parse(this.responseText);
        rellenaparrafo(respuesta);
    }
};


let url = "http://localhost:3000";
httpreq.open("GET",url,true);
httpreq.send();
function rellenaparrafo(objeto) {
    let parrafo = document.getElementById("idPa");
    parrafo.innerHTML=objeto.nombre;
}