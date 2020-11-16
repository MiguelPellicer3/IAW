//valor 3
alert("Empieza el ejercicio 5");

/*
 El operador typeof devuelve una cadena que contiene el tipo de una variable o literal
 por ejemplo ejecutad las siguietes líneas en una consola javascript (en el navegador, F12 id a console y escribidlas una por una dadle a enter para ejecutar cada una). Escribe a continuación de '//--> Respuesta:' lo que ha salido en el navegador.
 Este operador se puede ejecutar también como una función con paréntesis.
 typeof variable1 es equivalente a typeof(variable1)

 typeof 2
 //--> Respuesta: number
  
 typeof "Hola Mundo"
 //--> Respuesta: string
 
 typeof [2,3]
 typeof([2,3])
 //--> Respuesta: object
 
 typeof 2.3
 typeof(2.3)
 //--> Respuesta: number

 typeof {"propiedad": "valor"}
 typeof({"propiedad": "valor"})
 //--> Respuesta: object


 // En este caso ejecuta primero esta línea
 let objeto1 = { "propiedad1": "valor", "propiedad2": 25.34, "propiedad3": true }
 // y luego esta otra:
 typeof objeto1
 //--> Respuesta: object

*/

/*

    Por otra parte, la instrucción throw, "lanza" un error y cancela la ejecución del resto del programa. Por ejemplo la siguiente función imprimiría hola mundo y lanzaría el error y saldría sin imprimir la 3a línea (puedes probar a copiar las lineas de la 38 a la 44 para probarlo en la consola. En firefox, quizá tengas que escribir primero allow paste en la consola)

    function lanzarError(){
        console.log("hola mundo");
        throw "Esto es un error";
        console.log("Esto no se va a ejecutar");
    }

    lanzarError();


*/

// En la siguiente función, rellena la condición del if comprobación, de manera que si op1 no es un número o bien op2 no es un número o bien ninguno de los 2 lo son, se lance la excepción

function suma(op1, op2) {
    let resultado = undefined;
    if (typeof op1 != "number" || typeof op2 != "number") {
        throw `error funcion suma(parametro1, parametro2):
    Ambos parámetros deben ser número: 
     -El primer parámetro es ${typeof op1}
     -El segundo parámetro es ${typeof op2}`
    } else {
        resultado = op1 + op2;
    }
    alert("Resultado: " + resultado);
    return resultado;
}