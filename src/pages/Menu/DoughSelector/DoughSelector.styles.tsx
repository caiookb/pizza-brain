import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    opacity: 0.1;
    left: 150px;
  }

  to {
    opacity: 1;
    position: unset;
    left: 0px;
  }
`;

interface DoughProps {
  borderSize?: number;
  fontWeight?: number;
}

export const StyledDoughSize = styled.div``;

export const StyledDoughButton = styled.div`
  display: flex;
  margin-top: 25px;
  cursor: pointer;
  padding: 15px;
  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledDoughButtonSection = styled.div`
  width: 70%;

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledDoughOption = styled.div<DoughProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 40px;
  width: 70%;

  @media (max-width: 800px) {
    font-size: 22px;
    width: 45%;
  }
`;

export const StyledDoughValue = styled.div<DoughProps>`
  width: 30%;
  height: 25px;
  border-bottom: ${(props) => props.borderSize}px solid black;

  @media (max-width: 800px) {
    font-size: 22px;
    width: 30%;
  }
`;
