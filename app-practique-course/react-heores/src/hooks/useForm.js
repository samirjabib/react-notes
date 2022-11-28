import { useState } from 'react';

export const useForm = ( initialForm = {} ) => { //Le pasamos un objeto como estado inicial.
  
    const [ formState, setFormState ] = useState( initialForm ); //Usamos el useState para crear el estado, al cual pasamos el objeto inicial.

    const onInputChange = ({ target }) => { //Usamos descontructed para desconsruir el target del event.
        const { name, value } = target; //Descontruimos la propedad name, value del target ya que este es un input. 
        setFormState({ //Usamos la funcion para pasar el nuevo estado.
            ...formState, //Generamos una copia del estado para mantener los datos, ya que no estamos mutandolos si no remplazandolos por nuevos.
            [ name ]: value //Pasamos la key de la propiedad la cual queremos modificar, y el valor a asignar, tenemos que estar pendientes si no existe creara una nueva, con el valor que le indiquemos.
        });
    }

    const onResetForm = () => {
        setFormState( initialForm ); //Devuelve el estado a su estado inicial, un objeto vacio.
    }

    return { //Retornamos los argumentos que queremos que contenga nuestra funcion. 
        ...formState,  //Una copia del arreglo para mantener el estado
        formState, //Pasamos los valores que tenemos del estado.
        onInputChange, //Pasamos la funcion para capturar el cambio en el input
        onResetForm, //Pasamos la funcion para resetar. 
    }
}