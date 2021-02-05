const express= require('express');
const app = express();
const puerto = 3000;

app.get('/', function (req,res) {
    let respuesta={
        "nombre" : "Porco dio"
    }
    //Permitir conexión desde otros orígenes
    res.header("Access-Control-Allow-Origin","*");
    res.json(respuesta);
})




app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('Ha prendio to correcto');
}
