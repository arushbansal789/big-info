import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <NavLink className="navbar-brand navhead" to="/">
                <h1 data-shadow="dang">BIG infographics</h1>
              </NavLink>
              <div class="container">
                <h7 className="white">Interested??</h7>
                <br />
                <form
                  target="_blank"
                  action="https://formsubmit.co/BIGFORM.609@GMAIL.COM"
                  method="POST"
                >
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Drop your email!!"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn  btn-primary ">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Address</h6>
              <ul class="contact">
                <li>
                  <NavLink className="addresses" to="#">
                    <MdLocationOn style={{ outlineColor: "white" }} />
                    E-56, Growth Centre, Mansa Raod, Bhatinda HO, Bhatinda -
                    151001
                  </NavLink>
                </li>
              </ul>
              <h6>Contact</h6>
              <ul class="contact">
                <li>
                  <NavLink className="addresses" to="#">
                    <MdCall style={{ outlineColor: "white" }} />
                    +0164-2430065 <br/>
                    <MdCall style={{ outlineColor: "white" }} />
                    +91 946 3336 383
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <NavLink to="about">About Us</NavLink>
                </li>

                <li>
                  <NavLink to="/service">Our Services</NavLink>
                </li>
                <li>
                  <NavLink to="contact/">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 1999 All Rights Reserved by
                  <NavLink className="addresses" to="/">
                    Bansal Infographics
                  </NavLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
