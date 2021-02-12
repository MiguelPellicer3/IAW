const express= require('express');
const app= express();
const path= require('path');
const puerto = 3000;
const mariadb= require('mariadb');
const datosbd=    {
    host: 'iesguara.cf',
    port: 3700,
    user: 'profeasir1',
    password: 'profeisa1',
    database:'profeasir1_Peliculas2',
    connectionLimit: 5
}

app.get('/', function (req,res) {
    res.send('Hola mundo');
    const conexion = mariadb.createPool(datosbd)
})


app.listen(puerto, inicioservidor());
function inicioservidor() {
    console.log(`Servidor iniciado en  http://localhost:${puerto}`);
}