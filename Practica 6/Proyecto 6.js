const ANIMALES_FANTASTICOS = "Animales Fantasticos"
const DOCTOR_EXTRAÑO = "Doctor Strange"
const BOB_AMBORGESA = "Bobs Burgers"

let seleccion = "por def";

function verificacion(){
    seleccion = document.querySelector('#Seleccion').value;
    if (seleccion == ANIMALES_FANTASTICOS){
        document.querySelector('#box_pelicula').innerHTML = `
        <h3> Por favor ingrese a la sala numero 1 </3>
        `;
    }else if(seleccion == DOCTOR_EXTRAÑO){
            document.querySelector('#box_pelicula').innerHTML = `
            <h3> Por favor ingrese a la sala numero 2 </3>
            `;
    }else(seleccion == BOB_AMBORGESA){
        document.querySelector('#box_pelicula').innerHTML = `
        <h3> Por favor ingrese a la sala numero 3 </3>
        `;
    }
}