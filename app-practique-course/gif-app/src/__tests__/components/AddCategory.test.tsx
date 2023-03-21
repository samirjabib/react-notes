import React from "react";
import { AddCategory } from "../../components/AddCategory";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";

describe("Testing in <AddCategory/>", () => {
  test("should change the value on the box text", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("should be call onNewCategory if the input have a value", () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn() //mocks is a method from jest that simulate a any type of functions.

    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole("textbox") as HTMLInputElement
    const form = screen.getByRole("form") as HTMLFormElement

    fireEvent.input(input, { target: {value:inputValue}})
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toBeCalled()
    expect(onNewCategory).toBeCalledTimes(1)
    expect(onNewCategory).toBeCalledWith(inputValue)
  });

  test("don't should call onNewCategory is input value is null", () =>{
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}/>)
    const form = screen.getByRole("form") as HTMLFormElement
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()

  })
});
