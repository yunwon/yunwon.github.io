import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PortfolioHome from "./PortfolioHome";
import Easyforms from "./pages/Easyforms";
import Toolbox from "./pages/Toolbox";

export default class Portfolio extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/portfolio" component={PortfolioHome} />
          <Route path="/portfolio/easyforms" component={Easyforms} />
          <Route path="/portfolio/toolbox" component={Toolbox} />
          <Route path="/portfolio/wcb" component={Portfolio} />
        </div>
      </BrowserRouter>
    );
  }
}
