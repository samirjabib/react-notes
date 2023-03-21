import { getGifs } from "../../helpers/getGifs";

describe("test in getGifs()", () => {
  test("should be return a array", async () => {
    const gifs = await getGifs("One Punch"); //Remember install import 'whatwg-fetch'
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({ //should be a item equal to response from fetch
        id:expect.any(String),
        title:expect.any(String),
        url:expect.any(String)
    })
  });
});
