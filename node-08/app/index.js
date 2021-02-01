const express = require ('express');
const app = express();
const path = require('path');
const { Recoverable } = require('repl');

let dirVistas = path.join(__dirname,'vistas');


app.set('puerto', 3000);
app.set('view engine', 'ejs');
app.set('views',dirVistas);


app.get('/',function (req,res) {
    res.render('paginas/inicio',
    {
        texto:"HOLA MUNDO", 
        ip:req.ip, 
        path:req.path,
        protocolo:req.protocol,
        urlbase:req.originalUrl,
        seguro:req.secure,
    });
});

app.get('/style.css', function (req,res) {
    let rutacss = path.join(__dirname,'css','style.css');
    res.sendFile(rutacss);
})




app.listen(app.get('puerto'),
function () {
    console.log(`Que bonico ta quedao jomio http://localhost:${app.get('puerto')}`);
})