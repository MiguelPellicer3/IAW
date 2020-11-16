//valor 2
alert("Empieza el ejercicio 3");
// Crea una funcion llamada cierto sin parámetros que siempre devuelva true.
function cierto() {
    return true;
}


// Crea una función llamada falso sin parámetros que utilice la función anterior para devolver siempre falso
function falso() {
    let hola = cierto();
    return !hola;
}