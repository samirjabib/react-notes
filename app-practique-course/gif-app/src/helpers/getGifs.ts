export const getGifs = async( category:any ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=MLGxufz8ifKzLAwS6pzxPMLZvuIji0st&q=${ category }&limit=10`; /*La URL hacia la cual estamos haciedno las peticiones
                                                                                                                            en este caso la api GIF
                                                                                                                        */
    const resp = await fetch( url ); // Esperamos la respuesta y la almacenamos en una variable 
    const { data } = await resp.json(); //Desectructuramos la data de nuestra respuesta, siempre recordando convertir esta respuesta a formato json.

    const gifs = data.map( (gif:any) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    
    return gifs; // Retornamos la variable gifs que contiene el objeto.
}