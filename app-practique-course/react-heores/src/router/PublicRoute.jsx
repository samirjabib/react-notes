import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../auth';

export const PublicRoute = ( { children }) => { 
                                                /*
                                                Creamos un high order component, que no es mas que un componente que recibe otros componentes hijos.
                                                */


    const { logged } = useContext(AuthContext); //Desctructuramos el logged del contexto enq ue estamos envolviendo nuestra aplicacion.

    
    return (!logged) //Si el usuario no esta logeado 
    ? children //Retornamos los hijos en caso de ser verdadero, que en este caso seria las otras rutas. 
    : <Navigate to='/marvel'/> //En caso de no estar logeado nos vamos a dirigir a la pagina del login.
}   