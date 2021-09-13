import React from "react";
import { StyledSizeOptions, StyledSizeSelector } from "./SizeSelector.styles";

type SizeSelectorProps = {
  updateCartSteps: (
    key: string,
    flavor: string,
    step: number,
    prince: number
  ) => void;
};

const SizeSelector: React.FC<SizeSelectorProps> = (
  props: SizeSelectorProps
) => {
  const sizeOptions = [
    { size: "P", value: 3 },
    { size: "M", value: 6 },
    { size: "G", value: 10 },
  ];
  return (
    <StyledSizeSelector>
      {sizeOptions.map((option: any) => (
        <StyledSizeOptions
          onClick={() =>
            props.updateCartSteps("size", option.size, 3, option.value)
          }
        >
          {option.size}
        </StyledSizeOptions>
      ))}
    </StyledSizeSelector>
  );
};

export default SizeSelector;
