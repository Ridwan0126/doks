import React, { Component } from "react";
import swal from "sweetalert";
import { logos } from "../../assets/image";

export default class Home extends Component {
  Clicked = () => {
    swal({
      title: "WEEKENDINC",
      text: "Hallo, Welcome To Weekendind :)",
      icon: "success",
      button: false,
      timer: 2500,
    });
  };

  render() {
    return (
      <div id="backgrounds">
        <div className="get-start">
          <p>WEEKEND FROM HOME</p>
        </div>
        <div className="desk">
          <i>Stay active with a little workout</i>
        </div>
        <div className="logo-style">
          <img src={logos} alt="Girl in a jacket" width="184" height="305" />
        </div>
        <div className="button-click">
          <button className="button" onClick={this.Clicked}>
            Let's Go
          </button>
        </div>
      </div>
    );
  }
}
