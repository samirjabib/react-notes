import React from "react";
import { AddCategory } from "../../components/AddCategory";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";

describe("Testing in <AddCategory/>", () => {
  test("should change the value on the box text", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe('Saitama')
  });
});
