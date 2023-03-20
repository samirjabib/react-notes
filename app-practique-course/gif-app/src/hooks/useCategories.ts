import { useState } from "react";


export const useCategoriesGifs = () => {
  const [categories, setCategories] = useState<string[]>(["One Punch"]);
  
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return {
    categories,
    onAddCategory,
  };
};
