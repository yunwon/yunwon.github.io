import React, { Component } from "react";
import { BurgerButton } from "./components/BurgerButton.js/BurgerButton";
import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>Jeongyun Won</div>
          <BurgerButton />
        </div>
      </header>
    );
  }
}
