import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

import React from "react";

jest.mock("../../hooks/useFetchGifs"); //Mock the custom hook

const mockedFetchGifs = jest.mocked(useFetchGifs); // use this for mocked the hook on react.

describe.only("Test in <GifGrid/>", () => {
  const category = "One Punch";

  test("should be show loading in the init", () => {
    mockedFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });

  test('should show items when this is charge', () =>{
    const images = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        },
    ]

    mockedFetchGifs.mockReturnValue({
        gifs:images,
        isLoading:false,
    })
  })

  render(<GifGrid category={category}/>)
  expect(screen.getAllByRole('img').length).toBe(2)
});
