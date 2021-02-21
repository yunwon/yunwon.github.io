import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import styles from "../../PortfolioHome.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Layout } from "src/components/Layout/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Popup from "reactjs-popup";
import Image from "../../../../assets/portfolio/daily-ui/002/dailyUI002.png";
import dailyUiStyles from "./DailyUi.module.scss";
import "reactjs-popup/dist/index.css";

export default class DailyUi extends Component {
  render() {
    return (
      <Layout>
        <Fade top cascade distance="3rem">
          <div className={styles.hero}>
            <Link to="/portfolio/dailyui" onClick={this.handleAll}>
              <h1>#Daily UI Challenge</h1>
            </Link>
          </div>
        </Fade>
        <Fade bottom distance="3rem">
          <div className={styles.works}>
            <Link to="/portfolio/dailyui/day1">
              <LazyLoadImage
                alt="DailyUI001"
                effect="blur"
                src={require("../../../../assets/portfolio/daily-ui/001/dailyUI001.jpg")}
                className={styles.image}
              />
            </Link>
            <div>
              <Popup
                trigger={
                  <LazyLoadImage
                    alt="DailyUI002"
                    effect="blur"
                    src={require("../../../../assets/portfolio/daily-ui/002/dailyUI002.png")}
                    className={styles.image}
                  />
                }
                modal
                nested
                position="center center"
              >
                {(close) => (
                  <div className={dailyUiStyles.modal}>
                    <button className={dailyUiStyles.close} onClick={close}>
                      &times;
                    </button>
                    <div className={dailyUiStyles.content}>
                      <img src={Image} alt="Day002" />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <Link to="/portfolio/dailyui/day3">
              <LazyLoadImage
                alt="DailyUI003"
                effect="blur"
                src={require("../../../../assets/portfolio/daily-ui/003/dailyui003.png")}
                className={styles.image}
              />
            </Link>
            {/* <Link to="/portfolio/dailyui/day4"> */}
            <LazyLoadImage
              alt="DailyUI004"
              effect="blur"
              src={require("../../../../assets/portfolio/daily-ui/004/dailyUI004.png")}
              className={styles.image}
            />
            {/* </Link> */}
          </div>
        </Fade>
      </Layout>
    );
  }
}
