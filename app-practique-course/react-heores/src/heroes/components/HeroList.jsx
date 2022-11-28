
import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => { //Recibimos publisher mediante props 

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);     /*
                                                                                            Creamos una variable la cual almacenamos una funcion
                                                                                            en la cual usamos el metodo useMemo para retener en memoria los heores
                                                                                            y que estos no se vuelvan a cargar cada vez que cambiamos pagina,

                                                                                            La funcion getHeoresByPusliher le enviamos en los argumentos el parametro solicitado
                                                                                            y esta nos retorna un array con los heores de dicha compañia.
    
    
                                                                                        */

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => ( //El metodo map nos genera un nuevo arreglo, devolviendonos los resultados a operar con esta. 
                    <HeroCard 
                        key={ hero.id } //Le pasamos un id unico al metodo key que nos identifica cada uno de los elementos
                        { ...hero } //Usamos el spread operator para enviar una copia de todos las propiedades del objeto hero, esto seria igual a tener hero = hero, o una desectruturacion.
                    />
                ))
            }
        </div>
    )
}
