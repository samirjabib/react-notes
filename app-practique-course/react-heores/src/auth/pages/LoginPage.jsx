import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext) //Invocamos el contexto a el modulo con el Hook useContext del cual vamos a desectructurar el login

  const navigate = useNavigate(); /*
                                    Usamos este custom Hook que nos devuelve una funcion que nos permite
                                    programar hacia donde que ruta queremos ir. 
                                  */

  const onLogin = () => {

    login('Samir Jabib ') //Usamos la funcion Login la cual va a recibir por argumentos hacia los parametros los datos. 


    const lastPath = localStorage.getItem('lastPath' || '/') //Con esta funcion le indiciamos si exist eel lastPath o si no lo llevamos a la ruta home


    navigate(lastPath, { //Le pasamos como primer parametro al ruta hacia la cual queremos navegar en este caso nuestra variable si no fuera algo asi "/"
      replace: true //Nos sirve para evitar que la persona retroceda en el historial
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin } //Le pasamos la funcion dentro de la variable.
      >
        Login
      </button>

    </div>
  )
}
