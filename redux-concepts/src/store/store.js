import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';


/* ¿Que es Redux? 

    Redux es un contenedor predecible del estado de aplicaciones JavaScript.
   
  Redux es una excelente herramienta para manejar el estado de una aplicación. Sus principales beneficios son:

    Estado global e innmutable
    Mayor control del estado de la aplicación y el flujo de datos
    Arquitectura escalable de datos

  El flujo de la información

  La principal ventaja de Redux es cómo administra los cambios de estado. Para entenderlo, es necesario conocer 3 conceptos clave:

    El Store como la única fuente de la verdad
    El State es de solo lectura
    Los cambios al State pueden hacerse únicamente a través de acciones (actions) y funciones puras (reducers)

    https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966

*/

export const store = configureStore({ /*El metodo configureStore nos firme 
                                        como su nombre dice para configurar la store de Redux, donde tenedremos nuestros reducer y middlewares*/
  reducer: { //Exportamos los reducers a usar para pode tenerlos en la store
      counter: counterSlice.reducer,
      pokemons: pokemonSlice.reducer,

      [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware() //Con esto llamamos los middlewares, que es una funcion que se ejectuta antes que otras
    .concat( todosApi.middleware ) //Le concatenamos nuestro todosApi como middleware. 
})