import React from "react";
import styles from "./BurgerButton.module.scss";

export const BurgerButton = ({ click, burgerChangeState }) => {
  const burgerMenuClasses = `${styles.burgerMenu} ${
    burgerChangeState === true ? styles.menuOn : null
  }`;

  return (
    <div className={burgerMenuClasses} onClick={click}>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>
  );
};
