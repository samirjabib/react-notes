import { createSlice } from '@reduxjs/toolkit';


/* createSlice es una funcion de orden superior que acepta un estado inicial, un nombre, y un objeto
  lleno de funciones reductoras., genera automaticamente creadores de accions y tipos de acciones
  que corresponden con los reductores y el estado.


  Este metodo nos ayuda a reducir el boilerplate necesario para añadir los datos a redux,
  internamente utiliza createAction y createReducer.

*/




export const counterSlice = createSlice({
  name: 'counter', //Nombre del reducer
  initialState: { //Estado incicial
      counter: 10,
      times: 0
  },
  reducers: { //Funciones reductoras
    increment: (state) => {
      state.counter += 1;
    },
    incrementBy: ( state, action ) => {
      console.log(action);
      state.counter += action.payload;
    },
    decrement: ( state ) => {
      state.counter -= 1;
    },
    
  },
})

/*Se genera una accion para cada caso de reducer.  */ 
export const { increment, decrement, incrementBy } = counterSlice.actions;  //Exportamos las acciones. 