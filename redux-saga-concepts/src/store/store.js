import { configureStore } from "@reduxjs/toolkit";
import { createSagaMiddleware} from 'redux-saga';
import { moviesSlice } from "./features/movies";



const sagaMiddleware = createSagaMiddleware(); /*
                                                redux-saga es una biblioteca que tiene como objetivo hacer que los efectos secundarios de la aplicación 
                                                (es decir, cosas asincrónicas como la obtención de datos y cosas impuras como acceder al caché del navegador) 
                                                sean más fáciles de administrar, más eficientes de ejecutar, fáciles de probar y mejores para manejar fallas.
                                                

                                                l modelo mental es que una saga es como un hilo separado en su aplicación que es el 
                                                único responsable de los efectos secundarios. redux-saga es un middleware redux, 
                                                lo que significa que este hilo puede iniciarse, pausarse y cancelarse desde la aplicación principal con 
                                                acciones redux normales, tiene acceso al estado completo de la aplicación redux y puede enviar acciones redux también.
                                                */

 const store = configureStore({ //Configuramos la store de redux y le pasamos el Reducer.
    reducer:{
        movie: moviesSlice.reducer
    },

    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) /*
                                                                                            Le pasamos nuestro middleware a nuestra store.
    
                                                                                            getDefaultMiddleware es útil si quieres añadir algún middleware personalizado, 
                                                                                            pero también quieres que se añada el middleware por defecto:
    
                                                                                        */

})

// sagaMiddleware.run(rootSaga)


export default store