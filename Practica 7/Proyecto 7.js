const DESCUENTO_CARNE = 0.25;
const DESCUENTO_LACTEOS = 0.5;
const DESCUENTO_ENLATADO = 0.7;
const DESCUENTO_POLLO = DESCUENTO_CARNE + 0.05;
const DESCUENTO_PESCADO = DESCUENTO_CARNE + 0.05;

const NOMBRE_PRODUCTO_CARNE = "Carne";
const NOMBRE_PRUDUCTO_LACTEOS = "Lacteo";
const NOMBRE_PRODUCTO_ENLATADO = "Enlatado";
const NOMBRE_PRODUCTO_POLLO = "Pollo";
const NOMBRE_PRODUCTO_PESCADO = "Pescado";

let tipoProducto = "por def";
let precioProducto = "por def";
let precioFinal = "por def";

function calcular(){
    tipoProducto = document.querySelector('#tipo_producto').value;
    precioProducto = document.querySelector('#precio_producto').value;

    if( tipoProducto == NOMBRE_PRODUCTO_CARNE){
        precioFinal = precioProducto * (1 - DESCUENTO_CARNE);
        document.querySelector('#precio_final').innerHTML = `
        <h5> Precio final del producto ${precioFinal}<h/5>
        <h6> Decuento aplicado: 25% </h6>
        `;

    }else if( tipoProducto == NOMBRE_PRUDUCTO_LACTEOS){
        precioFinal = precioProducto * (1 - DESCUENTO_LACTEOS);
        document.querySelector('#precio_final').innerHTML = `
        <h5> Precio final del producto ${precioFinal}<h/5>
        <h6> Decuento aplicado: 50% </h6>
        `;
    }else if( tipoProducto == NOMBRE_PRODUCTO_ENLATADO){
        precioFinal = precioProducto * (1 - DESCUENTO_ENLATADO);
        document.querySelector('#precio_final').innerHTML = `
        <h5> Precio final del producto ${precioFinal}<h/5>
        <h6> Decuento aplicado: 70% </h6>
        `;
    }else if( tipoProducto == NOMBRE_PRODUCTO_POLLO){
        precioFinal = precioProducto * (1 - DESCUENTO_POLLO);
        document.querySelector('#precio_final').innerHTML = `
        <h5> Precio final del producto ${precioFinal}<h/5>
        <h6> Decuento aplicado: 30% </h6>
        `;
    }else if( tipoProducto == NOMBRE_PRODUCTO_PESCADO){
        precioFinal = precioProducto * (1 - DESCUENTO_PESCADO);
        document.querySelector('#precio_final').innerHTML = `
        <h5> Precio final del producto ${precioFinal}<h/5>
        <h6> Decuento aplicado: 30% </h6>
        `;
    }else{
        document.querySelector('#precio_final').innerHTML = `
          <h5> usted a ingresado mal los datos vuelva a intentarlo </h6>
        `;
    }
}

