import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import styles from "./Description.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Description extends Component {
  // without image
  // image on left
  // image on right

  render() {
    let imgPosition =
      this.props.imgPosition === "left" ? styles.imgLeft : styles.imgRight;
    let imgClass = classNames(styles.image, imgPosition);

    let textPosition =
      this.props.imgPosition === "left" ? styles.textRight : styles.textLeft;

    if (!this.props.imgPosition) {
      return (
        <div className={styles.container_noImage}>
          <h3 className={styles.title_desktop}>{this.props.title}</h3>
          <p>{this.props.paragraph}</p>
        </div>
      );
    }
    return (
      <Fade bottom cascade distance="3rem">
        <div className={styles.container}>
          {/* mobile */}
          <h3 className={styles.title_mobile}>{this.props.title}</h3>
          <div className={imgClass}>
            {this.props.bgImage ? (
              <LazyLoadImage
                alt={this.props.title}
                effect="blur"
                src={this.props.bgImage}
              />
            ) : (
              <video
                width="100%"
                autoPlay="true"
                loop="true"
                className={styles.video}
                controls="true"
              >
                <source src={this.props.bgVideo} type="video/mp4" />
              </video>
            )}
          </div>
          {/* desktop */}
          <div className={textPosition}>
            <div className={styles.text}>
              <h3 className={styles.title_desktop}>{this.props.title}</h3>
              <p>{this.props.paragraph}</p>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
