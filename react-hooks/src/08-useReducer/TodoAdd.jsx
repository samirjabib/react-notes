import { useForm } from '../hooks/useForm';


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''//creamos nuestra propiedad del formulario
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = { 
            id: new Date().getTime(),
            done: false,
            description: description, //usamos la descripcion creada mediante el form para pasarla al todo
        }

        onNewTodo(newTodo); //Enviamos nuestro todo por parametros hacia nuestro reducer para actualizar la funcion
        onResetForm(); //Resetaamos el form despues de hacer el submit
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
