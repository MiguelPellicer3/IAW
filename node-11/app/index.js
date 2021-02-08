const express= require('express');
const server = express();
const path= require('path');
const fs= require('fs');
server.set('puerto',3000);

const rutaIndex= path.join(__dirname,'..','public','index.html');
const rutaCSS= path.join(__dirname,'..','public','style.css');
const rutaAPP= path.join(__dirname,'..','public','app.js');
const rutaDatos= path.join(__dirname,'datos.json');

server.get('/',function (req,res) {
    res.sendFile(rutaIndex);
})

server.get('/style.css',function (req,res) {
    res.sendFile(rutaCSS);
})

server.get('/app.js',function (req,res) {
    res.sendFile(rutaAPP);
})

server.get('/api/:propiedad', function (req,res) {
    let prop = req.params.propiedad;
    let datostxt = fs.readFileSync(rutaDatos);
    let datos= JSON.parse(datostxt);
    if(datos.hasOwnProperty(prop)){
        res.send(datos[prop]);
    }else {
        res.send("ERROOOOOOR");
    }
})

server.listen(server.get('puerto'),servidoriniciado());
function servidoriniciado(){
    console.log(`Servidor arrancado en http://localhost:${server.get('puerto')}`)
}