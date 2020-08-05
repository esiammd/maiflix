import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";

import { ContainerHome, ContainerBase } from "./style";

const PageDefault = ({ children, type }) => {
  const isTypeHome = type === "home";
  const Container = isTypeHome ? ContainerHome : ContainerBase;

  return (
    <>
      <Menu />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default PageDefault;
