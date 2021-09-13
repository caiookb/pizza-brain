import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  background-color: #242424;
  height: 45px;
  color: white;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  transition: 20ms ease-in-out;

  &:hover {
    filter: brightness(150%);
  }
`;
