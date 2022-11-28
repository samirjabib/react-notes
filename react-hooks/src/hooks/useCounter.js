import { useState } from "react"

/*
    Counter Custom Hook

*/

export const useCounter = ( initialValue = 0 ) => {
                                                    /*
                                                        Recibiremos por parametros el valor inicial con el cual
                                                        setearemos el state.

                                                    
                                                    
                                                    */

    const [ counter, setCounter ] = useState( initialValue ) //Creamos el state de el contador

    const increment = ( value = 1 ) => { //Asignamos un numero predeterminado al valor en caso de no tener nada en el argumento de la funcion.
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        if ( counter === 0 ) return; //Retornamos si es menor de 0.

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return { //Regresamos nuestra variable contador, y los metodos del custom hook useCounter.
        counter,
        increment,
        decrement,
        reset,
    }

}

