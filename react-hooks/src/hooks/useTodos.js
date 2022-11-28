import { useEffect, useReducer } from 'react'; //Importamos nuestro hook de reducer
import { todoReducer } from '../08-useReducer/todoReducer'; //Importamos nuestro reducer para usarlo

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //Esta funcion nos ayudara a mantener los datos al refrescar el navegador, donde le pasamos nuestro estado.
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );    /* 
                                                                        Creamos nuestro hook de reducer, le pasamos como primer parametro el reducer, como segundo paramatro va a
                                                                        recibir el estado inicial de este, al no tener nada declarado simplemente le pasamos un arreglo vacio,
                                                                        como tercer parametro le pasamos la funcion init, 
                                                                        */
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) ); // Esta funcion nos ayuda a convertir nuestro estado en un archivo JSON,  pasandole esta como argumento a la funcion. 
    }, [todos]) //Cada vez que los todos cambien esta se va a actualizar
    

    const handleNewTodo = ( todo ) => { 
        const action = { //creamos nuestra accion y lo que va a contener el payload en este caso sera el todo (id) que recibiremos por parametros.
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action ); // despachamos la accion a realizar. 
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length, //mandamos el numero de todos
        pendingTodosCount: todos.filter(todo=> !todo.done).length, // devolvemos un nuevo array que devuelva los datos que cumplan la condicion

        handleNewTodo, //pasamos los metodos. 
        handleDeleteTodo,
        handleToggleTodo,
    }

}
