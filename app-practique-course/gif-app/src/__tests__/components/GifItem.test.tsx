import React from "react";

import { GifItem } from "../../components/GifItem";
import { render, screen } from "@testing-library/react";

describe("test in <GifItem/>", () => {
  const title = "saitama";
  const url = "htttps://one-puch.com/saitama.jpg";

  test("gif item should be render props", () => {
    const { container } = render(<GifItem title={title} url={url} />); //Extract container for compare this with the snapshot
    expect(container).toMatchSnapshot();
  });

  test("gif should be imagen with the exact url and alt", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug() //this is a console.log for component. 
    
    const {  } = screen.getByRole('img')
    c
    


  });
});