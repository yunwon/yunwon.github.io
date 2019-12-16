import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import styles from "./PortfolioHome.module.scss";

export default class PortfolioHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  state = {
    webDesign: true,
    graphicDesign: true,
    frontEnd: true
  };
  handleWebDesign = () => {
    this.setState(prevState => ({
      webDesign: !prevState.webDesign
    }));
  };
  handleFrontEnd = () => {
    this.setState(prevState => ({
      frontEnd: !prevState.frontEnd
    }));
  };
  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <Link to="/portfolio">
            <h1>Work</h1>
          </Link>
          <ul>
            <li>Web design</li>
            <li>Graphic design</li>
            <li onClick={this.handleFrontEnd}>Front-end development</li>
          </ul>
        </div>
        <div className={styles.works}>
          {this.state.webDesign && (
            <Link to="/portfolio/easyforms">
              <img
                src={require("../../assets/home/easyforms.png")}
                alt="Easyforms"
              />
            </Link>
          )}
          {(this.state.webDesign || this.state.frontEnd) && (
            <Link to="/portfolio/toolbox">
              <img
                src={require("../../assets/home/toolbox.png")}
                alt="Toolbox"
              />
            </Link>
          )}
          {(this.state.webDesign || this.state.frontEnd) && (
            <Link to="/portfolio/wcb">
              <img
                src={require("../../assets/home/wcb-thumb.png")}
                alt="Toolbox"
              />
            </Link>
          )}
        </div>
      </Layout>
    );
  }
}
