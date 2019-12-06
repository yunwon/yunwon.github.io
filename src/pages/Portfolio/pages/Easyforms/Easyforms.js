import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "../../../../components/Layout/Layout";
import common from "../common.module.scss";
import EasyformsMain from "src/assets/portfolio/easyforms-main.png";
import EasyformsResponsive from "src/assets/portfolio/mobile-all.png";
import Video from "src/assets/portfolio/easyforms-video.mp4";
import Description from "../../components/Description";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";

export default class Easyforms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <div className={common.hero}>
          <h1>Work</h1>
          <h2>A Website redesign for Easyforms</h2>
          <img src={EasyformsMain} alt="Easyforms website redesign" />
        </div>
        <div className={common.body}>
          <div className={common.intro}>
            <div className={common.brief}>
              <div>
                <h6>Year</h6>
                <p>2018</p>
              </div>
              <div>
                <h6>Role</h6>
                <p>UX/UI design</p>
              </div>
              <div>
                <h6>Software & Technology</h6>
                <p>Adobe XD</p>
              </div>
              <div></div>
            </div>
            <p>
              I participated in a website redesign project for Easyforms,
              Auckland as an one-off volunteer role. My main approach was to
              create trendy UI design as well as improve usability by getting
              rid of verbiage. This work was my first web design work with a
              real client. In hindsight, There are lots of things that can be
              improved, but I learned a lot from this.
            </p>
          </div>
          <Description
            title="Vivid Colour & Illustations"
            paragraph="I chose the main colour scheme as vivid gradient of blue and yellow. 
            Also, I picked and modified some trendy illustrations which catches eyes and 
            made the website more friendly and fun."
            bgVideo={Video}
            imgPosition="right"
          />
          <Description
            title="Responsive Design for Mobile"
            paragraph="I created mobile first design so that user can easily use the website anywhere."
            bgImage={EasyformsResponsive}
            imgPosition="left"
          />
        </div>
        <GoToPortfolio right />
      </Layout>
    );
  }
}
