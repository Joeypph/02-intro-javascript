/*Objetos Literales */

const persona = {
    nombre:  'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'NYC',
        zip: 98238745,
        lat: 9.8938,
        lng:123123
    }
}
console.log(persona);

const persona2 = {...persona}

console.log(persona2);