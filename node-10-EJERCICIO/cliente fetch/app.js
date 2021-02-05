alert('Aún no hemos empezado');

fetch('http://localhost:3000')
    .then(respuesta => respuesta.json()) //convierte la respuesta en JSON
    .then( objeto => rellenarParrafo(objeto.nombre))
    .catch( error => console.error( "Fallo:", error) );

alert('Ya hemos empezado');

function rellenarParrafo(texto) {
    //let p = document.getElementById('idPa');
    let p = document.querySelector('#idPa');
    p.innerHTML= texto;
}