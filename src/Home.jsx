import React from "react";
import Footer from "./Footer";
import MCard from "./ManagerCards";
import Managers from "./Managers";
import "bootstrap/dist/css/bootstrap.min.css";

import BCarousel from "./Carousel";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <br />
      <br />

      <br />

      <section id="header " className="d-flex align-items-center">
        <div className="container-fluid demo">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 justify-content-center justify-col  ">
                  <h1 className="opposite"> BIG info</h1>
                  <div className="my-auto">
                    <h1 className="header3">Listening </h1>
                    <h1 className="header3">to your printing</h1>
                    <h1 className="header3"> needs!!</h1>
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0  ">
                  <BCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="header " className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="card-deck">
                    <div className="card-body">
                      <h3 className="card-title sty">How we work??</h3>
                      <p className="card-text">
                        We aim at providing quality paper to all whatever type
                        of paper it maybe. From A4 size sheets to any other,we
                        prove all kinds of sheets. We also provide quality
                        printing services ranging from offset printing to
                        dot-matrix printing at a large scale.From last 21
                        years,our company has been supplying paper to bathinda
                        and many other areas of Punjab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 d-flex ">
                  <div className="card-deck">
                    <div className="card-body">
                      <h3 className="card-title sty">Our Customers</h3>

                      <p className="card-text">
                        We have been suppliers to very renowed corporations and
                        institutes. From well known corporate companies to small
                        scale agencies,we have provided our service to many.
                        Some well known customers being the National Fertilizer
                        Ltd,Indian Oils,Pumjab head system corporation etc. We
                        have also been paying our services to many
                        hospitals,schools,gas agencies,pesticide companies etc..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div>
        <h2 className="text-center">Our Directors</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Managers.map((value, index) => {
                return (
                  <MCard
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <section className="instructor">
        <div className="container text-center">
          <div className="row height align-items-center justify-content-center">
            <div className="col">
              <NavLink className="navbar-brand navhead" to="/">
                <h1 data-shadow="dang">BIG infographics</h1>
              </NavLink>
              <h3>
                <small className="text-muted">
                  WHAT WE PROMISE, WE DELIEVER!!
                </small>
              </h3>
              <p></p>

              <NavLink to="/contact" class="btn btn-outline-light btn-lg m-2 ">
                Contact Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
