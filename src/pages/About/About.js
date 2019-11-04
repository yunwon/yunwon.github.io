import React, { Component } from "react";
import Me from "../../assets/about/jeongyunwon.png";
import styles from "./About.module.scss";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.hero}>
          <div>
            <h1>About Me</h1>
            <img src={Me} alt="Jeongyun Won" />
          </div>
          <a>Download my CV</a>
        </div>
        <div className={styles.body}>
          <article>
            <div>
              <h2>I can do</h2>
            </div>
            <div>
              <div>
                <h3>Web/Graphic design</h3>
                <div>
                  <ul>
                    <li>UI design</li>
                    <li>UX design</li>
                    <li>Graphic Design</li>
                    <li>Illustrations</li>
                    <li>
                      <a>See my design works</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3>Front-end Develepment</h3>
                <div>
                  <ul>
                    <li>HTML, CSS(SCSS)</li>
                    <li>Responsive Design, </li>
                    <li>React JS, Javascript</li>
                    <li>
                      <a>See my works in Github</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
