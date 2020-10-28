function calcular() {
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let operacion = document.getElementById("operacion");
    let resultado;
    let parrafoResultado = document.getElementById("res");
    if (operacion.value == "suma") {
        resultado = suma(op1.value, op2.value);  
    }else if (operacion.value == "resta"){
        resultado=resta(op1.value, op2.value);
    }else if (operacion.value == "multi"){
        resultado=multi(op1.value, op2.value);
    }
    if (resultado != null) {
        parrafoResultado.innerHTML= resultado;    
    }else{
        parrafoResultado.innerHTML= "Error en los operandos";    
    }
}


function suma(o1, o2) {
    let resultado=0;
     if(isNaN(o1) == true ||  isNaN(o2) == true ){
        resultado = null;
     }else{
        resultado = (parseFloat(o1) +  parseFloat(o2)).toFixed(2);
     }
    return resultado;
}

function resta(o1, o2) {
    let resultado=0;
    if(isNaN(o1) == true || isNaN(o2) == true ){
        resultado = null;
    }else{
        resultado = (parseFloat(o1) - parseFloat(o2)).toFixed(2);
    }
    return resultado;
}

function multi(o1, o2) {
    let resultado=0;
    if(isNaN(o1) == true || isNaN(o2) == true ){
        resultado = null;
    }else{
        resultado = (parseFloat(o1) * parseFloat(o2)).toFixed(2);
    }
    return resultado;
}