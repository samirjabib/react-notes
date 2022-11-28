import { createContext, useState } from "react";

const AuthContext = createContext({}); /*Creamos el contexto donde envolveremos los datos con referencia al proceso de Auth



                                        */

export const AuthProvider = ({ children }) => { //Creamos nuestro proveedor
    const [auth, setAuth] = useState({}); //Creamos nuestro estado de auth, 

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;