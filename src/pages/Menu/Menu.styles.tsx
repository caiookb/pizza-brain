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

interface OptionProps {
  isSelected: boolean;
}

export const StyledMenuOptions = styled.div`
  width: 50%;
  margin-left: 50px;

  @media (max-width: 800px) {
    background-color: white;
    font-size: 24px;
    margin-left: unset;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 25px;
    align-content: center;
    align-items: center;
  }
`;

export const Option = styled.div<OptionProps>`
  width: 300px;
  opacity: ${(props: OptionProps) => (props.isSelected ? 1 : 0.5)};
  font-size: 50px;
  margin-top: 20px;
  font-weight: ${(props: OptionProps) => (props.isSelected ? 500 : 300)};
  cursor: pointer;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    width: 33%;
    font-size: 24px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    justify-content: center;
    align-content: center;

    &:nth-child(4) {
      width: 100%;
    }
  }
`;

export const OptionTitle = styled.p`
  margin: 0;
`;

export const OptionValue = styled.p`
  margin: 0;
  font-weight: 500;
  margin-left: 20px;

  @media (max-width: 800px) {
    margin-left: unset;
    font-size: 20px;
  }
`;

export const StyledMenu = styled.div`
  height: 100vh;
  animation: ${fade} 0.5s linear forwards;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledMenuView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 150px;

  @media (max-width: 800px) {
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
  }
`;

export const StyledMainTitle = styled.div`
  width: fit-content;
  margin-top: 50px;
  margin-left: 50px;
`;

export const StyledSelectedView = styled.div`
  width: 40%;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
