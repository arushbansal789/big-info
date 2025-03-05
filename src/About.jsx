import React from "react";
import web from "../src/imgs/2.jpeg";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header head="ABOUT US" />

      <section id="header " className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 header-img">
                  <img src={web} className="img-fluid animated" alt="" />
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 d-flex ">
                  <p className="abouts">
                    Bansal Infographics is among the largest commercial printer
                    and allied services company. Established in 1999,Bansal
                    Infographics is renowned in infrastructure, highly skilled
                    team, robust processes and adoption of the latest
                    technological advances. Absolute commitment to quality,
                    meticulous attention to detail and unparalleled level of
                    service has made Thomson Press a leading specialist in
                    Design, Prepress, Printing and distribution services. As a
                    company we are committed to employing skilled operators and
                    staff, investing in the very best technology available and
                    maintaining a close involvement with the industry.
                    <br />
                    <br />
                    <NavLink
                      to="/contact"
                      className="btn btn-primary first_button"
                    >
                      Contact us
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
