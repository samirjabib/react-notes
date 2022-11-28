import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category ); 
                                                    /*
                                                        Recibimos por parametros las category, que vendria a ser el event que recorrimos en el input
                                                        y vienen viajando desde nuestro componnte padre, despues las enviamos a nuestra funcion auxiliar,
                                                        que nos retorna las imagenes y la guardamos en la variable, 
                                        
                                                    */

                                                    
                                                   
      
                                                     /*
                                                    pasamos la funcion callback para configurar el estado nuevamente, pasandole por parametros los nuevos valores,
                                                    recordar no usar un push para mutar el estado, no queremos eso, queremos actualizarlo. 
                                                    */
        setImages(newImages);
        setIsLoading(false); //Seteamos como falso al recibir la respuesta de la API
        
    }
    
    useEffect( () => {
        getImages(); //Con el useEffect prevenimos el render infinito ya que le indicamos cuando desmontar a nuestro componente, es obligatorio pasarle el arreglo de dependencias.
    }, []);



    return { //Retornamos un objeto con los siguientes estados
        images, 
        isLoading
    }

}
