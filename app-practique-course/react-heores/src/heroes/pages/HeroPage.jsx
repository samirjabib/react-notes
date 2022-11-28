import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const { id } = useParams(); /*
                                  Este hook nos permite obetner el argumento enviado del componente padre mediante el URL              
  
                              */
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ]); //Usamos el useMemo para retener en memoria la variable, obtenemos el heore mediante la funcion auxu getHeroId enviandoselo por parametros


  const onNavigateBack = () => {
    navigate(-1); //Usamos el -1 ya que este nos devuelve un paso atras en el historial.
  }


  if ( !hero ) {
    return <Navigate to="/marvel" /> //Si no recibimos ningun heore navegamos a la ruta por default selecionada.
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/src/assets/heroes/${ id }.jpg` } 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
