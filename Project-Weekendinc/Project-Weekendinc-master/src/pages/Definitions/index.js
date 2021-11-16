import React, { Component } from "react";
import { animation } from "../../assets/image";

export default class Definitions extends Component {
  render() {
    return (
      <div className="defin">
        <div className="logo-defin">
          <img src={animation} alt="weekendinc" width="198" height="190" />
        </div>

        <div>
          <p className="deff">
            <strong>Deffinition;</strong> a practice or exercise to test or
            omprove one's fitness for athletic competition, ability, or
            performance to exhaust (something, such as a mine) by working ti
            devise, <br /> arrange, or achieve by resolving difficulties. <br />
            Merriam-Webster.com Dictionary.
          </p>
          <br />
          <div className="it">
            <i>-Weekend team</i>
          </div>
        </div>
      </div>
    );
  }
}
