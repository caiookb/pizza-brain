import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderSpinner = () => (
  <StyledView>
    <StyledSpinner data-testid="spinner"></StyledSpinner>
  </StyledView>
);

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledView = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: fit-content;
  height: fit-content;
  margin: 100px auto;

  &:after {
    content: "  ";
    display: block;
    width: 72px;
    height: 72px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #7070703a;
    border-color: #7070703a transparent #7070703a transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default LoaderSpinner;
