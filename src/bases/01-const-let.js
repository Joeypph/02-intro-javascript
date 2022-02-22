//Constantes y variables 

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado= 4;

console.log(nombre,apellido,valorDado);

/*Variables de scope */

if(true){
    const nombre = 'Peter'
    let valorDado = 6;
    console.log(valorDado,nombre);
}

