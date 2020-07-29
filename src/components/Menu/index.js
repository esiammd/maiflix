import React from "react";

import { LogoImage, MenuWrapper } from "./style.js";
import { Button } from "../Button";

import Logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="MaiFlix logo" />
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
};

export default Menu;
