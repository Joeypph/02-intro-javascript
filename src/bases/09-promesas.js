import {getHeroeById} from "./bases/08-imp-exp";

/* The Promise object represents the 
  eventual completion (or failure) 
  of an asynchronous operation 
  and its resulting value. */

/*   const promesa = new Promise ((resolve,reject) => {
  // setTimeout(()=>{
  //     console.log('2 segundos pasaron');
  //     resolve();
  //   },2000)
    setTimeout(()=>{
      const heroe = getHeroeById(2);
      console.log(heroe);
      resolve(heroe);
      // reject('No se pudo encontrar el Heroe');
    },2000)
  })

  promesa.then((data)=>{
    console.log('El heroe es: ', data.name);
  })
  .catch(error=>{
    console.log(error);
  }) */

  const getHeroeByIdAsync = ((id) => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
          const heroe = getHeroeById(id);
          console.log(heroe);
          if(heroe){
            resolve(heroe);
          }else{
            reject('No se pudo encontrar el Heroe');
          }
        },2000)
      })
  })

 
  getHeroeByIdAsync(20)
    .then(heroe => console.log('El heroe es: ',heroe.name))
    .catch(err=>{console.warn(err);})