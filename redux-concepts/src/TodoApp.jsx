import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosApi'; //Traemos nuetra funcion de el modulo. 


export const TodoApp = () => {

    const [ todoId, setTodoId] = useState(1); //Creamos un useState para manejar el estado.
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery( todoId ); // Usamos nuesro custon hook del cual desectructuramos la data, y el loading


    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }


    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True': 'False' } </h4>

            <pre>{ JSON.stringify( todo ) }</pre>



            <button onClick={ prevTodo }>
                Prev Todo
            </button>
            <button onClick={ nextTodo }>
                Next Todo
            </button>
{/* 
            <ul>
                { todos.map( todo => (
                    <li key={ todo.id }>
                        <strong> { todo.completed ? 'DONE' : 'Pending' } </strong> 
                        { todo.title }
                    </li>
                ) ) }
            </ul> */}



        </>
    )
}
