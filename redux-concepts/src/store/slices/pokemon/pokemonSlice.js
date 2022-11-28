
import { createSlice } from '@reduxjs/toolkit';

/* createSlice es una funcion de orden superior que acepta un estado inicial, un nombre, y un objeto
  lleno de funciones reductoras., genera automaticamente creadores de accions y tipos de acciones
  que corresponden con los reductores y el estado.


  Este metodo nos ayuda a reducir el boilerplate necesario para añadir los datos a redux,
  internamente utiliza createAction y createReducer.

*/



export const pokemonSlice = createSlice({
    name: 'pokemon',//Nombre del reducer
    initialState: { //Funciones reductoras
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => { //Esta funcion nos setea el loading en true.
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page; //Traeremos el page con el payload
            state.pokemons = action.payload.pokemons;//Traeremos los pokemons como payload
        }
    }
});

/*Se genera una accion para cada caso de reducer.  */ 
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions; //Exportamos las acciones. 



