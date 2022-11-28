import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) =>{ //Le pasamos como parametros el publisher que seria un objeto vacio. 

    const validPublishers = ['DC Comics','Marvel Comics']; //Validamos los unidos dos tipos de casos que tenemos
    if ( !validPublishers.includes( publisher ) ) { //Si lo que recibimos como argumento no contiene el las opciones dadas en la variable anterior.
        throw new Error(`${ publisher } is not a valid publisher`); //Lanzamos un nuevo error.
    }

    //En caso de cumplir la condicion

    return heroes.filter( heroe => heroe.publisher === publisher ); //Usamos el metodo filter que nos devuelve un arreglo con los objetos que cumplen la condicion.
} 


