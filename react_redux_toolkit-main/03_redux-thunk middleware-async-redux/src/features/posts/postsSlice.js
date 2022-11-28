import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'; //Traemos nuestra url de la fake APi

const initialState = { //Creamos el estado inicial de nuestro slice
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => { /*
                                                                                Un thunk es un middleware que nos con dos parametros,
                                                                                el primero recibe el prefijo de la accion, el segundo
                                                                                es la promesa que nos devolvera la informacion asincrona.
                                                                            */
    const response = await axios.get(POSTS_URL) //Hacemos la peticion a el servidor
    return response.data //Retornamos la respuesta
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) =>{ //Le pasamos por parametros el post Inicial.
    const response = await axios.post(POSTS_URL, initialPost) /*
                                                                Usamos el metodo post para enviar hacia el servidor
                                                                este metodo recibe dos parametros, el primero la URL
                                                                hacia donde ira y el segundo nuestro objeto a enviar. 
                                                                */
    return response.data //Devolvemos la respuesta de la funcion. 
})

const postsSlice = createSlice({ 
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {    /*
                            Podemos customizar nuestras acciones creadoras mediante el callback prepare,
                            este callack recibira el valor de nuestro reducer, y retornara el payload, 
                            con las propiedades extras añadidas

                        */
            reducer(state, action) { //https://www.youtube.com/watch?v=iACa4s0xMJA
                state.posts.push(action.payload) // Añadimos el post al final del array mediante el payload. 
            },
            prepare(title, content, userId) { //Recibimos el payload de nuestra funcion reducer y su vez los parametros que usaremos en nuestro payload. .
                return { 
                    payload: { //Retornamos el payload, con las propiedades extras añadidas
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {/*
                            https://redux-toolkit.js.org/api/createslice#extrareducers
                            Con los extra reducers podemos intereptar acciones, creadas en otros slices o agregar,
                            automaticamente reducers que se activaran dependiendo a otras acciones, en este caso.

    
                            */
        builder
            .addCase(fetchPosts.pending, (state, action) => { //añadimos el caso fetchPost Pending, lo que hara es resetearnos el status en pendiente.
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => { //Caso fetchPost completo, este lo que hara es cambiarlo el status a succes y modificarnos nuestro payload.
                state.status = 'succeeded'
                // Adding date and reactions
                let min = 1;
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = { //Devolvemos las reacciones.
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });

                // Add any fetched posts to the array
                state.posts = state.posts.concat(loadedPosts) //Usamos el metodo contact para unir los arrys.  le agregamos los post que cargamos.
            })
            .addCase(fetchPosts.rejected, (state, action) => { //En caso que el fecth haya sido rechasado devolvemos el error y actualizamos el status
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => { //Añadimos el caso pde añadir post completado.
                // Fix for API post IDs:
                // Creating sortedPosts & assigning the id 
                // would be not be needed if the fake API 
                // returned accurate new post IDs
                const sortedPosts = state.posts.sort((a, b) => {
                    if (a.id > b.id) return 1
                    if (a.id < b.id) return -1
                    return 0
                })
                action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
                // End fix for fake API post IDs 

                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString();
                action.payload.reactions = {
                    thumbsUp: 0,
                    hooray: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0
                }
                console.log(action.payload)
                state.posts.push(action.payload)
            })
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer