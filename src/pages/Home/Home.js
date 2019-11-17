import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
import Easyforms from "../../assets/home/easyforms.png";
import Toolbox from "../../assets/home/toolbox.png";
import { Layout } from "../../components/Layout/Layout";

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <p>
            Hello,{" "}
            <NavLink to="/about" className={styles.link}>
              I'm Yun.
            </NavLink>{" "}
            I'm a{" "}
            <NavLink to="/about" className={styles.link}>
              web designer + front-end developer
            </NavLink>{" "}
            based in Auckland, New Zealand. I'm enthusiastic at creating
            exceptional user experiences with{" "}
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
            <img src={Easyforms} alt="toolbox" />
            <img src={Easyforms} alt="toolbox" />
            <img src={Toolbox} alt="toolbox" />
          </div>
          <NavLink to="/portfolio" className={styles.viewMoreWork}>
            View more work
          </NavLink>
        </div>
      </Layout>
    );
  }
}
