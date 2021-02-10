const express= require('express');
const app = express();
const path= require('path');
const puerto = 3000;

let rutaPublic= path.join(__dirname,'public');
app.use(express.static(rutaPublic));

app.set('view engine','ejs'); //para que utilice ejs

app.get('/',function (req,res) {
    let listaAside={
        'items': ['uno','dos','tres']
    }
    res.render('index', listaAside);
})

app.listen(puerto,iniciaservidor());
function iniciaservidor() {
    console.log(`Servidor iniciado en 
    http://localhost:${puerto}`);
}