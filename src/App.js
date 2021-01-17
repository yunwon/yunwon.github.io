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
import SolarSystem from "./pages/Portfolio/pages/SolarSystem/SolarSystem";
import HEP from "./pages/Portfolio/pages/HEP/HEP";
import DailyUi from "./pages/Portfolio/pages/DailyUI/DailyUi";
import Day001 from "./pages/Portfolio/pages/DailyUI/pages/Day001";

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
            <Route path="/portfolio/solar-system" component={SolarSystem} />
            <Route path="/portfolio/hep" component={HEP} />
            <Route exact path="/portfolio/dailyui" component={DailyUi} />
            <Route path="/portfolio/dailyui/day1" component={Day001} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
