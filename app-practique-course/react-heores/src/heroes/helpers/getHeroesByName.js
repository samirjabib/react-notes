import { heroes } from '../data/heroes'; //Importamos el array de heores


export const getHeroesByName = ( name = '' ) => {  //Declaramos el argumento a recibir, y le pasamos como estado inicial un stirng vacio.

    name = name.toLocaleLowerCase().trim(); //Reasignamos el string con el string traido del parametro y usamos los metodos para ponerlo en minuscula y quitarle los espacios.
    
    if ( name.length === 0 ) return []; //Si name es un string vacio retornamos un array vacio.

    return heroes.filter( //Usamos la propiedad filter que crea un nuevo array con todos los elementos que cumplan la condicion dada, y la retornamos a la funcion principal.
        hero => hero.superhero.toLocaleLowerCase().includes( name ) //Usamos el metodo include para ver si contiene el objeto con el nombre.
    );

}



