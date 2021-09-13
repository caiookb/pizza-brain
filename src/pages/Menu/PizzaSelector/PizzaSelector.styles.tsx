import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledPizzasView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const StyledPizzaImage = styled.img`
  width: 200px;

  @media (max-width: 800px) {
    width: 130px;
  }
`;

export const StyledPizzaTitle = styled.div``;

export const StyledPizzaOption = styled.div`
  display: flex;
  width: 26%;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &&:nth-child(3n + 4),
  :nth-child(3n + 5) {
    align-self: center;
    flex-grow: 0;
    flex-direction: column-reverse;
  }
  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  &:hover ${StyledPizzaImage} {
    animation: ${rotate} 20s linear infinite;
  }

  &:hover ${StyledPizzaTitle} {
    transition: 0.4s ease-in-out;
    padding: 0px 10px;
    border-radius: 5px;
    font-weight: 300;
  }
`;
