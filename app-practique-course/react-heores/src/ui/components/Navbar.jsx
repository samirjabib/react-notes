import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext,  } from '../../auth';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext); //Invocamos  y desectructuramos el contexto con el hook useContext, para acceder a los datos que nos provee el contexto de Auth. 



        const navigate = useNavigate(); /* 
                                        El Hook useNavigate nos devuelve una funcion que nos permite navegar
                                        de forma programada hacai la url dada.

                                        Si le pasamos -1 en vez del objeto , para retroceder hacia la parte 
                                        atras del historial
                                     */



    const onLogout = () => { //Creamos la funcion para deslogear y recibimos el event por parametro.
        logout();//Invocamos el metodo que nos provee nuestro contexto de auth. 
        navigate('/login', {  //Este objeto navigate contiene el state, y replace. 
            replace: true //El Replace evita que la persona pueda regresar al historial anterior.
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-ithhem nav-link  ${ isActive ? 'active':'' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                                                    /*Contamos con la propiedad isActive en react 
                                                                        Que nos permite reconcer si una ruta seleccionada,
                                                                        esta activa mediante Boolean.
                                                                
                                                                    
                                                                    */
                        to="/search" //Esta propiedad nos ayuda a programar hacia donde queremos ir.
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout } //Le pasamos la funcion.
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}