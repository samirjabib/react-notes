import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async () => {
    const newImages = await getGifs(category);

    setGifs(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
