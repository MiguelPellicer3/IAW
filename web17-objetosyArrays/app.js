let array1 = [4, 5, 6, 7, 8, 9, 10];
let array2 = array1;

let string1 = "Hola Mundo";
let string2 = string1;

let objeto1 = {
    "propiedad1": 3,
    "propiedad2": "Hola"
}

let objetoclon = {...objeto1 }
objetoclon.propiedad1 = 10;

let objeto2 = objeto1
objeto2.propiedad2 = 5;

console.log(objeto2);
console.log(objeto1);
console.log(objetoclon);

let objetoA = {
    "p1": 4,
    "prop2": "HOla",
    "pr6": true
}

let objetoB = {
    "p1": 4,
    "prop2": "Hala",
    "pr6": true
}
let objetoAB = {...objetoB, ...objetoA };

console.log(objetoAB);

let simple = [4, 5, 6, 7, 8, 9]

let doble = simple.map(doblar)

function doblar(x) {
    return x * 2;
}

let numGrandes = simple.filter(elemento => elemento > 6);
let numGrandes2 = simple.filter(function(e) {
    return e > 6;
})

console.log(simple);
console.log(doble);
console.log(numGrandes);
console.log(numGrandes);

//crear un array de nombresa de mujeres
//con map crear otro array que añada "Doña " delante de cada nombre

//filtrar los nombres cortos y ponerlos en otro array