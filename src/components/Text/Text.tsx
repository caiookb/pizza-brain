import React from "react";
import styled from "styled-components";

type TextProps = {
  variant: "h1" | "h2" | "h3" | "p";
  children?: React.ReactNode;
  spacing: number;
  fontWeight?: number;
  fontSize: number;
  color?: any;
};

const Text = (props: TextProps) => {
  const ElementText = (props: TextProps) =>
    React.createElement(props.variant, props);

  const StyledText = styled(ElementText)`
    margin: 0px;
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize}px;
    margin-bottom: ${(props) => props.spacing * 4}px;
    color: ${(props) => props.color || "#3a3a3a"};
  `;

  return <StyledText {...props}>{props.children}</StyledText>;
};

Text.defaultProps = {
  variant: "p",
  spacing: 1,
  fontWeight: 500,
  fontSize: 14,
};

export default Text;
