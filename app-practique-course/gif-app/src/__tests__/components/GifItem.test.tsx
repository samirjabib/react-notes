import React from "react";

import { GifItem } from "../../components/GifItem";
import { render } from "@testing-library/react";

describe("test in <GifItem/>", () => {
  const title = "saitama";
  const url = "htttps://one-puch.com/saitama.jpg";

  test("gif item should be render props", () => {
    render(<GifItem title={title} url={url} />);
  });
});
