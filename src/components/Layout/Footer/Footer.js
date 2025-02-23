import React, { Component } from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.contact}>
            <h2>
              <a href="mailto:yunwonnz@gmail.com">Email me</a> or Find me in
              elsewhere &mdash;&nbsp;
            </h2>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/yunwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/jeongyunw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className={styles.copy}>
            Design & Code by <strong>Yun Won 2025</strong>
          </div>
        </div>
      </footer>
    );
  }
}
