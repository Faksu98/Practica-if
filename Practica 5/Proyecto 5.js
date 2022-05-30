const MASCOTAS_MIN = 2
const MASCOTAS_MAX = 3
const TIEMPO_MIN = "30 min"
const TIEMPO_MAX = "1 hs"

var mascotasCliente = prompt ("ingrese la cantidad de mascotas que tiene", ["numero de mascotas"]);
var tiempoPaseo = prompt ("Cuanto tiempo quiere que dure el paseo de su mascota acuerdese que los paseos son de 30min o 1hs", ["tiempo paseo"]);

if(((mascotasCliente == MASCOTAS_MIN) || (mascotasCliente == MASCOTAS_MAX)) && ((tiempoPaseo = TIEMPO_MIN) || (tiempoPaseo = TIEMPO_MAX))){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> Pronto parsara la persona encargada de pasear a sus mascotas </1>
    `;
}else if(((mascotasCliente < MASCOTAS_MIN) || (mascotasCliente>MASCOTAS_MAX)) && (((tiempoPaseo >= TIEMPO_MIN) || (tiempoPaseo <= TIEMPO_MAX)))){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> Usted no cumple con los requisitos para proporcionarle un paseador </1>
    `;
}