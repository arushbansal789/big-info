import React from "react";
import { NavLink } from "react-router-dom";
//import web from "../src/imgs/about.jpg";

const MCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto" style={{ textAlign: "center" }}>
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h7 className="card-text">{props.text}</h7>
            <br />
            <NavLink to="tel:9463336383" className="btn btn-primary">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default MCard;
