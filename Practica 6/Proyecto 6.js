const ANIMALES_FANTASTICOS = "Animales Fantasticos"
const DOCTOR_EXTRAÑO = "Doctor Strange"
const BOB_AMBORGESA = "Bobs Burgers"
const EDAD_MAXIMA = 18

let seleccion = "por def";
let edad = "por def";

function verificacion(){
    seleccion = document.querySelector('#Seleccion').value;
    edad = document.querySelector('#Validar').value;
    if ((seleccion == ANIMALES_FANTASTICOS) && (edad >= EDAD_MAXIMA)){
        document.querySelector('#box_pelicula').innerHTML = `
        <h3> Por favor ingrese a la sala numero 1 </3>
        `;
    }else if ((seleccion == ANIMALES_FANTASTICOS) && (edad < EDAD_MAXIMA)){
        document.querySelector('#mensaje_error').innerHTML = `
          <h3> lo sentimos usted no tiene la edad suficiente para ver esta pelicula </3>
        `;
    }else if((seleccion == DOCTOR_EXTRAÑO) && (edad >= EDAD_MAXIMA)){
            document.querySelector('#box_pelicula').innerHTML = `
            <h3> Por favor ingrese a la sala numero 2 </3>
            `;
    }else if ((seleccion == DOCTOR_EXTRAÑO) && (edad < EDAD_MAXIMA)){
            document.querySelector('#mensaje_error').innerHTML = `
              <h3> lo sentimos usted no tiene la edad suficiente para ver esta pelicula </3>
            `;
    }else if(seleccion == BOB_AMBORGESA){
        document.querySelector('#box_pelicula').innerHTML = `
        <h3> Por favor ingrese a la sala numero 3 </3>
        `;
    }else{}
}