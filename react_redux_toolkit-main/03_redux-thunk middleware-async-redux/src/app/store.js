import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';


export const store = configureStore({ //Creamos la store con el metodo confgureStore y le asignamos nuestros reducers creados en los slices
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})