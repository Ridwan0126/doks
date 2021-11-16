import React, { Component } from "react";
import { Alpha } from "../../assets/image";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div>
            <div className="wkn">
              <p className="tbl">wknd</p>
              <div>@2020</div>
            </div>
          </div>
          <div>
            <img
              src={Alpha}
              alt="Girl in a jacket"
              width="100"
              height="20"
              className="img-logo"
            />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
