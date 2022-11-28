import { useEffect, useState } from 'react';
import { Message } from './Message';


/* Que hace el hook useEffect ?

    Es un tipo de hook que se incorporó en la versión de React 16.8. Como su nombre indica, este hook nos permite definir efectos.

    Los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el 
    ciclo de vida de nuestro componente. Antes ya hemos visto que podemos usarlo para ejecutar una acción específicamente después 
    del primer render. Sin embargo, los efectos no se quedan ahí.

    Con el hook useEffect en React, también podemos ejecutar trozos en las otras fases del ciclo de vida,
    ya sea en updating o en unmounting. En este orden de ideas, el hook useEffect en React equivale a una 
    combinación de las funciones componentDidMount, componentDidUpdate y componentWillUnmount.

    CICLOS DE VIDA : https://keepcoding.io/blog/estado-y-ciclo-de-vida-de-componentes-en-react/.
    USEEFFECT: https://reactjs.org/docs/hooks-effect.html.;

*/

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ //Establecemos nuestos valores iniciales del estado
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState; //Desectructuramos las propiedades del estado. 

    const onInputChange = ({ target }) => { 

        const { name, value } = target; //Desectructuramos del target las propiedades del evento, que necesitamos.

        setFormState({ //Usamos el spread operator 
            ...formState, //Mantenemos los datos de nuestro estado, ya que no queremos perderlos.
            [ name ]: value  /*Actualizamos el estado usando las propiedades computadas entre los objetos
                               pasamos primero la propiedad que estableceremos, y el valor sera igual al
                               nuevo value. 

                               tener cuidado al establecer una nueva propiedad por que se va a crear.
                            */
        });
    }


    useEffect( () => {
        console.log('useEffect called!');   /*
                                                El arreglo de dependencias nos permite controlar que acciones actualizaran el estado,
                                                cuando esta vacio significa que solo se actualizara cuando se renderiza.


                                                IMPORANTE: es de buena practica usar un useEffect para solo una operacion en especifico.
                                            */
    }, []);
    
    useEffect( () => {
        console.log('formState changed!'); //Aqui el estado cambia cada vez que cambia el formState o el email
    }, [formState]);

    useEffect( () => {
        console.log('email changed!'); //Aqui el estado cambia cada vez que actualiza el email, y consigo activando la actualizacion del form stated
    }, [ email ]);

    

    return (
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


            {
                (username === 'strider2' ) && <Message /> 
            }

        </>
    )
}
