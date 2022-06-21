import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.contact}>
            <h2>
              <a href="mailto:jeongyunw@gmail.com">Email me</a> or Find me in
              elsewhere &mdash;&nbsp;
            </h2>
            <div className={styles.social}>
              <a
                href="https://github.com/yunwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
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
            Design & Code by <strong>Jeongyun Won 2022</strong>
          </div>
        </div>
      </footer>
    );
  }
}
