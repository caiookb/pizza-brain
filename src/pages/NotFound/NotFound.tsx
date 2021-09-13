import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components";
import { PageWrapper } from "./NotFound.styles";

const NotFound = () => {
  const content = (
    <PageWrapper>
      <Text variant={"h1"}>404 - Pizza not found :(</Text>
      <Link to={"/"}>Voltar para início</Link>
    </PageWrapper>
  );

  return content;
};

export default NotFound;
