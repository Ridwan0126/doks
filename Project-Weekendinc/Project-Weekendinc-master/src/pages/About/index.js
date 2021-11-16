import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Ceck: [],
    };
  }

  componentDidMount() {
    const urlFetch = fetch(
      "https://wknd-take-home-challenge-api.herokuapp.com/testimonial"
    );
    urlFetch
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        const dataArr = resJson.map((Ceck) => {
          return {
            id: Ceck.id,
            testimony: Ceck.testimony,
            by: Ceck.by,
          };
        });
        console.log("JSONDATA:", dataArr);
        this.setState({
          Ceck: dataArr,
        });
      });
  }

  render() {
    const { Ceck } = this.state;
    console.log("Ceck", Ceck);
    return (
      <>
        <div className="abouts">
          <div className="Apps">
            <div>
              <p className="test">Testimonial</p>
            </div>
            <div className="App">
              <Carousel breakPoints={breakPoints}>
                {Ceck.map((data) => (
                  <>
                    <Item>
                      <p className="carus">
                        <p className="tebal">{data.by}</p>
                        {data.testimony}
                      </p>
                    </Item>
                  </>
                ))}
              </Carousel>
            </div>
          </div>
          <div>
            <div>
              <p className="pov">POV</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do
                eiusmod tempor incididnut ut labore et dolore magna aliqua. Ut
                einim ad minim veniam, quis nostrud ullamo laboris nisi ea
                commodo consequat. Duis aute irur dolor in reprehendrit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <p className="pov">Resource</p>
              <p className="lorem">
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when power of choice is untrammeled and when nothing
                prevents aour being able to do what we like best
              </p>
            </div>
            <div className="hlp">
              <p className="pov">Help & Tips</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
