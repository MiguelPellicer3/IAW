// valor 6 puntos
alert("Empieza el ejercicio 9");
// haced que el div se mueva aleatoriamente por la pantalla hasta el final de la misma usando 
// setInterval
// para eso debéis crear una función que mueva unos píxeles a la izquierda o a la derecha y unos píxeles arriba o abajo sin salirse de los márgenes usando la propiedad
// style del div modificando adecuadamente su posición.
// window.screen.width y window.screen.height os darán el tamaño de la pantalla.
// el movimiento tiene que finalizar a los 5 segundos de haber empezado. Para eso usad un timeout para cancelar el interval
let div = document.getElementById("divMovil");

setInterval(function movimiento(elemento) {
    let estilo = elemento.style;
    let alto = window.screen.height;
    let ancho = window.screen.width;
    for (let i = 0; i < alto; i++) {
        estilo.top = i;
    }
    for (let i = 0; i < anchi.length - 100; i++) {
        estilo.left = i;
    }
}, 5000);