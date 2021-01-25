const express = require('express');
const app = express();

app.get('/:key/:value',

function devolverJSON(req,res) {
    let jsonRespuesta = {"key":req.params.key,
                        "value": req.params.value};
    res.json(jsonRespuesta);
}
);




app.listen(3000,iniciarservidor());

function iniciarservidor() {
    console.log("Servidor iniciado");
}