import React from "react";
import { Container } from "@chakra-ui/react";
export const Layout = ({ children }) => {
  return <Container maxW={"1540px"}>{children}</Container>;
};
