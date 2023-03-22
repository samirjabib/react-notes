import { useCounter } from "../../src/hooks/useCounter";
import { renderHook, act } from "@testing-library/react";

describe("PrUEBAS EN EL USE COUNTER", () => {
  test("should be return default values", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter, decrement, increment, reset } = result.current; //we destructured of the current which is the return of the functions
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function)); //this is the way for test functions in hooks
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should be generate counter with the value of 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should be increment the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      //is use a function that this update the state, always be wrap in a act
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(102); //rembember obtain the current value of the state with the propierty current in the result.
  });

  test("should be decrement the counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement } = result.current;

    act(() => {
      decrement(4);
    });

    expect(result.current.counter).toBe(96);
  });

  test("should be reset the counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement, reset } = result.current

    act(() => {
        decrement(1)
        reset()
    });

    expect(result.current.counter).toBe(100)
  });
});
