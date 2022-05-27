const MASCOTAS_MIN = 2
const MASCOTAS_MAX = 3

var mascotasCliente = prompt ("ingrese la cantidad de mascotas que tiene", ["numero de mascotas"]);

if((mascotasCliente == MASCOTAS_MIN) || (mascotasCliente == MASCOTAS_MAX)){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> Pronto parsara la persona encargada de pasear a sus mascotas </1>
    `;
}else if(mascotasCliente < MASCOTAS_MIN){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> Usted no posee la canitdad minima de mascotas para proporcionarle un paseador </1>
    `;
}else(mascotasCliente > MASCOTAS_MAX){
    document.querySelector('#mensaje_resultado').innerHTML = `
    <h1> Usted excede la canitdad maxima de mascotas para proporcionarle un paseador </1>
    `;
}