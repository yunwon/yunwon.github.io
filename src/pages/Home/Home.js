import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styles from "./Home.module.scss";
import Easyforms from "src/assets/home/easyforms.png";
import Toolbox from "src/assets/home/toolbox.png";
import WCB from "src/assets/home/wcb-thumb.png";
import { Layout } from "src/components/Layout/Layout";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";
import SolarSystem from "src/assets/portfolio/solarSystemMain.png";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <Fade top distance="3rem">
            <p>
              Hello, I'm Yun. I'm a web designer + front-end developer based in
              Auckland, New Zealand. I'm enthusiastic at creating exceptional
              user experiences with{" "}
              <NavLink to="/about" className={styles.link}>
                my broad range of skills.
              </NavLink>{" "}
              Check out{" "}
              <NavLink to="/portfolio" className={styles.link}>
                my recent work
              </NavLink>{" "}
              here and{" "}
              <a
                href="https://www.linkedin.com/in/yunwon/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                say hello
              </a>{" "}
              if you'd like to know more.
            </p>
          </Fade>
        </div>
        <div className={styles.works}>
          <Fade bottom distance="3rem">
            <div className={styles.images}>
              <Link to="/portfolio/solar-system">
                <img src={SolarSystem} alt="The Solar System" />
              </Link>
              <Link to="/portfolio/easyforms">
                <img src={Easyforms} alt="toolbox" />
              </Link>
              <Link to="/portfolio/toolbox">
                <img src={Toolbox} alt="toolbox" />
              </Link>
              <Link to="/portfolio/wcb">
                <img src={WCB} alt="White Collar Blue" />
              </Link>
            </div>
          </Fade>
          <Fade bottom distance="3rem">
            <GoToPortfolio />
          </Fade>
        </div>
      </Layout>
    );
  }
}
