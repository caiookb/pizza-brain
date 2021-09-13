import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Button } from "../../components";

describe("Testing button component", () => {
  test("onClick funtion works fine", () => {
    const mockCallBack = jest.fn();
    mockCallBack.mockReturnValueOnce(1);

    render(
      <Button data-testid="button" onClick={mockCallBack}>
        Botão
      </Button>
    );

    expect(mockCallBack()).toBe(1);
  });
  test("if disable prop works", () => {
    const mockCallBack = jest.fn();

    const { getByTestId } = render(
      <Button data-testid="button" disabled={true} onClick={mockCallBack}>
        Botão
      </Button>
    );

    getByTestId("button").click();
    expect(mockCallBack).toHaveBeenCalledTimes(0);
  });
});
