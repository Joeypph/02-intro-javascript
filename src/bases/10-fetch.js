const apiKey = 'MG5J3A0YCTuni2LVauEDPEjIW5pD1ix5';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)

/* peticion
  .then(resp=>{
    console.log(resp);
    resp.json().then(data =>{
      console.log(data);
    })
  })
  .catch(console.warn) */

peticion
  .then(resp=>resp.json())
  .then(({data}) =>{
    const url = data.images.original.url

    console.log(url);

    const img = document.createElement('img');
    img.src=url;

    document.body.append(img)
  })
  .catch(console.warn)