let resPromesa = new Promise(function(f_exito, f_error) {
    setTimeout(function numAleatorio() {
        f_exito(Math.random());
    }, 3000);
})
resPromesa.then(
    function(num) {
        document.getElementById("resultado").innerHTML = num;
    }
)
document.getElementById("resultado").innerHTML = "Hola Mundo";

let bob = a => a + 100;
console.log(bob(5));