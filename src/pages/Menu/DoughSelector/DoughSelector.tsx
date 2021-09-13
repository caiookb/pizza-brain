import React from "react";
import {
  StyledDoughButton,
  StyledDoughButtonSection,
  StyledDoughOption,
  StyledDoughSize,
  StyledDoughValue,
} from "./DoughSelector.styles";

type DoughSelectorProps = {
  updateCartSteps: (
    key: string,
    flavor: string,
    step: number,
    price: number
  ) => void;
};
const DoughSelector = (props: DoughSelectorProps) => {
  const doughOptions = [
    {
      dough: "Massa grossa",
      fontWeight: 700,
      borderSize: 5,
      value: "Grossa",
      price: 10,
    },
    {
      dough: "Massa média",
      fontWeight: 500,
      borderSize: 3,
      value: "Média",
      price: 6,
    },
    {
      dough: "Massa fina",
      fontWeight: 300,
      borderSize: 1,
      value: "Fina",
      price: 3,
    },
  ];

  return (
    <StyledDoughSize>
      <StyledDoughButtonSection>
        {doughOptions.map((option: any) => (
          <StyledDoughButton
            onClick={() =>
              props.updateCartSteps("dough", option.value, 2, option.price)
            }
          >
            <StyledDoughOption fontWeight={option.fontWeight}>
              {option.dough}
            </StyledDoughOption>
            <StyledDoughValue borderSize={option.borderSize} />
          </StyledDoughButton>
        ))}
      </StyledDoughButtonSection>
    </StyledDoughSize>
  );
};

export default DoughSelector;
