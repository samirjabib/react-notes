const initialState = [{ //Iniciamos el estado inicial , este se lo mandamos a un reducer.
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => { /* 
                                                                    Un reducer no es mas que una simple funcion pura, que recibe dos argumentos, el state
                                                                    y el accion, la accion es la encargada de decirle a el reducer como queremos que cambie
                                                                    el estado.
                                                                */
    if ( action.type === '[TODO] add todo' ){ 
        return [ ...state, action.payload ]; //regresamos una copia del estado anterior y le agregamos el payload, para asi evitar mutarlo.
    }

    return state; //regresamos el nuevo estado.
}

let todos = todoReducer();

const newTodo = { //nuevo estado.
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo', // Type es un string que nos permite ler la accion que queremos.
    payload: newTodo, // Payload o carga, es lo que queremos mandarle a la accion, para regresar un nuevo estado.
};

todos = todoReducer( todos, addTodoAction ); // Pasamos por argumentos, el estado inicial y la accion que queremos realizar. 

console.log({state: todos}) // hacemos un console.log del estado.





