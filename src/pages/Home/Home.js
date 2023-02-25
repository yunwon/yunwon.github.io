import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styles from "./Home.module.scss";
import Bouqo from "src/assets/portfolio/bouqo-thumb.jpg";
import AIM from "src/assets/home/ingram-thumb.jpg"
import HEP from "src/assets/home/hep-thumb.png";
import { Layout } from "src/components/Layout/Layout";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";

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
              Hello, I'm Yun. I'm a graphic/UX/UI designer based in New Zealand. I'm enthusiastic at creating exceptional
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
              <Link to="/portfolio/bouqo">
                <img src={Bouqo} alt="Bouqo" />
              </Link>
              <Link to="/portfolio/hep">
                <img src={HEP} alt="History of Egypt Podcast" />
              </Link>
              <Link to="/portfolio/aim">
                <img src={AIM} alt="Agency Ingram Micron" />
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
