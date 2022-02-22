/*Funciones*/

const saludar= function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) =>`Hola, ${nombre}`;
const saludar4 = () =>`Hola mundo`;



console.log(saludar('Jose '));
console.log(saludar2('Jose '));
console.log(saludar3('Jose '));
console.log(saludar4());


const getUser = () =>({
        uid: 'ABC123',
        username: 'El_Papi123sd'
    })

const user = getUser();
console.log(user);

const gerUsuarioActivo = (nombre) =>({
        uid:'AVasd2',
        nombre: nombre
    })


const usuarioActivo = gerUsuarioActivo('José');
console.log(usuarioActivo);