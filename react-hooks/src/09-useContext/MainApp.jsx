import { Navigate, Route, Routes, Link } from 'react-router-dom';

import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

/* 
  ¿ Que es context ?

    Context provee una forma de pasar datos a través del árbol de componentes 
    sin tener que pasar props manualmente en cada nivel.

    En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de props, pero esta forma puede resultar incómoda para ciertos 
    tipos de props (por ejemplo, localización, el tema de la interfaz) que son necesarias para muchos componentes dentro de una aplicación. 
    Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente una prop a través de cada 
    nivel del árbol.

  
*/

/* 
 ¿ Que es el react Router DOM ?

  Como ya sabrás React nos permite crear SPA (Single Page Application), y mostrar varias vistas dentro de la misma página, 
  sin embargo, tener navegación entre páginas, una URL específica para una vista o simplemente retroceder/avanzar en el historial de 
  navegación son características que todo usuario debería poder hacer en un sitio web, React logra todo esto con ayuda de la librería React Router.
    

*/


export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />


        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } />
          
          <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>
    </UserProvider>
  )
}
