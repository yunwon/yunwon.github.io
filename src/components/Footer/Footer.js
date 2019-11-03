import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h3>Email me or Find me elsewhere</h3>
          <div>
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
        <div>&copy;Jeongyun Won 2019 all rights reserved</div>
      </footer>
    );
  }
}
