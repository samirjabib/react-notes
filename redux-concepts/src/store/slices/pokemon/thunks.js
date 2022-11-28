import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice'; //traemos las acciones del slice


/* ¿Asincronismo en Redux?

    Redux, por su naturaleza puramente funcional, esta pensado para realizar tareas síncronas:

    (state, action) => newState

    Sin embargo, debido a como funciona JS lo más común es trabajar de forma asíncrona, 
    por ejemplo hacer una petición AJAX a una API es asíncrono y luego de esto seguramente 
    vamos a querer modificar el Store en base a la respuesta.

    Para esto se usan las acciones asíncronas, hay varias formas de trabajar con acciones asíncronas en Redux, 
    una es hacerlo a mano, otra opción es usar es usar distintos middlewares.

    ¿Que es un Thunk middleware?

    Un Thunk es una tarea asincrona que cuando se resuelva va a llamar una accion a nuestro reducer. 

*/


export const getPokemons = ( page = 0 ) => {//Una funcion que regresa ora funcion
    return async( dispatch, getState ) => { /*La segunda funcion nos regresa dos argumentos, dispatch y get state 
                                                que nos permite llamar todo el root state, osea la informacion de el state.

                                            */
        dispatch( startLoadingPokemons() ); //Iniciamos el dispatch para invocar la funcion del slice, y cambios el loading a true.

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`); //Manera clasica de hacer la peticion
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`); /*Hacemos la peticion con el metodo http get y le pasamos de manera dinamica la 
                                                                                            page para poder cambiarla.
                                                                                            desectructuramos la data de la peticion.  
                                                                                            */

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) ); /*Despachamos la accion setPokemons que viene de nuestro reducer,  y a esta le pasamos
                                                                                los resultados de la peticion, mas el numero de pag, para setear la vista inicial. 
        
        
                                                                            */
    }
}


