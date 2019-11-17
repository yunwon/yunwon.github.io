import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import styles from "./PortfolioHome.module.scss";

export default class PortfolioHome extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <h1>Work</h1>
          <ul>
            <li>Web design</li>
            <li>Graphic design</li>
            <li>Front-end development</li>
          </ul>
        </div>
        <div className={styles.works}>
          <Link to="/portfolio/easyforms">
            <img
              src={require("../../assets/home/easyforms.png")}
              alt="Easyforms"
            />
          </Link>
          <Link to="/portfolio/wcb">
            <img src={require("../../assets/home/toolbox.png")} alt="Toolbox" />
          </Link>
          <Link to="/portfolio/toolbox">
            <img src={require("../../assets/home/toolbox.png")} alt="Toolbox" />
          </Link>
          <Link to="/portfolio/easyforms">
            <img
              src={require("../../assets/home/easyforms.png")}
              alt="Easyforms"
            />
          </Link>
          <Link to="/portfolio/wcb">
            <img src={require("../../assets/home/toolbox.png")} alt="Toolbox" />
          </Link>
          <Link to="/portfolio/toolbox">
            <img src={require("../../assets/home/toolbox.png")} alt="Toolbox" />
          </Link>
        </div>
      </Layout>
    );
  }
}
