import { useInput } from "../hooks/useInput";

export const AddCategory = ({ onNewCategory }: any) => {
  const { inputValue, onInputChange, onSubmit } = useInput(onNewCategory);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
