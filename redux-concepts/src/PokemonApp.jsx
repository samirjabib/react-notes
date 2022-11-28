import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons ); //Seleccionamos los datos del estado de la store dentro del pokemonSlice.


  useEffect(() => {
    dispatch( getPokemons() ); //Iniciamos la funcion de obtener los pokemones al montarse la App por primera vez. 
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
          {
            pokemons.map( ({ name }) => (
              <li key={ name }>{ name }</li>
            ))
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) } /*Llamamos aqui la accion que queremos realizar 
                                                          la cual le pasamos el page, ya que cada vez que esta 
                                                          se renderiza se le suma 1, y cambiamos la page */
        >
          Next
        </button>
    </>
  )
}
