import React, { Component } from "react";
import BurgerButton from "./components/BurgerButton.js/BurgerButton";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>Jeongyun Won</div>
        <BurgerButton />
      </header>
    );
  }
}
