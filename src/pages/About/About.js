import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Me from "../../assets/about/jeongyunwon.png";
import CV from "../../assets/about/yunwon_cv.pdf";
import styles from "./About.module.scss";
import { Layout } from "../../components/Layout/Layout";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderSkills = ({ title, children }) => {
    return (
      <Fade cascade bottom distance="3rem">
        <div className={styles.block}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.contents}>{children}</div>
        </div>
      </Fade>
    );
  };

  render() {
    return (
      <Layout>
        <Fade top cascade distance="3rem">
          <div className={styles.hero}>
            <div className={styles.heroLeft}>
              <h1>About Me</h1>
              <img src={Me} alt="Jeongyun Won" />
            </div>
            <div className={styles.heroRight}>
              <a href={CV} download>
                Download my CV
              </a>
            </div>
          </div>
        </Fade>
        <div className={styles.body}>
          <article>
            <this.renderSkills title={`I can do`}>
              <div
                className={styles.contents_flex}
                style={{ marginTop: "0.5rem" }}
              >
                <div className={styles.contents_left}>
                  <h5>Design</h5>
                  <div className={styles.description}>
                    <ul>
                      <li>UX/UI design</li>
                      <li>Graphic design (Digital/Print)</li>
                      <li>Animation</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.contents_right}>
                  <h5>Web Develepment</h5>
                  <div className={styles.description}>
                    <ul>
                      <li>HTML5, CSS3 (SASS/SCSS)</li>
                      <li>Responsive Design</li>
                      <li>Javascript (React JS, jQuery)</li>
                      <li>Bootstrap, Tailwind CSS</li>
                      <li>HTML email</li>
                      <li>
                        WordPress <br />
                        (Have experiences in Divi / WooCommerce / Elementor)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`Softwares that \nI use are`}>
              <div className={styles.description}>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Illustrator, Photoshop, Indesign, After Effect, XD</li>
                  <li>Google Analytics, Google Tag Manager</li>
                  <li>Webflow</li>
                  <li>Github / VSCode</li>
                </ul>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`I've been working at`}>
              <div className={styles.description}>
                <div style={{ marginBottom: "2.5rem" }}>
                  <p className={styles.year}>
                    <strong>May 2021 - Dec 2024</strong>
                  </p>
                  <p>
                    <b>Ingram Micro (Agency Ingram Micro)</b>
                    <br />
                    as a Graphic/Web designer<br />
                    <small><i>Creating artwork for digital campaigns. UX/UI design and building front-end for HTML emails and websites</i></small>
                  </p>
                </div>
                <div style={{ marginBottom: "2.5rem" }}>
                  <p className={styles.year}>
                    <strong>Dec 2019 - Aug 2022</strong>
                  </p>
                  <p>
                    <b>Freelancing</b>
                    <br />
                    as a graphic/UX/UI designer and front-end developer<br />
                    <small><i>Main Client: Bouqo, History of Egypt Podcast</i></small>
                  </p>
                </div>
                <div>
                  <p className={styles.year}>
                    <strong>Aug 2018 - Nov 2019</strong>
                  </p>
                  <p>
                    <b>Toolbox Digital in Auckland, NZ</b>
                    <br />
                    as a UX/UI designer and front-end developer
                  </p>
                </div>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`I studied at`}>
              <div className={styles.description}>
                <div style={{ marginBottom: "2.5rem" }}>
                  <p className={styles.year}>
                    <strong>Mar 2017 - Feb 2018</strong>
                  </p>
                  <p>
                    Tasman International Academies in New Zealand
                    <br />
                    <b>Graduate diploma in IT Multimedia</b>
                  </p>
                </div>
                <div>
                  <p className={styles.year}>
                    <strong>Mar 2008 - Feb 2014</strong>
                  </p>
                  <p>
                    Kookmin University in South Korea
                    <br />
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
                  <li>Drawing</li>
                  <li>Cooking</li>
                  <li>Playing video games</li>
                </ul>
              </div>
            </this.renderSkills>
          </article>
        </div>
      </Layout>
    );
  }
}
