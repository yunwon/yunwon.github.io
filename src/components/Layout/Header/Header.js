import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BurgerButton } from "./components/BurgerButton/BurgerButton";
import styles from "./Header.module.scss";
import NavMenu from "src/components/Layout/Header/components/NavMenu/NavMenu";

const Header = () => {
  const [buttonChange, setButtonChange] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggle = () => {
    setShowNavMenu(showNavMenu === false ? true : false);
    setButtonChange(buttonChange === false ? true : false);
  };

  const headerClasses = `${styles.header} ${
    showNavMenu === true ? styles.menuOn : null
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            <div>Yun Won</div>
          </Link>
          <BurgerButton click={toggle} burgerChangeState={buttonChange} />
        </div>
        {showNavMenu ? <NavMenu /> : null}
      </header>
    </>
  );
};

export default Header;
