import styled from "styled-components";

export const StyledSizeSelector = styled.div`
  height: 400px;
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const StyledSizeOptions = styled.div`
  display: grid;
  place-items: center;
  border-radius: 100%;
  font-size: 42px;
  font-weight: 700;
  border: 5px solid black;
  position: absolute;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 800px) {
    position: unset;
  }

  &:hover {
    background-color: #f0f0f0;
  }
  &:nth-child(1) {
    top: 100px;
    left: 200px;
    width: 80px;
    height: 80px;

    @media (max-width: 800px) {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }

  &:nth-child(2) {
    width: 120px;
    height: 120px;
    top: 40px;
    left: 320px;
    @media (max-width: 800px) {
      width: 80px;
      height: 80px;
      font-size: 14px;
    }
  }

  &:nth-child(3) {
    width: 160px;
    height: 160px;
    top: 190px;
    left: 250px;

    @media (max-width: 800px) {
      width: 120px;
      height: 120px;
    }
  }
`;
