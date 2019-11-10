import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BurgerButton } from "./components/BurgerButton.js/BurgerButton";
import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            <div>Jeongyun Won</div>
          </Link>
          <BurgerButton />
        </div>
      </header>
    );
  }
}
