

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '.';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1); // usamos el hook de contador para cambiar el estado.
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`); //mandamos a llamar nuestro useFecth
    const { author, quote } = !!data && data[0]; // 
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote />/* 
                                        Usamos un operador ternario para mostrar el loading si no ha llegado nuestra peticion todavia
                 
                                    */
                 : <Quote author={ author } quote={ quote } />
            }
                      
            <button 
                className="btn btn-primary"
                disabled={ isLoading } //si esta cargando nuestra peticion desactivamos el boton pasandole un valor booleano.
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}
