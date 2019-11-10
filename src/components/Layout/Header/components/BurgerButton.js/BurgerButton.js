import React, { useState } from "react";
import styles from "./BurgerButton.module.scss";

export const BurgerButton = () => {
  const [buttonChange, setButtonChange] = useState(false);

  const toggle = () => {
    setButtonChange(buttonChange === true ? false : true);
  };

  const burgerMenuClasses = `${styles.burgerMenu} ${
    buttonChange === true ? styles.menuOn : null
  }`;

  return (
    <div className={burgerMenuClasses} onClick={toggle}>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>
  );
};
