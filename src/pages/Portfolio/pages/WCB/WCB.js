import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "src/components/Layout/Layout";
import common from "../common.module.scss";
import WCBMain from "src/assets/portfolio/wcb-main.png";
import DetailImage from "src/assets/portfolio/detail.png";
import PeopleImage from "src/assets/portfolio/people-screens.png";
import Description from "../../components/Description";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";

export default class WCB extends Component {
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
          <h2>A website redesign for WhiteCollarBlue Australia</h2>
          <img src={WCBMain} alt="White Collar Blue" />
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
                <div>
                  <p>UX/UI design</p>
                  <p>Front-end development</p>
                </div>
              </div>
              <div>
                <h6>Software & Technology</h6>
                <div>
                  <p>UXPin</p>
                  <p>React JS, HTML5, CSS3(SCSS)</p>
                </div>
              </div>
              <a>
                <h6>Visit website</h6>
              </a>
            </div>
            <p>
              WhiteCollarBlue is a HR company based in Sydney, Australia. With
              my broad range of skills, I could participated in UX/UI design and
              front-end development.
            </p>
          </div>
          <Description
            title="Strong user experience"
            paragraph="The main purpose of the website was to cater for both job seekers'
            and employers' needs. Our team decided that both users should be able
            to find what they need as quick as possible, so I placed the key functions 
            in the 'above the fold' area. In one or two clicks, both users can instantly reach where they want."
          />
          <Description
            title="Design that boosts brand recognition"
            paragraph="I selected blue as a main colour scheme which is from the logo of WCB. In addition, 
            I used the blue border as the key design element of the website so that it boosts the brand recognition."
            bgImage={DetailImage}
            imgPosition="left"
          />
          <Description
            title="Images of people"
            paragraph="I selected lots of images of workers which not only make users
            feel they are actually connecting to real people, but also
            supports WCB's identity which is a HR company."
            bgImage={PeopleImage}
            imgPosition="right"
          />
        </div>
        <GoToPortfolio />
      </Layout>
    );
  }
}
