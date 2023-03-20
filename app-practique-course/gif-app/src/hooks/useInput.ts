import { useState } from "react";
import { AddCategoryProps } from "../types/add-category.type";




export const useInput = (onNewCategory: (value: string) => void) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: any) => {
    setInputValue(target.value); //Extraemos el valor del evento que esta pasando en nuestro navegador
  };

  const onSubmit = (event: any) => {
    event.preventDefault(); /*
                                Para evitar el refresh del navegador
                                 todo al accionar el evento del form usamos este metodo.
                                */
    if (inputValue.trim().length <= 1) return; /*
                                                    Si ene el input no ahi mas de una letra, va a
                                                    romper la operacion ya que no cumple la condicion.
                                                    y con el return al lado nos ahorramos un scope adicional
                                                    al hacer la validacion.
                                                    
                                                    */

    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return {
    onSubmit,
    onInputChange,
    inputValue,
  };
};
