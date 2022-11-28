import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef(); /* 
    
                                    ¿ Que hace el hook useRef ?

                                        es un hook que permite la manipulación directa de elementos del DOM,
                                        cabe recalcar que  useRef no usa el virtual DOM de react.,
                                        Para enlazar useRef a un elemento HTML, dicho elemento debe tener la propiedad ref con el valor de la variable de referencia.

                                        useRef siempre nos regresa un objeto mutable con una única propiedad current.

                                        Puedes usar un useRef para hacer peticiones a API's de una manera más controlada, y no siempre dependiendo del servidor en producción.


                                        podemos usar el useReft para cambiar alguna propiedad en css

                                        const colorRef = useRef(null);
                                        const cambiarColor = () => {
                                            colorRef.current.className = 'rojo';
                                        };

                                        https://dev.to/duxtech/como-rayos-funciona-el-hook-useref-en-react-2lah
                                        
                                         */


                                        

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        console.log(inputRef.current.value) // Esto nos devuelve la propiedad current que con ella trae todos las propiedades del objeto seleccionado con ref


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef } //Referencia usando useRef
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}
