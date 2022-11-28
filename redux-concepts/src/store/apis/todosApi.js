import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({ //Este metodo nos permite crear la peticion a la Api

    reducerPath: 'todos', //Es el nombre que va a teer el path

    baseQuery: fetchBaseQuery({ //Aqui hacemos el fech al URL 
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({ //Este son los diferentes endpoints que vamos a declarar

        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),

    })

})

export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;  //Creamos un Hook

