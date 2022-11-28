export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=10`; /*La URL hacia la cual estamos haciedno las peticiones
                                                                                                                            en este caso la api GIF
                                                                                                                        */
    const resp = await fetch( url ); // Esperamos la respuesta y la almacenamos en una variable 
    const { data } = await resp.json(); //Desectructuramos la data de nuestra respuesta, siempre recordando convertir esta respuesta a formato json.

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs; // Retornamos la variable gifs que contiene el objeto.
}