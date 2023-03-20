import { AddCategory, GifGrid } from "./components";
import { useCategories } from "./hooks/useCategories";

/*  NOTA:
    Debemos que recordar que los hooks no deben ser puesto de condicionales, ya que esto provoca comportamientos 
    extraños entre los estados. 
*/

export const GifExpertApp = () => {
  const { categories, onAddCategory } = useCategories();

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value: any) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
