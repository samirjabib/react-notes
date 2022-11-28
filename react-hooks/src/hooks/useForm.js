import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {    /*
                                                        Le mandamos por default un objeto vacio como objeto inicial, ya que esto nos ayuda a manejar de manera dinamica
                                                        el formulario y no siempre tener que usar los mismos nombres, asi nos evitamos errores. 
                                                    */
  
    const [ formState, setFormState ] = useState( initialForm ); //Establecemos el estado  y le pasamos como objeto inicial por default.


    
    const onInputChange = ({ target }) => { /*  
                                                Contamos con el objeto tarjet en el mismo contexto gracias a las arrow functions, traemos por parametros
                                                el event y desectructuramos el target de este. 
    
                                            */
        const { name, value } = target; //extraemos el nombre y valor del target

        setFormState({
            ...formState,//usamos el spread operator, el primer parametro mandamos una copia de el formState para mantener el estado.

            [ name ]: value /*le asignamos el nuevo valor, como pasamos el nombre y value dinamicamente 
                            a propiedades ya existes, estas se actualizan pero si pasamos una no existente simplemente 
                            se crearia*/
        });
    }

    const onResetForm = () => {
        setFormState( initialForm ); // Resetearmos al valor por default 
    }

    return {
        ...formState,/*
                     Creamos un copia del objeto con el spread operator con las propiedades del estado.   
                    */
        formState,
        onInputChange,
        onResetForm,
    }
}
