import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom"; 
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid"; //Genera un dato random.  

function TaskForm() {

  const [task, setTask] = useState({ /* El use state es un Hook que tiene dos parametros el primero es el state, el segundo
                                        es la funcion para actualizar el estado, por buenas practicas esta siempre se nombra con un
                                        set y el nombre del estado.

                                        el hook recibe un objeto con el estado inicial. 
                                      */
    title: "",
    description: "",
  });

  const dispatch = useDispatch(); 
                                /*
                                Este Hook nos permite usar los accions creators generados en nuestros Slice, e importados en los modulos
                                ya que mediante a este metodo podremos pasar por parametros el payload a la al nuevo estado en la store de redux. 
                                  
                                import { addTask, editTask } from "../features/tasks/tasksSlice";
                                */

  const navigate = useNavigate();  //Este hook nos sirve para programar cambios de ruta mediante funciones. 

  const params = useParams();  //Este Hook nos permite seleccionar por parametros el id que nos esta llegando mediante la URL 

  const tasks = useSelector((state) => state.tasks); /*
                                                        Use Selector es un Hook que nos permite seleccionar un valor del estado de nuestra Store
                                                        en redux, es una funcion que retorna un valor de la store o la store. 
  

                                                    */

  const handleChange = (e) => { //Con esta funcion vamos a setear nuestro formulario
    setTask({
      ...task, //Le pasamos una copia del estado inicial para mantener las task
      [e.target.name]: e.target.value, //Actualizamos mediante la sintasis de brackets seleccionando la misma propiedad y le asignamos el valor extraido del event. 
    });
  };

  const handleSubmit = (e) => { //Funcion para enviar las task hacia el store. 
    e.preventDefault(); //Con esto evitamos el eventBubbling.

    if (params.id) { //Si la condicion es verdadera
      dispatch(editTask({ ...task, id: params.id })); /*
                                                        Usamos el metodo dispatch para enviar el payload a la store, este payload corresponde a
                                                        la accion  de editar tarea, le devolveremos un objeto usando el spread con la copia nueva
                                                        de el estado de la tarea, y el id que devolvemos de los parametros. 
                                                      */
    } else { //Si no existe la tarea añadimos la nueva
      dispatch(
        addTask({ 
          ...task, //Le mandamos una copia del estado.
          id: uuid(), //Este metodonos genera un valor random
        })
      );
    }

    navigate("/"); //Usamos el hook para despues ir a la ruta insertada por parametros al metodo
  };

  useEffect(() => { //Nos sirve para manejar las actualizaciones del estado. 
    if (params.id) { //Si el id de la tarea condice con el parametro. 
      setTask(tasks.find((task) => task.id === params.id)); // Devolemos un array con una copia de nuestra tarea selecconada. 
    }
  }, [params, tasks]); //Acualizamos el componente cada vez que cambian estas varibles. 

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label className="block text-sm font-bold">Task:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a title"
        autoFocus
      />
      <label>
        Description:
        <textarea
          type="text"
          name="description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Write a description"
        />
      </label>
      <button type="submit" className="bg-indigo-600 px-2 py-1">Submit</button>
    </form>
  );
}

export default TaskForm;
