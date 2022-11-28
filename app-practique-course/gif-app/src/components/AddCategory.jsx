import { useState } from 'react';


export const AddCategdory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value ); //Extraemos el valor del evento que esta pasando en nuestro navegador
    }

    const onSubmit = ( event ) => {

        event.preventDefault();/*
                                Para evitar el refresh del navegador
                                 todo al accionar el evento del form usamos este metodo.
                                */
        if( inputValue.trim().length <= 1) return; /*
                                                    Si ene el input no ahi mas de una letra, va a
                                                    romper la operacion ya que no cumple la condicion.
                                                    y con el return al lado nos ahorramos un scope adicional
                                                    al hacer la validacion.
                                                    
                                                    */

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
