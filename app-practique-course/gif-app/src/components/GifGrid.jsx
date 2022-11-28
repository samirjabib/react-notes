import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    /*
        Nota:
            No podemos usar la palabra reservada class
            se remplaza por className.
    
    */

    const { images, isLoading } = useFetchGifs( category ); /*Enviamos los datos mediante los argumentos del hook
                                                            que creamos empezando la cadena
                                                            y nos retorna los estados que necesitamos.
                                                            */
    
    return (
        <>
            <h3>{ category }</h3>
            {
                
                isLoading && ( <h2>Cargando...</h2> )
                                                    /*
                                                    
                                                        Usamos el operador && para mostrar algo mientras su condicion sea verdadera.
                                                     */
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
