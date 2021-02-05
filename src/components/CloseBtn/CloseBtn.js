import React, { Component } from "react";
import styles from "./CloseBtn.module.scss";

export default CloseBtn = () => {
  return (
    <a
      href="#"
      class={styles.close}
      onClick={() => this.props.history.goBack()}
    />
  );
};
