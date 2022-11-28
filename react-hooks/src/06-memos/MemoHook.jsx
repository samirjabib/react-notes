import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

/*
    El hook useMemo sirve para memorizar valores lo cual nos ayuda a mejorar el performance de nuestros componentes.

    Este hook recibe por parámetro una función para crear un valor a memorizar y por segundo parámetro un array de dependencias.

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])

    Es especialmente útil cuando el valor a memorizar es producto de un cálculo que consume "mucha" memoria y procesamiento.

*/


const heavyStuff = ( iterationNumber = 100 ) => { //realizamos la iteracion para la app demo
    for( let i = 0; i < iterationNumber; i++ ) { 
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}



export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter]) /* guardamos el valor memorizado, y le agregamos en el arreglo de 
                                                                            dependencias que cambiara cada vez que cambie el valor de counter */

    return (
        <>
            <h1>Counter: <small>{ counter }</small>  </h1>
            <hr />

            <h4>{ memorizedValue }</h4>


            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}


// 2 common use cases of useMemo:
// 1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change
// 2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want 