import React from "react";
import { Link } from "react-router-dom";
import { LogoImage, MenuWrapper } from "./style.js";
import { Button } from "../Button";

import Logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="MaiFlix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
};

export default Menu;
