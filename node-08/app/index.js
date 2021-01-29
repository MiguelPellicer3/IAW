const express = require ('express');
const app = express();
app.set('puerto', 3000);
app.set('view engine', 'ejs');
app.set('views',__dirname+'/vistas');


app.get('/',function (req,res) {
    res.render('paginas/inicio',{texto:"HOLA MUNDO"});
});




app.listen(app.get('puerto'),
function () {
    console.log(`Que bonico ta quedao jomio http://localhost:${app.get('puerto')}`);
})