const express = require('express');
const app = express();
const path= require('path');

app.set("puerto", 3000);

app.get('/',
function (req,res) {
    let pathtoIndex = path.join(__dirname,"public" ,"index.html");
    res.sendFile(pathtoIndex);
}
)

app.listen(app.get("puerto"),inicioservidor(),

    function inicioservidor() {
    console.log('Servidor iniciado en:${app.get("puerto")}');
    }
)