const express = require('express');
const app = express();
const path= require('path');

app.set("puerto", 3000);

app.get('/',
function devolverForm(req,res) {
    let pathtoIndex = path.join(__dirname,"form.html");
    res.sendFile(pathtoIndex);
}
);

app.post('/',function (req,res) {
    
})


app.listen(app.get("puerto"),inicioservidor());

    function inicioservidor() {
    console.log(
        `Servidor iniciado en http://localhost:${app.get("puerto")}`);
    }