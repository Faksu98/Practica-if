const ETHEREUM = 13540
const DOLAR = 39685.40

let bitcoin = "por def";
var bxe = "por def";
var bxd = "por def;"

bitcoin = document.querySelector('#bitcoin').value;

function calcularBxE(){
    bitcoin = document.querySelector('#E').value;
    if(bitcoin >= 1){
        document.querySelector('#resultado_final').innerHTML=`
            <h1> usted a recibio  ${bxe = bitcoin * ETHEREUM} </h1>
        `;
    }
}

function calcularBxD(){
    bitcoin = document.querySelector('#D').value;
    if(bitcoin >= 1){
        document.querySelector('#resultado_final').innerHTML=`
        <h1> usted a recibio  ${bxd = bitcoin * DOLAR} </h1>
    `;
    }
}
