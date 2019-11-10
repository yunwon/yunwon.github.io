import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.contact}>
            <h2>
              <a href="mailto:jeongyunw@gmail.com">Email me</a> or Find me in
              elsewhere
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
                href="https://github.com/yunwon"
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
              <a
                href="https://www.instagram.com/wonjeongyun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.copy}>
            &copy; Jeongyun Won 2019 all rights reserved
          </div>
        </div>
      </footer>
    );
  }
}
