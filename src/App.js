import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./stylesheets/index.scss";
import styles from "./App.module.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </>
    );
  }
}
