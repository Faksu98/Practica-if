const ETHEREUM = 13540
const DOLAR = 39685.40

let Bitcoin = "por def";
var bxe = "por def";
var bxd = "por def;"

function calcularBxE(){
    if(Bitcoin >= 1){
        document.querySelector('#resultado_final').innerHTML=`
            <h1> usted a recibio  ${Bitcoin * ETHEREUM : bxe} </h1>
        `;
    }
}

function calcularBxD(){
    if(Bitcoin >= 1){
        document.querySelector('#resultado_final').innerHTML=`
        <h1> usted a recibio  ${Bitcoin * DOLAR; {bxd}} </h1>
    `;
    }
}
