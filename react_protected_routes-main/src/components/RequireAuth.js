import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
                                            /*
                                            En este componente crearemos la validacion de nuestro
                                            nivel de acceso en la App, que en este caso llegara por props.
                                            
                                            https://refine.dev/blog/navigate-react-router-redirect/ //Navigate // Redirect.
                                            
                                            */
    const { auth } = useAuth(); //Invocamos el Hook que contiene la informacion de nuestro inicio de sesion


    const location = useLocation(); //usaremos el hook useLocaiton para definir la location actual. 

    return (/*
                
            */
        auth?.roles?.find(role => allowedRoles?.includes(role)) 
                                                                /*
        
                                                                */
            ? <Outlet /> //Representamos todos los componentes hijos que este contiene
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;