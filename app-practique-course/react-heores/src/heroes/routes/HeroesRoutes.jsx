import { Navigate, Route, Routes } from 'react-router-dom'; //Importamos los metodos de React-Router-Dom
import { Navbar } from '../../ui'; //Importamos el navbar.
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'; //Importamos las pages desectrurando. 

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                      
                        {/* Esta nos sirve para envolver un set de rutas hijo en la locacion
                        actual.

                        Cada vez que la ubicación cambia, Routes
                        busca a través de todas sus rutas hijas para encontrar la mejor coincidencia y 
                        renderiza esa rama de la UI. 

                        Los elementos pueden estar anidados para indicar una UI anidada, 
                        que también se corresponde con rutas URL anidadas. 
                        
                        Las rutas padre renderizan sus rutas hijas renderizando un Outlet.
                       */}
                    
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} /> 
                                                                  
                                                                  {/* con la sintasis de los : depues del lo que le estamos indicando 
                                                                  que cree una nueva ruta dinamica, con el parametro que recibimos
                                                                  ya que este argumento lo vamos a leer via URL
                                                                   */}
                                                                 
                                

                <Route path="/" element={<Navigate to="/marvel" />} />  
                                                                        {/* /* Con esta Propiedad Navigate podemos indicar
                                                                          Por donde va a ir la ruta en caso de no encontrar
                                                                          ninguna existente.         
                                                                        
                                                                         */}

            </Routes>
        </div>


    </>
  )
}
