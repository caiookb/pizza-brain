import React from "react";
import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { renderHook } from "@testing-library/react-hooks";
import { Input } from "..";

let hookResult: any;

describe("Testing Input component with control", () => {
  beforeEach(() => {
    hookResult = renderHook(() => useForm()).result;
  });

  it("Shoud render input", () => {
    const component = render(
      <Input name={"Testing"} control={hookResult.current.control} />
    );
    expect(component).not.toBe(null);
  });
});
