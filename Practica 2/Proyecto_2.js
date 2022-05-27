const ETHEREUM = 13540
const DOLAR = 39685.40

let Bitcoin = "por def";
var bxe = "por def";
var bxd = "por def;"

function calcularBxE(){
    Bitcoin = document.querySelector('#E').value;
    if(Bitcoin >= 1){
        document.querySelector('#resultado_final').innerHTML=`
            <h1> usted a recibio  ${bxe = Bitcoin * ETHEREUM} </h1>
        `;
    }
}

function calcularBxD(){
    Bitcoin = document.querySelector('#D').value;
    if(Bitcoin >= 1){
        document.querySelector('#resultado_final').innerHTML=`
        <h1> usted a recibio  ${bxd = Bitcoin * DOLAR} </h1>
    `;
    }
}
