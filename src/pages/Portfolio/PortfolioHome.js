import React, { Component } from "react";
import Fade from "react-reveal/Fade";
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
    this.setState({
      webDesign: true,
      graphicDesign: false,
      frontEnd: false
    });
  };
  handleFrontEnd = () => {
    this.setState({
      webDesign: false,
      graphicDesign: false,
      frontEnd: true
    });
  };
  render() {
    return (
      <Layout>
        <Fade top cascade distance="3rem">
          <div className={styles.hero}>
            <Link to="/portfolio">
              <h1>Work</h1>
            </Link>
            <ul>
              <li onClick={this.handleWebDesign}>Web design</li>
              <li>Graphic design</li>
              <li onClick={this.handleFrontEnd}>Front-end development</li>
            </ul>
          </div>
        </Fade>
        <Fade bottom distance="3rem">
          <div className={styles.works}>
            {this.state.webDesign ? (
              <Link to="/portfolio/easyforms">
                <img
                  src={require("../../assets/home/easyforms.png")}
                  alt="Easyforms"
                />
              </Link>
            ) : null}
            {this.state.webDesign || this.state.frontEnd ? (
              <Link to="/portfolio/toolbox">
                <img
                  src={require("../../assets/home/toolbox.png")}
                  alt="Toolbox"
                />
              </Link>
            ) : null}
            {this.state.webDesign || this.state.frontEnd ? (
              <Link to="/portfolio/wcb">
                <img
                  src={require("../../assets/home/wcb-thumb.png")}
                  alt="Toolbox"
                />
              </Link>
            ) : null}
          </div>
        </Fade>
      </Layout>
    );
  }
}
