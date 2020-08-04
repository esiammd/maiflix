import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import CadastroVideo from "./pages/CadastroVideo";
import CadastroCategoria from "./pages/CadastroCategoria";
import Pagina404 from "./pages/Pagina404";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}
