import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../../components/Layout/Layout";
import common from "../common.module.scss";
import ToolboxMain from "src/assets/portfolio/toolbox.png";
import ToolboxResponsive from "src/assets/portfolio/responsive.png";
import ToolboxVideo from "src/assets/portfolio/toolbox-video.mp4";
import Description from "../../components/Description";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";

export default class Toolbox extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
                <h6>Year</h6>
                <p>2019</p>
              </div>
              <div>
                <h6>Role</h6>
                <p>UI design</p>
                <p>Front-end development</p>
              </div>
              <div>
                <h6>Software & Technology</h6>
                <p>Figma</p>
                <p>React JS, HTML5, CSS3(SCSS)</p>
              </div>
              <div>
                <h6>
                  <a href="https://digital.toolbox.net.nz/" target="_blank" rel="noopener noreferrer">
                    Visit website
                  </a>
                </h6>
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
          <Description
            title="Video & Animations"
            paragraph="I used a video as a background image of people working on
                  software development to make the site look alive and real.
                  Also I added smooth animations to most of elements to give
                  users nice little entertainments."
            bgVideo={ToolboxVideo}
            imgPosition="right"
          />
          <Description
            title="Fast and responsive Front-end development"
            paragraph="I created fully responsive design from mobile, tablet to
            desktop so user can have the same experience in every devices.
            It is built with 'mobile-up' which means I developed it for
            mobile size first and added styling for bigger screens using
            media queries. With React JS, I created reusable components
            which shortened the development time."
            bgImage={ToolboxResponsive}
            imgPosition="left"
          />
        </div>
        <GoToPortfolio />
      </Layout>
    );
  }
}
