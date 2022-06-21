import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./stylesheets/index.scss";
import styles from "./App.module.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PortfolioHome from "./pages/Portfolio/PortfolioHome";
import WCB from "./pages/Portfolio/pages/WCB/WCB";
import Toolbox from "./pages/Portfolio/pages/Toolbox/Toolbox";
import Easyforms from "./pages/Portfolio/pages/Bouqo/Bouqo";
import SolarSystem from "./pages/Portfolio/pages/SolarSystem/SolarSystem";
import HEP from "./pages/Portfolio/pages/HEP/HEP";
import DailyUi from "./pages/Portfolio/pages/DailyUI/DailyUi";
import Day001 from "./pages/Portfolio/pages/DailyUI/pages/Day001";
import Day003 from "./pages/Portfolio/pages/DailyUI/pages/Day003";
import Day004 from "./pages/Portfolio/pages/DailyUI/pages/Day004";
import Bouqo from "./pages/Portfolio/pages/Bouqo/Bouqo";
import IngramMicro from "./pages/Portfolio/pages/IngramMicro/IngramMicro";

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <PortfolioHome />
            </Route>
            <Route path="/portfolio/easyforms">
              <Easyforms />
            </Route>
            <Route path="/portfolio/toolbox">
              <Toolbox />
            </Route>
            <Route path="/portfolio/wcb">
              <WCB />
            </Route>
            <Route path="/portfolio/solar-system">
              <SolarSystem />
            </Route>
            <Route path="/portfolio/hep">
              <HEP />
            </Route>
            <Route path="/portfolio/bouqo">
              <Bouqo />
            </Route>
            <Route path="/portfolio/aim">
              <IngramMicro />
            </Route>
            <Route exact path="/portfolio/dailyui">
              <DailyUi />
            </Route>
            <Route path="/portfolio/dailyui/day1">
              <Day001 />
            </Route>
            <Route path="/portfolio/dailyui/day3">
              <Day003 />
            </Route>
            <Route path="/portfolio/dailyui/day4">
              <Day004 />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
