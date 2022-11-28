import { HeroList } from '../components'; //Traemos el componente List 


export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher='DC Comics' /> 
          {/* Mediante props le indicamos al componente que archivos queremos que nos traiga. */}
    </>
  )
}
