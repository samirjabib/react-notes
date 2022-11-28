import { useState } from 'react';
import { AddCategory, GifGrid } from './components';



/*  NOTA:
    Debemos que recordar que los hooks no deben ser puesto de condicionales, ya que esto provoca comportamientos 
    extraños entre los estados. 
*/

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]); //Lo usamos para guardar el estado de nuestra peticion.


    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return; /* 
                                                        con este if al momento de llegar parametro, entra en este ciclo,
                                                        y revisa si esta el objeto que esta llegando ya esta incluido en 
                                                        las categorias, devuelve la funcion para atras.
                                                        */
        setCategories([ newCategory, ...categories ]); //mantenemos el estado anterior generando una copia con el spread
    }
    

    return (
        <>

            <h1>GifExpertApp</h1>

            {/* 
                Usamos props para pasar los argumentos,
                cabe recordar no limitarnos con los props, 
                ya que tambien podemos pasar funciones
                entre estas.
                entre componentes 
             */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    
                    /*Al usar la funcion map debemos pasar un key, este key debe ser unico y aunque sea un warning es necesario 
                    ponerlo siempre ya que este nos ayudara a reconocer que datos han sido eliminados, recordar nunca usar
                    el index como key.
                    */
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
