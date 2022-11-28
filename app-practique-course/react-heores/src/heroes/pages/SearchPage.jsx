import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string' //Este modulo nos ayuda a tomar el valor del query parameter.

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate(); //Usamos el Hook que nos permite programar hacia donde queremos ir.
  const location = useLocation(); /*

                                  Este hook nos retorna una funcion que nos devuelve la actual locacion del objeto,
                                  Es util si queremos realizar un efecto secundario cada vez que cambie la locacion
  
                                  */

  const { q = '' } = queryString.parse( location.search ); //parse nos convierte el objeto en json o lo analiza como json
  const heroes = getHeroesByName(q); //Usamos la funcion aux y le enviamos Q como parametro. 

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q //Usamos el hook useForm para el formulario
  });



  const onSearchSubmit = (event) =>{
    event.preventDefault(); //Usamos el preventDefault para prevenir el bubbling.
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`); //Navegamos a la ruta seleccionada pasandole por querys. 
  }


  return (
    <>
      <h1>Search</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>


            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero } />
              ))
            }

          </div>
      </div>
      

    </>
  )
}
