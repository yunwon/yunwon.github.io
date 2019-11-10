import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
