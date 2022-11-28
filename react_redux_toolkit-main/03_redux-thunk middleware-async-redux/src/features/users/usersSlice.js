import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'; //Creamos url de los reducers en la fakeAPI

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {  /*
                                                                                Un thunk es una funcion que devuelve una promesa,
                                                                                tiene dos argumentos, el primero es el prefijo de la accion
                                                                                que vamos a hacer, y el segundo el callback que manejamos
                                                                                con la sintaxis del async await.
                                                                             */
    const response = await axios.get(USERS_URL); //Usamos el axios.get para hacer la peticion y guardamos lo que recibimos del servior en la variable.
    return response.data //Retornamos la anidacion de la variable response en este caso data. 
})

const usersSlice = createSlice({ //Creamos nuestro slice
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users; //Exportamos nuestras acciones. 

export default usersSlice.reducer //Exportamos nuestro reducer