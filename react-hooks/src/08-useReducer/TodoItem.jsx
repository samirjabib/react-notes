
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`} //Nos fijamos que se cumpla la condicion y aplicamos los estilos dependiendo el condicional
          onClick={ () => onToggleTodo( todo.id ) } // Enviamos mediante parametros de la funcion el id de nuestro todo para marcar como completado. 
        >
          { todo.description }
        </span>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) } //Enviamos mediante parametros  de la funcion el id de nuestro todo apra eliminar
        >Borrar</button>
    </li>
  )
}
