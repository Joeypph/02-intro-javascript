/*Desestructuración*/

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave:'Ironman'
}

const {nombre} = persona;

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);
console.log(nombre);

const useContext = ({clave,nombre,edad,rango = 'Capitan'}) =>{
    //console.log(nombre,edad,rango); 
    
    return{
        nombreClave: clave,
        anios: edad
    }
}

const {nombreClave,anios} = useContext(persona);
console.log(avenger);
