import React from "react";
import { StyledButton } from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <StyledButton data-testid="button">{props.children}</StyledButton>
);

export default Button;

Button.defaultProps = {
  type: "button",
};
