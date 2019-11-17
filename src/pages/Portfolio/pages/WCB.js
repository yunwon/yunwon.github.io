import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Easyforms.module.scss";

export default class WCB extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <h1>Work</h1>
        </div>
      </Layout>
    );
  }
}
