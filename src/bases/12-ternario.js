const activo = true;

/* let mensaje = '';

if(activo){
  mensaje = 'Activo'
}else{
  mensaje = 'Inactivo'
}
console.log(mensaje); */

// forma de aplicar ternario si queremos que se haga algo con true y false 
const mensaje = activo ? 'Activo' : 'Inactivo'

// forma para aplicar  si solo true o si solo false
const mensaje2 = activo && 'Activo'


console.log(mensaje);
console.log(mensaje2);