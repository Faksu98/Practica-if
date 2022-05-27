const INGREDIENTE1 = "Verduras"
const INGREDIENTE2 = "Pollo"
const INGREDIENTE3 = "Carne"
const INGREDIENTE4 = "Agua"
const INGREDIENTE5 = "Condimento"
const INGREDIENTE_EXTRA = "Cubo de caldo"

var respuesta1 = prompt ("ingrese el primer ingrediente", ["ingrediente"]);
var respuesta2 = prompt ("ingrese el segundo ingrediente", ["ingrediente"]);
var respuesta3 = prompt ("ingrese el tercer ingrediente", ["ingrediente"]);
var respuesta4 = prompt ("ingrese el cuartro ingrediente", ["ingrediente"]);
var respuesta5 = prompt ("ingrese el quinto ingrediente", ["ingrediente"]);
var respuestaExtra = prompt ("Necesita algo extra", ["ingrediente"]);

if ((respuesta1 == INGREDIENTE1) && (respuesta2 == INGREDIENTE2) && ((respuesta3 == INGREDIENTE3) || (respuesta4 == INGREDIENTE4)) && (respuesta5 == INGREDIENTE5)){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> tenes todos los ingrediente para hacer alta sopa!! </1>
    `;
}else if((respuesta1 == INGREDIENTE1) && (respuesta2 == INGREDIENTE2) && ((respuesta3 == INGREDIENTE3) || (respuesta4 == INGREDIENTE4)) && (respuesta5 != INGREDIENTE5) && (respuestaExtra == INGREDIENTE_EXTRA)){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> no tenes todos los ingredientes pero te va a salir una rica sopa </1>
    `;
}else{
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> no tenes ningun ingrediente para la sopa </1>
    `;
}