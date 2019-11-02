import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          Hello, I'm Yun. I'm a web designer + front-end developer based in
          Auckland, New Zealand. I'm enthusiastic at creating exceptional user
          experiences with my broad range of skills. Check out my recent work
          here and say hello if you'd like to know more.
        </div>
        <div>
          <NavLink to="/portfoilo">View more work</NavLink>
        </div>
      </div>
    );
  }
}
