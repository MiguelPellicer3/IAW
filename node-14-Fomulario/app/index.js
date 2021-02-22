const dotenv = require('dotenv');
dotenv.config();
const express= require('express');
const bodyParser = require('body-parser');
const mariadb =require('mariadb');
const path = require('path');
const app = express();
const puerto=3000;

app.use(bodyParser.urlencoded({extended : false}));

const dirPublic = path.join(__dirname,'public');
app.use(express.static(dirPublic));

const datosBD = {
    //Dirección del servidor
    host: process.env.BD_HOST,
    port: process.env.BD_PUERTO,
    user: process.env.BD_USUARIO,
    password: process.env.BD_PASS,
    database: process.env.BD_USUARIO + '_' + process.env.BD_SCHEMA,
    connectionLimit: 5
}

app.post('/guardarPeli', function (req,res){
    const titulo= req.body.ntitulo;
    const duracion = req.body.nduracion;

    const grupoConexion = mariadb.createPool(datosBD);
    grupoConexion.getConnection()
        .then(conexion => {
            conexion.query("INSERT INTO Pelicula(titulo,duracion,id_Director) VALUES(?,?,?)",[titulo,duracion,1])
            .then(resultado =>{
                console.log(resultado);
            })
        })
        .catch(error => {
            console.log("No conectado", error);
        });
})

app.listen(puerto, iniciaservidor());
function iniciaservidor(){
    console.log(`Servidor iniciado en:
    http://localhost:${puerto}`);
}