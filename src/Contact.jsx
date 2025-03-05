import React from "react";

import web from "../src/imgs/contactus.jpeg";
//import C from "./C";
import Header from "./Header";
import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <Header head="CONTACT US" />

      <section id="header " className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 header-img">
                  <img src={web} className="img-fluid animated" alt="" />
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 d-flex  flex-column">
                  <div className="row">
                    <div className="col-lg-6">
                      <MdEmail style={{ Color: "#ffb606" }} />

                      <h5>BIGFORM.609@GMAIL.COM</h5>
                    </div>
                    <div className="col-lg-6">
                      <MdCall style={{ Color: "white" }} />

                      <h5>+0164-2430065 <br/>
                        +91 946 3336 383
                      </h5>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div class="container">
                      <h1>Send a message!!</h1>
                      <form
                        target="_blank"
                        action="https://formsubmit.co/BIGFORM.609@GMAIL.COM"
                        method="POST"
                      >
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Full Name"
                                required
                              />
                            </div>
                            <div className="col">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email Address"
                                required
                              />
                            </div>
                            <div className="col">
                              <input
                                type="phone number"
                                name="phone number"
                                className="form-control"
                                placeholder="Phone number"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div classN="form-group">
                          <textarea
                            placeholder="Your Message"
                            className="form-control"
                            name="message"
                            rows="10"
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-lg btn-dark btn-block"
                        >
                          Submit
                        </button>
                      </form>
                      <br />
                    </div>
                  </div>
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
export default Contact;
