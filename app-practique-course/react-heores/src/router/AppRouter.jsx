import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivatedRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
        <Routes>
                {/* /*
                  Esta nos sirve para envolver un set de rutas hijo en la locacion
                  actual.

                  Cada vez que la ubicación cambia, Routes
                  busca a través de todas sus rutas hijas para encontrar la mejor coincidencia y 
                  renderiza esa rama de la UI. 

                  Los elementos pueden estar anidados para indicar una UI anidada, 
                  que también se corresponde con rutas URL anidadas. 
                  
                  Las rutas padre renderizan sus rutas hijas renderizando un Outlet. */}
                 */
      
            <Route path='login' element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>

            }/>



            
            <Route path='/*' element={ 
                // con el  * le indicamos a esto que todas nuestran rutas van a pasar por aqui 
              <PrivateRoute> 
                  {/* Envolvemos nuestros componentes dentro de  nuestro componente de rutas privadas para aplicar la condicional */}
                <HeroesRoutes />
              </PrivateRoute>
              } 
              />
   
        </Routes>
    
    </>
  )
}
