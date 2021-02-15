const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const puerto = 3000;
const mariadb = require('mariadb');

dotenv.config();//Lee las variables de entrono del fichero .env y las exporta

app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');

const datosbd = {
    host: process.env.BD_HOST,
    port: process.env.BD_PUERTO,
    user: process.env.BD_USUARIO,
    password: process.env.BD_PASS,
    database: process.env.BD_USUARIO + '_' + process.env.BD_SCHEMA,
    connectionLimit: 5
}

app.get('/', function (req, res) {
    const grupoConexion = mariadb.createPool(datosbd)
    grupoConexion.getConnection()
        .then(conexion => {
            console.log("Conectado:", conexion.threadId);
            conexion.query("SELECT * FROM Pelicula")
                .then(filas => {
                    res.render('index',{datosTabla:filas});
                }).catch(error => { console.log(error) });
            conexion.release();
        })
        .catch(error => { console.log("no conectado", error) });
})


app.listen(puerto, inicioservidor());
function inicioservidor() {
    console.log(`Servidor iniciado en  http://localhost:${puerto}`);
}