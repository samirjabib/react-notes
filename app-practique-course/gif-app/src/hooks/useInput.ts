import { useState, FormEvent, ChangeEvent} from "react";



export const useInput = (onNewCategory: (value: string) => void) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = ({ target } : ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return {
    onSubmit,
    onInputChange,
    inputValue,
  };
};
