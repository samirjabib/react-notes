import { useState } from 'react';
import PropTypes from 'prop-types';


/* ¿ Que es un Hook ?

    Un Hook es una funcion especial que permite "conectarse " a caracteristicas de react.
    Por ejemplo, useState es un Hook que te permite añadir el estado de react a un componenete
    de funcion.

        ¿ Que es el useState ?

        el useState es una funcion que crea unternamente una varaible dondre podremos 
        almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable,
        y devuelve un array con dos elementos, el valor de la variable y la funcion para modificarla.

        const [state , setState ] = useState(default)


    ¿ Comunicacion entre Componentes?
        

    ¿ Como podemos imprimir variables en el HTML ?

        Podemos imprimir variables dentro del HTMl gracias a que estamos usando jsx en realidad
        solo es necesario envolver la variable dentro corchetes, para poderla llamar.

*/



export const CounterApp = ({ value }) => {


    
    const [ counter, setCounter ] = useState( value ); // Usamos el hook use state para configurar la funcion que actualizara el estado,
    

    const handleAdd = () => setCounter( counter + 1 ); //Funcion para sumar al contador
    const handleSubstract = () => setCounter( counter - 1 ); //Funcion para restar al contador
    const handleReset = () => setCounter( value ); //Funcion para resetar el contador

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = { //Libreria externa que nos ayuda a tipear un dato al pasarlo por props. 
    value: PropTypes.number.isRequired
}


