//valor 5
alert("Empieza el ejercicio 6");
/*
Tenemos una serie de objetos como los que siguen:

{ 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": 63,
  "casado": true
}


Son objetos persona en los que nombre y apellido deben ser un string, edad un number y casado un boolean.

Crea una función que, pasado un objeto persona nos devuelva true si todas sus propiedades cumplen las condiciones de la línea anterior y false en caso de que alguna no la cumpla.

Por cada propiedad que no cumpla con el tipo que se le espera, se deberá escribir en la consola de error mediante console.error("Mensaje de error") informando en el mensaje de error de cuál es el tipo y cuál se esperaba.

Por ejemplo: El código siguiente

let persona1 = { 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": "63",
  "casado": [true]
}

comprobarPersona(persona1);
deberá mostrar error en la edad y en la propiedad "casado".
//

*/

function comprobarPersona(p) {
    let tiponombre = typeof p.nombre
    let tipoapelldo = typeof p.apellido
    let tipoedad = typeof p.edad
    let tipocasado = typeof p.casado

    if (tiponombre != "string" || tipoapelldo != "string" || tipoedad != "number" || tipocasado != "boolean") {
        if (tiponombre != "string") {
            console.log("error de tipo, se esperaba un STRING y has introducido un:", tiponombre);
        }
        if (tipoapelldo != "string") {
            console.log("error de tipo, se esperaba un STRING y has introducido un:", tipoapelldo);
        }
        if (tipoedad != "number") {
            console.log("error de tipo, se esperaba un NUMBER y has introducido un:", tipoedad);
        }
        if (tipocasado != "boolean") {
            console.log("error de tipo, se esperaba un BOOLEAN y has introducido un:", tipocasado);
        }
        return false;
    } else {
        return true;
    }
}
comprobarPersona(persona1);