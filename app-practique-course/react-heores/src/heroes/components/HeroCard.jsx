import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => { //Creamos una componente  y traemos con props.
    // if ( alter_ego === characters ) return (<></>); //Otra manera de escribir
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></> //Si la condicion es verdadera devuelve esto
     : <p>{ characters }</p>; //Si la condicion es falsa devuelve los characters
}


export const HeroCard = ({ //Desectructuramos todos los elementos del objeto hero que pasamos mediante el spread operator 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters ,
}) => {

    const heroImageUrl = `/src/assets/heroes/${ id }.jpg`; //Invocamos las imagenes de la ruta seleccionada

    // const charactesByHero =  (<p>{ characters }</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}> 
                                                {/* Link es un metodo que nos permite navegar a otra pagina con un click
                                                    ademas de esto este objeto representa en el html lo que vendria a ser
                                                    un objeto <a href=></a>

                                                    para viajar al url que queremos dinamicamente usamos, los template strings,
                                                    para la interpolacion de variables.
                                                
                                                 */}
                                Más..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
