import { useEffect, useState } from "react";


export const useFetch = ( url ) => { // pasamos por parametros el dato que traemos 

    const [state, setState] = useState({ //creamos el estado por default que tendra
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => { //Marcamos la funcion como asincrona ya que estaremos recibiendo respuestas.

        setState({
            ...state,   /* 
                            cada vez que cambie el url nosotros vamos a volver a setear el estado en true
                            para poder ver el loading en lo que llega la respuesta, le pasamos una copia de
                            el objeto original, modificandole la propiedad isLoading, ya que esta ya existe
                            dentro de este. 
                        */
            isLoading: true,
        });

        const resp = await fetch(url);  /* 
                                            Guardamos la peticion en una variable, y la declaramos con la palabra
                                            reservada await, ya que esto nos permitira esperar que llegue nuestra
                                            respuesta antes de seguir con la ejecuccion de nuestra funcion

                                        */

        const data = await resp.json(); // Esperamos tener nuestra respuesta y la convertimos a json para poderla manipular en javascript

        setState({
            data, //regresams la data a el state junto las demas propiedades. 
            isLoading: false, // configuramos el isLoading como falso para mostrar el contenido, ya que en este punto recibimos la peticion.
            hasError: null, //creamos el objeto para guardar los errores, lo pasamos con el valor null.
        });
    }


    useEffect(() => {
        getFetch(); //incializamos la funcion haciendo el mount y didupdate
    }, [url]) //usamos el arreglo de dependencias para indicarle que cada vez que la url cambie tiene que hacer render.
    


    return { //Retornamos al contexto de nuestra funcion los datos que obtuvimos el estado.
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
