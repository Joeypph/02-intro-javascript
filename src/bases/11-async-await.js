const getImagen = async() => {
  try{
    const apiKey = 'MG5J3A0YCTuni2LVauEDPEjIW5pD1ix5';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)
    const {data} = await resp.json();
    console.log(data);
    const url = data.images.original.url
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img)
  }catch(error){
    // manejo de error
    console.log(error);
  }
}

getImagen();


/*getImagen()
  .then(console.log)
  const apiKey = 'MG5J3A0YCTuni2LVauEDPEjIW5pD1ix5';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)

 peticion
  .then(resp=>{
    console.log(resp);
    resp.json().then(data =>{
      console.log(data);
    })
  })
  .catch(console.warn) 

peticion
  .then(resp=>resp.json())
  .then(({data}) =>{
    const url = data.images.original.url

    console.log(url);

    const img = document.createElement('img');
    img.src=url;

    document.body.append(img)
  })
  .catch(console.warn) */