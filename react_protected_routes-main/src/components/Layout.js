import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="App">
            <Outlet /> 
                        {/* /* Este componente va a representar todos los componentes hijos de nuestro componente, 
                            En este caso layout. 


                            se debe utilizar en los elementos de ruta padre para 
                            renderizar sus elementos de ruta hijo. 
        
                         */ }
        </main>
    )
}

export default Layout
