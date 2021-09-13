import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Text } from "..";
import userEvent from "@testing-library/user-event";

let componentBody: RenderResult;

describe("Testing Text component", () => {
  beforeEach(() => {
    componentBody = render(<Text />);
  });

  it("Shoud render input", () => {
    expect(componentBody).not.toBe(null);
  });
});
