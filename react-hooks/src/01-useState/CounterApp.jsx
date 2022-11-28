import { useState } from 'react';

/* 
    
        ¿ Que es el hook useState ?
        
        el useState es una funcion que crea unternamente una variable dondre podremos 
        almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable,
        y devuelve un array con dos elementos, el valor de la variable y la funcion para modificarla.


        const [state = setState ] = useState(default)

        const [state = setState ] = useState({
            default1,
            default2,
            default3,
        })


*/

export const CounterApp = () => {


    

    const [ state, setCounter] = useState({/* 
                                                Podemos recibir de estado multiples propiedades o objetos, no estamos limitado a uno solo.
                                            */
        counter1: 10,  
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state; //Destructuramos nuestras variables a renderizar de nuestro estado, en este caso el estado del contador

  return (
    <>
        <h1>Counter1: { counter1 }</h1> {/* Imprimimos en pantalla. */}
        <h1>Counter2: { counter2 }</h1>
        <h1>Counter3: { counter3 }</h1>

        <hr />

        <button 
            className="btn" 
            onClick={ 
                () => setCounter({/*
                                    Usamos el spread operator, pasando primero el parametro el arreglo para mantener la informacion, 
                                    y despues la variable que vamos a actualizar. 
                                */
                    ...state, //Copia del estado. 
                    counter1: counter1 + 1, //Operacion para sumar la pasamos el state, en este caso la modificamos ya que nos que re-escribe la propiedad ya existente
                })}>
                 +1
        </button>

        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...state,
                    counter1: counter1 + -1,
                })}>
                 -1
        </button>


        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...state,
                    counter1: 0,
                })}>
                 reset
        </button>
    
    </>
  )
}
