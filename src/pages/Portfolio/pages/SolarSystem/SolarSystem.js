import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Layout } from "src/components/Layout/Layout";
import common from "../common.module.scss";
import SolarSystemPoster from "src/assets/portfolio/solarSystemMain.png";
import SolarSystemMain from "src/assets/portfolio/theSolarSystem.mp4";
import SolarSystemSwf from "src/assets/portfolio/theSolarSystem.swf";
import GoToPortfolio from "src/components/GoToPortfolio/GoToPortfolio";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Modal } from "react-bootstrap";

export default class SolarSystem extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };
  render() {
    return (
      <Layout>
        <Fade top cascade distance="3rem">
          <div className={common.hero}>
            <Link to="/portfolio">
              <h1>Work</h1>
            </Link>
            <h2>An interactive animation for children</h2>
            <video
              width="100%"
              autoPlay="true"
              loop="true"
              className={common.video}
              controls="true"
              poster={SolarSystemPoster}
            >
              <source src={SolarSystemMain} type="video/mp4" />
            </video>
          </div>
        </Fade>
        <div className={common.body}>
          <Fade bottom cascade distance="3rem">
            <div className={common.intro}>
              <div className={common.brief}>
                <div>
                  <h6>Year</h6>
                  <p>2018</p>
                </div>
                <div>
                  <h6>Role</h6>
                  <div>
                    <p>Illustration</p>
                    <p>Animation</p>
                  </div>
                </div>
                <div>
                  <h6>Software & Technology</h6>
                  <div>
                    <p>Adobe Animate</p>
                    <p>Adobe Illustator</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h6
                      onClick={() => this.handleShow()}
                      style={{ cursor: "pointer" }}
                    >
                      <span className={common.visit}>View webpage</span>
                    </h6>
                  </div>
                  <Modal
                    show={this.state.showModal}
                    onHide={this.handleClose}
                    className="modal-custom"
                    size="lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <object
                          classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                          width="260"
                          height="23"
                          id="myFlashMovie"
                          align="middle"
                        >
                          <param name="movie" value={SolarSystemSwf} />
                          <param
                            name="FlashVars"
                            value="mp3=song.mp3&amp;showstop=1&amp;loop=1&amp;autoplay=1&amp;showvolume=1"
                          />

                          <object
                            type="application/x-shockwave-flash"
                            data={SolarSystemSwf}
                            className={common.swf}
                            width="720px"
                            height="405px"
                          >
                            <param name="movie" value={SolarSystemSwf} />
                            <param
                              name="FlashVars"
                              value="mp3=song.mp3&amp;showstop=1&amp;loop=1&amp;autoplay=1&amp;showvolume=1"
                            />

                            <a href="http://www.adobe.com/go/getflash">
                              <img
                                src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player"
                              />
                            </a>
                          </object>
                        </object>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
              <p>
                I created an educational interactive animation for children
                about the solar system as a school project. Users can learn
                about each planet by clicking its image and are be able to take
                a quiz by clicking a rocket.
              </p>
              <br />
            </div>
          </Fade>
        </div>
        <GoToPortfolio />
      </Layout>
    );
  }
}
