import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styles from "./Home.module.scss";
import Bouqo from "src/assets/portfolio/bouqo-thumb.jpg";
import CTO from "src/assets/home/cto_thumb.webp";
import { Layout } from "src/components/Layout/Layout";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";
import HP01 from 'src/assets/portfolio/ingram-micro/IngramMicro_HP_01.webp';

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
              Hello, I'm Yun. I'm a web designer and front-end developer based in the UK. I'm enthusiastic about creating exceptional
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
              <Link to="/portfolio/aim">
                <img src={HP01} alt="Ingram Micro Digital Campaigns" />
              </Link>
              <Link to="/portfolio/ingram-micro-apple-portal">
                <img src={CTO} alt="Ingram Micro Apple Portal" />
              </Link>
              <Link to="/portfolio/bouqo">
                <img src={Bouqo} alt="Bouqo" />
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
