import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const C = (props) => {
  return (
    <div>
      <section id="header " className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column">
                  <h2 className="my-3">we sell</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default C;
