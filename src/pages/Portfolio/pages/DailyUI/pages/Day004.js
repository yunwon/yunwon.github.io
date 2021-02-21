import React, { Component } from "react";
import styles from "./Day004.module.scss";
import Fade from "react-reveal/Fade";
import { FaQuestionCircle } from "react-icons/fa";

export default class Day004 extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>
              Cat <span className={styles.orange}>BMI</span> Calculator
            </h1>
            <h6>Measure Your Cat's Body Mass Index - the FBMI</h6>
            <p>
              The Feline Body Mass Index follows the same concept as the human
              BMI measurement where you look at a person's weight and height and
              work out the percentage of body mass made up of fat.
            </p>
          </div>
          <div className={styles.formContainer}>
            <form>
              <div className="formItem">
                <label htmlFor="catName">Cat name</label>
                <input type="text" id="catName" />
              </div>
              <div className="formItem">
                <label htmlFor="ribCage">
                  Rib cage(cm)
                  <FaQuestionCircle />
                </label>
                <input type="text" id="ribCage" />
              </div>
              <div className="formItem">
                <label htmlFor="catName">
                  Lim (cm)
                  <FaQuestionCircle />
                </label>
                <input type="text" id="catName" />
              </div>
              <button>See the Result!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
