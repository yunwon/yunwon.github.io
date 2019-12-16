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
          <Link to="/portfolio">
            <h1>Work</h1>
          </Link>
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
                  <a
                    href="https://digital.toolbox.net.nz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                </h6>
              </div>
            </div>
            <p>
              Recently I designed and developed a website for Toolbox Digital
              which is a software development company. The main purpose of the
              website was to advertise the brand and showcase its recent work.
              To Boost the brand recognition, I selected its brand colours for
              the colour scheme of the website. Additionally, I put three mains
              business areas on the landing page and linked them to each
              relevant portfolio sections.
            </p>
          </div>
          <Description
            title="Video & Animations"
            paragraph="To make this site look alive, I selected a video of people 
                  working on software development and placed it in background.
                  In addition, I added smooth animations for each of design elements to give
                  users nice little entertainments."
            bgVideo={ToolboxVideo}
            imgPosition="right"
          />
          <Description
            title="Fast and responsive Front-end development with React JS and SCSS"
            paragraph="I created fully responsive design from mobile, tablet to
            desktop so user can have the same experience in every devices.
            It is built with 'mobile-up' which means I developed it for
            mobile size first and added styling for bigger screens using
            media queries. With React JS and SCSS, I created reusable components and css rules
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
