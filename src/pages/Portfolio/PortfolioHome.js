import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import styles from "./PortfolioHome.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
                <LazyLoadImage
                  alt="Easyforms"
                  effect="blur"
                  src={require("../../assets/home/easyforms.png")}
                />
              </Link>
            ) : null}
            {this.state.webDesign || this.state.frontEnd ? (
              <Link to="/portfolio/toolbox">
                <LazyLoadImage
                  alt="Toolbox"
                  effect="blur"
                  src={require("../../assets/home/toolbox.png")}
                />
              </Link>
            ) : null}
            {this.state.webDesign || this.state.frontEnd ? (
              <Link to="/portfolio/wcb">
                <LazyLoadImage
                  alt="White Collar Blue"
                  effect="blur"
                  src={require("../../assets/home/wcb-thumb.png")}
                />
              </Link>
            ) : null}
          </div>
        </Fade>
      </Layout>
    );
  }
}
