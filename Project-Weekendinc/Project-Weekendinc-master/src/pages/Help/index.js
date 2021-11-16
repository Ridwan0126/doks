import React, { Component } from "react";
import "../../Css/Help.css";
import Icons from "../../assets/icon/Oval.svg";
import swal from "sweetalert";

export default class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const urlFetch = fetch(
      "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"
    );
    urlFetch
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        const dataArr = resJson.map((data) => {
          return {
            id: data.id,
            title: data.title,
            slug: data.slug,
            image: data.image,
          };
        });
        console.log("JSONDATA:", dataArr);
        this.setState({
          data: dataArr,
        });
      });
  }

  render() {
    const { data } = this.state;
    console.log("data", data);
    return (
      <>
        {data.map((item) => (
          <>
            <div className="hlps">
              <div className="container">
                <div>
                  <img
                    src={item.image}
                    alt="Avatar"
                    class="image"
                    width="388"
                    height="228"
                  />
                </div>
                <div className="content">
                  <div>{item.title}</div>
                  <div className="button-click1">
                    <button
                      className="button1"
                      onClick={() => {
                        swal({
                          title: "PERHATIAN!",
                          text: "Apakah anda yakin ingin melihat data ini ?",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            swal("Anda Berhasil Melihat Data", {
                              title: item.title,
                              text: item.slug,
                              icon: "success",
                            });
                          } else {
                            swal("Anda Batal Melihat data !!!");
                          }
                        });
                      }}
                    >
                      <img src={Icons} alt="Avatar"></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
  }
}
