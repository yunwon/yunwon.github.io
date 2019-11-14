import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../components/Layout/Layout";
import common from "./common.module.scss";
import styles from "./Toolbox.module.scss";
import ToolboxMain from "../../../assets/portfolio/toolbox.png";

export default class Toolbox extends Component {
  render() {
    return (
      <Layout>
        <div className={common.hero}>
          <h1>Work</h1>
          <h2>A website for Toolbox Digital</h2>
          <img src={ToolboxMain} alt="Toolbox Digital" />
        </div>
        <div className={common.body}>
          <div className={common.intro}>
            <div className={common.brief}>
              <div>
                <h4>Year</h4>
                <p>2019</p>
              </div>
              <div>
                <h4>Role</h4>
                <p>UI design</p>
                <p>Front-end development</p>
              </div>
              <div>
                <h4>Software & Technology</h4>
                <p>Figma</p>
                <p>React JS, HTML5, CSS3(SCSS)</p>
              </div>
              <div>
                <h4>Visit website</h4>
              </div>
            </div>
            <p>
              Recently I designed and developed a website for Toolbox Digital
              that is a software development company. The main purpose of the
              website was to advertise the brand and showcase its recent work. I
              used the Toolbox brand colours for overall design and put three
              mains business areas on the landing page and linked them to each
              relevant portfolio sections, so that users can know what they are
              and what they do straight away.
            </p>
          </div>
          <div className={common.descriptionWrapper}>
            <div className={`${common.description} ${common.left}`}>
              <div className={common.descriptionText}>
                <h3>Video & Animations</h3>
                <p>
                  I used a video as a background image of people working on
                  software development to make the site look alive and real.
                  Also I added smooth animations to most of elements to give
                  users nice little entertainments.
                </p>
              </div>
            </div>
            <div className={common.image01} />
          </div>
          <div className={common.descriptionWrapper}>
            <div className={common.image02} />
            <div className={`${common.description} ${common.right}`}>
              <div className={common.descriptionText}>
                <h3>Fast and responsive Front-end development</h3>
                <p>
                  I created fully responsive design from mobile, tablet to
                  desktop so user can have the same experience in every devices.
                  It is built with 'mobile-up' which means I developed it for
                  mobile size first and added styling for bigger screens using
                  media queries. With React JS, I created reusable components
                  which shortened the development time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
