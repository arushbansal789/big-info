import React from "react";
import { NavLink } from "react-router-dom";
//import web from "../src/imgs/about.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.textf}</p>
            <NavLink to="/contact" className="btn btn-primary">
              Request Brochure
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
