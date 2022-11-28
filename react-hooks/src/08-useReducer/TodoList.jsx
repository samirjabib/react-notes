import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  //Recibimos mediante props, los todos y los metodos que enviamos desde el reducer contenido en el padre

  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem 
                  key={ todo.id } 
                  todo={ todo } 
                  onDeleteTodo={ onDeleteTodo }  //seguimos enviando mediante props al componente hijo para usar los metodos en su lugar correspondiente.
                  onToggleTodo={ onToggleTodo } 
                />
            ))
        }
    </ul>
  )
}
