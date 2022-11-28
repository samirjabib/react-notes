import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth';


export const HeroesApp = () => {
  return (
    <AuthProvider> 
          {/* Envolvemos nuestra aplicacion con lo cual vamos a proveer 
          acceso al contexto del Auth a todos los componentes que envuelve, y a sus hijos */}
          <AppRouter />
                      {/* 
                          Invocamos las rutas de la aplicacion.  
                      */ }
    </AuthProvider>
  )
}
