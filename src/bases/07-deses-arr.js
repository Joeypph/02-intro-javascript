/*Destructuración de arreglos*/

const personajes =['Jose','Luis','Perez','Julia','Tolido']

const [ , ,goku] = personajes;
console.log(goku);

const retornaArreglo = () => {
     return ['ABC',1]
}
const [letras, numeros] = retornaArreglo();

console.log(numeros, letras)

//tarea
// primer valor del arreglo se llamará
// primer valor del arreglo se llamará
const useState = (valor) => {
    return [ valor, () => {console.log('Hola mund')}];
}

const [nombre, setNombre] = useState('Goku')

setNombre();


