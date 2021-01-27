const express = require('express');
const app = express();
const path= require('path');

app.set("puerto", 3000);

//Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',
function devolverForm(req,res) {
    let pathtoIndex = path.join(__dirname,"form.html");
    res.sendFile(pathtoIndex);
}
);

app.post('/form',function (req,res) {
    // SIN BODY PARSER 
    //console.log("petición recibida: " + req.method);
    // let body = '';
    // req.on('data',function (dato) {
    //     body+=dato.toString();
    // });
    // req.on('end',function () {
    //     console.log(body);
    //     res.sendFile(path.join(__dirname,"form.html"));
    //})

    let recibido = req.body;
    console.log(`El usuario ha introducido ${recibido.vName} en el campo de nombre y el ${recibido.vSurname} en el compo apellido`);
    res.sendStatus(200);
    
})


app.listen(app.get("puerto"),inicioservidor());

    function inicioservidor() {
    console.log(
        `Servidor iniciado en http://localhost:${app.get("puerto")}`);
    }