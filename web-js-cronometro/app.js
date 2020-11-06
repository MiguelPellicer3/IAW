let contador = 0;
let objetoTimer;

function empezar() {
    objetoTimer = setInterval(incrementar, 1000);
}

function reset() {
    document.getElementById("crono").innerHTML = 0;
    contador = 0;
}

function parar() {
    window.clearInterval(objetoTimer);

}

function incrementar() {
    contador++;
    document.getElementById("crono").innerHTML = contador;
}