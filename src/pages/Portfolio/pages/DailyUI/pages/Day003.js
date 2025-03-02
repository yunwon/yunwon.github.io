import React, { Component } from "react";
import styles from "./Day003.module.scss";
import Fade from "react-reveal/Fade";
import logo from "src/assets/portfolio/daily-ui/003/logo.png";
import donut from "src/assets/portfolio/daily-ui/003/donut.png";
import menuIcon from "src/assets/portfolio/daily-ui/003/menuIcon.svg";

export default class Day003 extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <header>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.menu}>
              <img src={menuIcon} alt="menu" />
              <ul>
                <li>
                  <a>menu</a>
                </li>
                <li>
                  <a>shop</a>
                </li>
                <li>
                  <a>find store</a>
                </li>
                <li>
                  <a>about</a>
                </li>
                <li>
                  <a>contact us</a>
                </li>
              </ul>
            </div>
          </header>
          <div className={styles.hero}>
            <Fade top cascade distance="3rem">
              <div className={styles.heroImage}>
                <img src={donut} alt="donut" />
              </div>
              <div className={styles.title}>
                <h1>The joy of Getting Best Donut</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <button>order now</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
