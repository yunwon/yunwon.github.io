import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Easyforms from "src/assets/home/easyforms.png";
import Toolbox from "src/assets/home/toolbox.png";
import WCB from "src/assets/home/wcb-thumb.png";
import { Layout } from "src/components/Layout/Layout";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <p>
            Hello, I'm Yun. I'm a web designer + front-end developer based in
            Auckland, New Zealand. I'm enthusiastic at creating exceptional user
            experiences with{" "}
            <NavLink to="/about" className={styles.link}>
              my broad range of skills.
            </NavLink>{" "}
            Check out{" "}
            <NavLink to="/portfolio" className={styles.link}>
              my recent work
            </NavLink>{" "}
            here and{" "}
            <a href="#footer" className={styles.link}>
              say hello
            </a>{" "}
            if you'd like to know more.
          </p>
        </div>
        <div className={styles.works}>
          <div className={styles.images}>
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
          <NavLink to="/portfolio" className={styles.viewMoreWork}>
            View more work
          </NavLink>
        </div>
      </Layout>
    );
  }
}
