import { heroes } from '../data/heroes'; //Importamos el array con la data


export const getHeroById = ( id ) => { //Recibimos el id del heore por el parametro.

    return heroes.find( hero => hero.id === id ); /*
                                                    Usamos el meotdo find va a iterar sobre cada elemento de nuestro arreglo
                                                    hasta encontrar uno que cumpla la condicion como verdadera y lo devolvera,
                                                    si no este retornada undefined. 
                                                    */
}