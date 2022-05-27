const NUMERO_GANADOR = 14;

var respuesta1 = prompt ("Ingrese el primer numero", ["Numero1"]);
var respuesta2 = prompt ("Ingrese el segundo numero", ["Numero2"]);
var respuesta3 = prompt ("Ingrese el tercer numero", ["Numero3"]);

if ((respuesta1 == NUMERO_GANADOR) && (respuesta2 == NUMERO_GANADOR) && (respuesta3 == NUMERO_GANADOR)){
    document.querySelector('#mensaje_resultado').innerHTML = `
        <h1> FELICIDADES USTED ACERTO A LOS 3 NUMEROS!! Su primero es un auto 0km </1>
        `;
}else if ((respuesta1 == NUMERO_GANADOR) && (respuesta2 == NUMERO_GANADOR) && (respuesta3 != NUMERO_GANADOR)){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> CASI!!! usted acerto 2 numero su primero es una bicicleta </1>
    `;
/* }else{
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> mal ahi no acertaste ningun numero siga participando </1>
    `;
} */

}else ((respuesta1 != NUMERO_GANADOR) && ((respuesta2 != NUMERO_GANADOR) && (respuesta3 != NUMERO_GANADOR)));{
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> mal ahi no acertaste ningun numero siga participando </1>
    `;
}