import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";

export default class NavMenu extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Fade bottom cascade>
          <div className={styles.inner}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/portfolio">Work</NavLink>
          </div>
        </Fade>
      </div>
    );
  }
}
