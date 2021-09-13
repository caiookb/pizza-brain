import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid black;
  margin-top: 40px;
  font-size: 28px;
  font-weight: 300;

  ::placeholder {
    color: #e0e0e0;
    opacity: 1; /* Firefox */
  }
`;
