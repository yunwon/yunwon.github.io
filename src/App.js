import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./stylesheets/index.scss";
import styles from "./App.module.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PortfolioHome from "./pages/Portfolio/PortfolioHome";
import WCB from "./pages/Portfolio/pages/WCB/WCB";
import Toolbox from "./pages/Portfolio/pages/Toolbox/Toolbox";
import Easyforms from "./pages/Portfolio/pages/Easyforms/Easyforms";

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/portfolio" component={PortfolioHome} />
            <Route path="/portfolio/easyforms" component={Easyforms} />
            <Route path="/portfolio/toolbox" component={Toolbox} />
            <Route path="/portfolio/wcb" component={WCB} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
