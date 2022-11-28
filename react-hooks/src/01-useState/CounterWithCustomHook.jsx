import { useCounter } from '../hooks/useCounter';


/*

    ¿ Que es un Hook ? 

        Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React y que,
        para asegurar la estabilidad de la aplicación, debe de utilizarse siguiendo dos reglas básicas.

            Debe de ser llamado en el nivel superior de la aplicación:

                Un hook nunca debe de llamarse dentro de ciclos, condicionales o funciones anidadas, 
                ya que el orden de llamada de los hooks debe de ser siempre el mismo para asegurar que el resultado sea predecible durante la renderización. 
                Este uso únicamente en el nivel superior es lo que asegura que el estado interno de React se preserve correctamente entre diferentes 
                llamadas del mismo hook.

            Debe de llamarse en funciones o en otros hooks personalizados de React:

                Un hook nunca debe de ser llamado fuera de una función de React o de otro hook personalizado, de forma que la lógica 
                de estado del componente sea cláramente visible desde el resto del código para el scope establecido por React.

    ¿ Que son los custom hooks ?

        Los custom hooks en React son muy útiles siempre que tengamos una lógica que se repite entre varios componentes. 
        En estos casos, podemos sacar esta lógica y aplicarla a un custom hook, es decir, una función que ejecute los 
        pasos que necesitamos de manera automática. 

        los custom hooks tienen dos reglas:

            -El nombre empieza por «use»:

                La primera regla de los custom hooks en React es que su nombre debe empezar con la palabra use. 
                Esta convención se crea siguiendo los hooks originales de React (useEffect, useState, useRef) y 
                los posteriores hooks en React Router (useParams, useLocation, useNavigate).

                Se considera que esto es una regla porque la comunidad ha decidido que es más sencillo reconocer un custom hook cuando sigue esta norma. 
                Sin embargo, en teoría podrías crear uno con otro nombre. 
            
            -Puede llamar a otros hooks:

                Lo que realmente tienen de particular los custom hooks en React es que pueden llamar a otros hooks. 
                En este orden de ideas, React considera como custom hook a aquella función que dentro llama a un hook
                original o a otro custom hook. 

        
*/

export const CounterWithCustomHook = () => {

    
    const { counter, increment, decrement, reset } = useCounter(); //Traemos los datos a mostrar mediante el custom hook, 


    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>{/*Podemos enviar por argumento el valor a nuestra funcion para operar dinamicamente */}
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
        
        </>
    )
}
