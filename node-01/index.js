const os = require("os");
const fs = require("fs");

console.log("Tiempo encendido: " + os.uptime());
console.log("Memoria total: " + os.totalmem());
console.log("Sistema opertativo: " + os.type());

fs.readFile("./datos.json", "utf8", (err, buffer) => console.log(buffer));

let persona = JSON.parse(fs.readFileSync("./datos.json", "utf8"));

let objeto = { "hola": "mundo" }

console.log(objeto);
console.log(JSON.stringify(objeto));
console.log(persona);