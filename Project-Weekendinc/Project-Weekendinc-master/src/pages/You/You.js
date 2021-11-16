import React, { Component } from "react";
import { Icon2 } from "../../assets/image";

export default class You extends Component {
  render() {
    return (
      <div>
        <div className="isi">
          <p className="Yos">You're all set.</p>
          <p className="lorem">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when power of choice is untrammeled and when nothing prevents
            aour being able to do what we like best
          </p>
        </div>
        <div className="logo2">
          <img src={Icon2} alt="weekendinc" width="198" height="310" />
        </div>
      </div>
    );
  }
}
