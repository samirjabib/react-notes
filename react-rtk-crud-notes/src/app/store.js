import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/tasksSlice"; 

export const store = configureStore({
  reducer: { tasks: tasksReducer }, //Le indicamos los reducers que vamos a usar,y lo almacenamos en una metodo del objeto reducer.
});
