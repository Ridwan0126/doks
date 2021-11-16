import React, { Component } from "react";
import { Bitmap } from "../../assets/image";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src={Bitmap}
          alt="Girl in a jacket"
          width="160"
          height="43"
          className="img-logo"
        />
      </div>
    );
  }
}

export default Header;
