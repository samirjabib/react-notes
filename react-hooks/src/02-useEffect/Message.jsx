import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0}); 

    useEffect(() => {
      //Component mount + ComponentUpdated
        
        const onMouseMove = ({ x, y }) => { 
            // const coords = { x, y };
            setCoords({ x, y }) //Directameante mandamos el objeto. 
        }

        window.addEventListener( 'mousemove', onMouseMove ); //usamos el metodo para añadir el eventlistener y le pasamos la variable con la funcion donde obtenemos las cordenadas
        
      return () => {
        //Component unmount
        window.removeEventListener( 'mousemove', onMouseMove ); //removemos el evento cuando el componente se destruye. 
      }
    }, []);
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
