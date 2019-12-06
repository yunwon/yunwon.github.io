import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./GoToPortfolio.module.scss";

const GoToPortfolio = ({ right }) => {
  let className = classNames(
    styles.container,
    right ? styles.flexEnd : styles.flexStart
  );
  return (
    <div className={className}>
      <Link to="/portfolio">View more work</Link>
    </div>
  );
};

export default GoToPortfolio;
