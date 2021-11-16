import React, { Component } from "react";
import { About, Definitions, Help, Home, You } from "../../pages";
import "../../Css/App.css";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Home />
          <Definitions />
          <About />
          <Help />
          <You />
        </div>
      </div>
    );
  }
}
