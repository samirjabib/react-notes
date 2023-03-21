import { useInput } from "../hooks/useInput";
import { AddCategoryProps } from "../types/add-category.type";

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const { inputValue, onInputChange, onSubmit } = useInput(onNewCategory);
  
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
