import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => { //Creamos un Hook para invocar nuestro contexto de autorizacion. 
    return useContext(AuthContext); 
}

export default useAuth;