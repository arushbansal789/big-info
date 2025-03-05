import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import web from "../src/imgs/c.jpeg";
import web1 from "../src/imgs/ccccc.jpg";
import web3 from "../src/imgs/cccc.jpg";

export class BCarousel extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn "></div>
          </div>
        </div>
        <div className="container-fluid">
          <Carousel className="center" autoPlay={true} interval={300}>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "500px", border: "7px solid #000" }}
                className="d-block w-100 "
                src={web}
                alt={"Century paper"}
              />
            </Carousel.Item>

            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "500px", border: "7px solid #000" }}
                className="d-block w-100"
                src={web1}
                alt={"Century paper"}
              />
            </Carousel.Item>

            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "500px", border: "7px solid #000" }}
                className="d-block w-100"
                src={web3}
                alt={"Century paper"}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BCarousel;
