import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import styles from "./NavMenu.module.scss";

export default class NavMenu extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/portfolio">Work</NavLink>
        </div>
      </div>
    );
  }
}
