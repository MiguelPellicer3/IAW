const express= require('express');
const app = express();
const puerto = 3000;

app.get('/lista', function (req,res) {
    let respuesta={
        "lista" : ["hola","adiós","pero que bonito se ha quedado el día", "pues si la verdad"]
    }
    res.header("Access-Control-Allow-Origin","*");
    res.json(respuesta);
});
app.get('/texto', function (req,res) {
    let respuesta={
        "texto" : "Hola Mundo"
    }
    res.header("Access-Control-Allow-Origin","*");
    res.json(respuesta);
});




app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('Ha prendio to correcto');
}
