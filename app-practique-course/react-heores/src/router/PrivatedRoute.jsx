import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../auth';

export const PrivateRoute = ( { children }) => { 
                                                /*
                                            
                                                Creamos un high order component, que no es mas que un componente que recibe otros componentes hijos.

                                                */


    const { logged } = useContext(AuthContext); //Desctructuramos el logged del contexto enq ue estamos envolviendo nuestra aplicacion.

    const { pathname, search } = useLocation(); //Sacamos los valores de locacion con el hook de useLocation.

    const lastPath = pathname + search; //Sacamos los valores del ultimo lugar visitado, sumando el pathname con el search que vendria a ser el query.

    localStorage.setItem('lastPath',lastPath); //Guardamos el valor en el localstorage.
    
    return (logged) //Si el usuario esta logeado.
    ? children //Retornamos los hijos en caso de ser verdadero, que en este caso seria las otras rutas. 
    : <Navigate to='/login'/> //En caso de no estar logeado nos vamos a dirigir a la pagina del login.

}   