import React, { Component } from "react";
import { Link } from "react-router-dom";
import Me from "../../assets/about/jeongyunwon.png";
import styles from "./About.module.scss";
import { Layout } from "../../components/Layout/Layout";

export default class About extends Component {
  renderSkills = ({ title, children }) => {
    return (
      <div className={styles.block}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.contents}>{children}</div>
      </div>
    );
  };

  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1>About Me</h1>
            <img src={Me} alt="Jeongyun Won" />
          </div>
          <div className={styles.heroRight}>
            <a>Download my CV</a>
          </div>
        </div>
        <div className={styles.body}>
          <article>
            <this.renderSkills title={`I can do`}>
              <div className={styles.contents_flex}>
                <div className={styles.contents_left}>
                  <h3>Web/Graphic design</h3>
                  <div className={styles.description}>
                    <ul>
                      <li>UI design</li>
                      <li>UX design</li>
                      <li>Graphic Design</li>
                      <li>
                        <Link to="/portfolio">See my design works</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.contents_right}>
                  <h3>Front-end Develepment</h3>
                  <div className={styles.description}>
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
            </this.renderSkills>
            <this.renderSkills title={`Softwares that \nI use are`}>
              <div className={styles.description}>
                <ul>
                  <li>Adobe XD, Illustrator, Photoshop</li>
                  <li>UX Pin / Figma</li>
                  <li>Github / VSCode</li>
                </ul>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`I am currently working at`}>
              <div className={styles.description}>
                <p className={styles.year}>
                  <i>Aug 2018 - present</i>
                </p>
                <p>
                  <b>Toolbox Digital in Auckland, NZ</b>
                </p>
                <p>as a web/graphic designer and front-end developer</p>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`I studied at`}>
              <div className={styles.description}>
                <div style={{ marginBottom: "2rem" }}>
                  <p className={styles.year}>
                    <i>Mar 2017 - Feb 2018</i>
                  </p>
                  <p>Tasman International Academies in New Zealand</p>
                  <p>
                    <b>Graduate diploma in IT Multimedia</b>
                  </p>
                </div>
                <div>
                  <p className={styles.year}>
                    <i>Mar 2008 - Feb 2014</i>
                  </p>
                  <p>Kookmin University in South Korea</p>
                  <p>
                    <b>
                      Bachelor’s degree in Visual communication Design / Fine
                      Art
                    </b>
                  </p>
                </div>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`When I'm not working, I'm...`}>
              <div className={styles.description}>
                <ul>
                  <li>Reading books</li>
                  <li>Drawing</li>
                  <li>Playing Ukulele</li>
                </ul>
              </div>
            </this.renderSkills>
          </article>
        </div>
      </Layout>
    );
  }
}
