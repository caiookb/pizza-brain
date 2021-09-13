import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
`;
export const StyledMain = styled.div`
  height: 100vh;
  animation: ${fade} 0.8s linear forwards;

  @media (max-width: 800px) {
    position: relative;
  }
`;

export const StyledMainTitle = styled.div`
  width: fit-content;
  margin-top: 50px;
  margin-left: 50px;
`;

export const StyledMainMenu = styled.div`
  margin-top: 250px;
  width: 50%;
  @media (max-width: 800px) {
    width: 80%;
    margin-top: 100px;
  }
`;

export const StyledMainMenuOptions = styled.div`
  margin-top: 150px;
  margin-bottom: 10px;
  width: 50%;
  text-align: right;
  border-bottom: 1px solid black;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &&:hover {
    border-bottom-width: 3px;
    margin-left: 25px;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 150px;
  }
`;

export const StyledMainMenuDetails = styled.div`
  text-align: right;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledPizzaImage = styled.img`
  position: absolute;
  top: 100px;
  z-index: -1;
  animation: ${rotate} 200s linear infinite;
  right: -200px;

  @media (max-width: 800px) {
    opacity: 0.2;
  }
`;
