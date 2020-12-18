// valor 5 puntos
alert("Empieza el ejercicio 7");
// No tocar esta función
function sleep(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

async function crearyRellenarListaElementos() {
    alert("comenzar");
    /// completad esta función para que cree una <ol> de ej7.html
    // usando la función sleep de la siguiente manera:
    // await sleep(num_segundos);
    // cread en un bucle, 10 elementos de lista dentro de la ol, en los que ponga la hora, segundos incluidos distanciados por 
    // un número de segundos aleatorio entre 1 y 3.
    await sleep(5);
    let tabla1 = document.createElement("ol");
    document.body.appendChild(tabla1);
    for (let i = 0; i < 11; i++) {
        let hora = (new Date()).getHours();
        let minutos = (new Date()).getMinutes();
        let segundos = (new Date()).getSeconds();
        tabla1.innerHTML += "<li>" + hora + minutos + (segundos + Math.floor((Math.random() * 3) + 1)) + "</li>";
    }

}

crearyRellenarListaElementos();