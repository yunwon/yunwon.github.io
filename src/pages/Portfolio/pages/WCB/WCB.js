import React, { Component } from "react";
import { Layout } from "src/components/Layout/Layout";
import common from "../common.module.scss";
import WCBMain from "src/assets/portfolio/wcb-main.png";
import DetailImage from "src/assets/portfolio/detail.png";
import PeopleImage from "src/assets/portfolio/people-screens.png";
import Description from "../../components/Description";

export default class WCB extends Component {
  render() {
    return (
      <Layout>
        {/* <embed
          src="../../../assets/portfolio/solar.swf"
          width="550"
          height="400"
        /> */}
        <div className={common.hero}>
          <h1>Work</h1>
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
            and employers' needs. Our team thought both users should be able
            to find what they need as quick as possible, so I tried to put all
            the main functions in the 'above the fold' area. In one or two
            clicks, both users can reach where they want."
          />
          <Description
            title="Design that boosts brand recognition"
            paragraph="I used the same colour scheme as WCB's logo, and used blue
            border of logo as the key design element so that the website
            design boosts the brand recognition."
            bgImage={DetailImage}
            imgPosition="left"
          />
          <Description
            title="Images of people"
            paragraph="I selected lots of images of people which not only make users
            feel they are actually connecting to other people, but also
            match the HR company's character."
            bgImage={PeopleImage}
            imgPosition="right"
          />
        </div>
      </Layout>
    );
  }
}
