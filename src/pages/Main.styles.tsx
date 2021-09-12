import styled from "styled-components";

interface OptionProps {
  isSelected: boolean;
}
export const Option = styled.div<OptionProps>`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  opacity: ${(props: OptionProps) => (props.isSelected ? 1 : 0.5)};
`;
