const express= require('express');
const app = express();
const path= require('path');
const puerto = 3000;

let rutaPublic= path.join(__dirname,'public');
const datos={
    'itemsAside': ['main','pagina2','pagina3']
    
}
app.use(express.static(rutaPublic));

app.set('view engine','ejs'); //para que utilice ejs

app.get('/',function (req,res) {
    res.render('index', {
        ...datos,
        pagina: 'main'
    });
})

app.get('/:pag',function (req,res) {
    if(datos.itemsAside.indexOf(req.params.pag == -1)){
        // index of devuelve un numero mayor que 0 si existe
        // si no existe devuelve -1
        datos.pagina='error';
    }else{
    datos.pagina=req.params.pag;
    }
    res.render('index',datos);
})

app.listen(puerto,iniciaservidor());
function iniciaservidor() {
    console.log(`Servidor iniciado en 
    http://localhost:${puerto}`);
}