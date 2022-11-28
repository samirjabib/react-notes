import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks); //Nos permite seleccionar del estado las tareas.
  const dispatch = useDispatch();

  const handleDelete = (id) => { //Nos permite eliminar las tareas.
    dispatch(deleteTask(id)); //Usamos el metodo dispatch para pasar el payload al actions del reducer, y le enviamos por parametros el id.
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks ({tasks.length})</h1>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
                              /*
                              Usamos el meotodo .map para listar las tareas dinamicamente, 
                              importate pasar el key para que react pueda acuatlizar correctamente las Listas. 
                               */

          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
            <p className="text-xs text-slate-400">{task.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
