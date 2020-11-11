let contador = 0;
let objetoTimer;

function empezar() {
    objetoTimer = setInterval(incrementar, 1000);
}

function empezarconCuentaAtras() {
    new Promise(function cuentaAtras() {
        setTimeout(function cuentaAtras() {
            // Crear cuenta atras y cuando finalice inicializar la funcion empezar

        })
    })
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