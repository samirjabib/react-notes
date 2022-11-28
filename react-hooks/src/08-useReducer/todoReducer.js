
export const todoReducer = ( initialState = [], action ) => {  /* 
                                                                    En esta parte creamos nuestro reducer, donde indentificaremos los casos
                                                                    a realizar y lo que debemos retornar en el estado.
                                                                */
    switch ( action.type ) { 
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]; //Devolvemos el payload con el nuevo toDo 

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ); //Lo que hacemos aqui es devolver un array nuevo que cumpla las condiciones puestas en el filter.

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {//Estamos marcando si una tarea a sido completada, comparamos si el todo.id coincide con el del payload y actualizamos
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return initialState; //si no es ninguno de estos casos simplemente regresamos el estado original. 
    }


}