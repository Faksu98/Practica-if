const ANIO_ACTUAL = 2022;
const ENERGIA_NECESARIA = 2.42;

let anioIngresado = "por def";
let energiaIngresada = "por def";

let anioViajado = "por def";

function calcular(){
    anioIngresado = document.querySelector('#anio_ingresado').value;
    energiaIngresada = document.querySelector('#energia_ingresada').value;

    if ((anioIngresado == ANIO_ACTUAL) && (energiaIngresada >= ENERGIA_NECESARIA)){
        document.querySelector('#resultado_final').innerHTML = `
        <h1> Usted se encuentra en el presente, año 2022 </h1>
        `;           
    }else if ((anioIngresado > ANIO_ACTUAL) && (energiaIngresada >= ENERGIA_NECESARIA)){
        anioViajado = anioIngresado - ANIO_ACTUAL
        document.querySelector('#resultado_final').innerHTML = `
        <h1> Usted se encuentra en el futuro, viajo ${anioViajado} años </h1>
        `;
    }else if ((anioIngresado < ANIO_ACTUAL) && (energiaIngresada >= ENERGIA_NECESARIA)){
        anioViajado = ANIO_ACTUAL - anioIngresado
        document.querySelector('#resultado_final').innerHTML = `
        <h1> Usted se encuentra en el pasado, usted retrocedio ${anioViajado} años </h1>
        `;
    }else{
        document.querySelector('#resultado_final').innerHTML = `
        <h1> Lo sentimos usted no posee de la energia necesaria para viajar </h1>
        `;
    }
}

