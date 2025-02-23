import React, { Component } from "react";
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
              <img src={Me} alt="Yun Won" />
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
                  <h5>Web Development</h5>
                  <div className={styles.description}>
                    <ul>
                      <li>HTML5, CSS3 (SASS/SCSS)</li>
                      <li>Responsive Design</li>
                      <li>Javascript (React JS, jQuery)</li>
                      <li>Bootstrap, Tailwind CSS</li>
                      <li>HTML email</li>
                      <li>
                        WordPress (Elementor, Divi, WooCommerce)
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
                  <li>Blender</li>
                </ul>
              </div>
            </this.renderSkills>
            <this.renderSkills title={`I've been working at`}>
              <div className={styles.description}>
                <div style={{ marginBottom: "2.5rem" }}>
                  <p className={styles.year}>
                    <b>May 2021 - Dec 2024</b>
                  </p>
                  <p>
                    <b>Ingram Micro APAC</b>
                    <br />
                    <i>as a Graphic/Web designer</i>
                  </p>
                  <ul className={styles.subList}>
                    <li>
                      Collaborated with <b>clients and marketing managers across APAC countries</b> to deliver tailored digital solutions.</li>
                    <li>Designed and executed <b>200+ digital campaigns</b> under tight deadlines, ensuring brand consistency and high engagement.</li>
                    <li><b>Mentored and provided constructive feedback</b> to junior designers, improving team efficiency and design quality.</li>
                    <li>Designed and developed <b>responsive landing pages, websites and emails</b> using <b>HTML, CSS, jQuery, React,</b> enhancing user experience and site performance.
                    </li>
                  </ul>
                </div>
                <div style={{ marginBottom: "2.5rem" }}>
                  <p className={styles.year}>
                    <b>Dec 2019 - Present</b>
                  </p>
                  <p>
                    <b>Freelancing</b>
                    <br />
                    <i>as a UX/UI designer, Front-end developer, Web Producer</i>
                  </p>
                  <ul className={styles.subList}>
                    <li>
                      Worked closely with clients and senior developers to define project scope and deliver tailored digital solutions.</li>
                    <li>Designed and built <b>responsive websites</b> for web and mobile using <b>Figma, HTML, CSS, React, Vue.js, Next.js, and WordPress.</b></li>
                    <li>Managed and maintained WordPress websites, ensuring <b>performance and security.</b></li>
                    <li><b>Notable Clients:</b> The History of Egypt Podcast, Bouqo, LotsaGoodies.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className={styles.year}>
                    <strong>Aug 2018 - Nov 2019</strong>
                  </p>
                  <p>
                    <b>Toolbox Digital in Auckland, New Zealand</b>
                    <br />
                    <i>as a UX/UI designer and front-end developer</i>
                  </p>
                  <ul className={styles.subList}>
                    <li>
                      Designed <b>responsive websites and web apps</b> for desktop and mobile platforms using <b>Figma and UXPin.</b></li>
                    <li>Developed and maintained front-end functionality using <b>HTML, CSS, and React</b>, ensuring responsive design and performance.</li>
                    <li>Conducted <b>testing and optimisation</b>, resulting in improved site usability and reduced load times.</li>
                  </ul>
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
                    <b>Tasman International Academies in New Zealand</b>
                    <br />
                    Graduate diploma in IT Multimedia
                  </p>
                </div>
                <div>
                  <p className={styles.year}>
                    <strong>Mar 2008 - Feb 2014</strong>
                  </p>
                  <p>
                    <b>Kookmin University in South Korea</b>
                    <br />
                    Bachelor’s degree in Visual communication Design / Fine
                    Art
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
      </Layout >
    );
  }
}
