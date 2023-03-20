import { AddCategory, GifGrid } from "./components";
import { useCategoriesGifs } from './hooks/useCategories';

/*  NOTA:
    we can remember that hooks can't be use in conditionals because this make a bads function in the program.
*/

export const GifExpertApp = () => {
  const { categories, onAddCategory } = useCategoriesGifs();
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value: string) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
