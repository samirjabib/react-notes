import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

type GifGridProps = {
  category:string
}

export const GifGrid = ({ category }: GifGridProps) => {
  const { gifs, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {gifs.map((gif) => {
          const { id, title, url } = gif;
          return <GifItem key={id} title={title} url={url} />;
        })}
      </div>
    </>
  );
};
