import { createSlice } from "@reduxjs/toolkit";

const initialState = [ //Creamos el estado inicial de nuestra App
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "This is a task",
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "This is a task",
  },
];

const userSlice = createSlice({ /*
                                    https://redux-toolkit.js.org/api/createslice
                                 */
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => { 
      // /*https://reactjs.org/docs/hooks-reference.html#usereducer */
      state.push(action.payload); 
                                /* */
    },
    editTask: (state, action) => { //Nuestro reducer a crear 
      const { id, title, description } = action.payload; //Descontruimos nuestros datos del payload que pasaremos por parametros. 
      const foundTask = state.find((task) => task.id === id); 
                                                              /*
                                                              //https://www.youtube.com/watch?v=RTaQBkmcIuM 
                                                                  Find es un metodo que nos itera sobre un array buscando una igualdad
                                                                  en este caso buscamos que el objeto task.id, donde task sera un objeto
                                                                  en cada posicion del arreglo, y lo comparamos con el id que traemos en
                                                                  nuestro payload que es la accion que quiere modificar la interfaz
                                                                  en el caso de ser true, find devuelve el objeto que conindice, en caso
                                                                  de ser false devuelve undefinded.
                                                                                                            
                                                              */
      if (foundTask) { //Si la tarea es true re asignamos en nuestras variables modificando nuestros objetos reñalando el a founTask con el this 
        foundTask.title = title; //Le re asignamos el valor que desectruturamos del payload. 
        foundTask.description = description; //Lo de arriba otra vez XD jeje 
      }
    },
    deleteTask: (state, action) => { /*
                                        Un reducer es una funcion pura, que contiene dos parametros el state, el objeto que siempre vamos a retornar y el action
                                        que contiene dos parametros dentro de el, el type y payload, el type nos va a servir para identificar el tipo deaccion
                                        a realizar en la interfaz y el payload sera una funcion que nos va a remplazar nuestro estado anterior por un nuevo estado.
                                      */
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) { //En caso de ser verdadero usaremos el metodo splice
        state.splice(state.indexOf(foundTask), 1);  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
                                                  /* 
                                                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                                                  
                                                    Mediante el metodo indexOf encontramos el indice de nuestro objeto en el array, que encontramos metodo find,
                                                    luego usando el metodo splice que este nos recibe dos argumentos, el primero el indice sobre el cual queremos posicionarnos
                                                    para remover, y el numero de items que queremos quitar. en este caso 1, empezando sobre el cual estamos posicionados,
                                                    en este caso el mismo indice encontrado. 
                                                  */


      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions; //Exportamos las acciones a realizay  r.
export default userSlice.reducer; //Exportamos nuestro reducer