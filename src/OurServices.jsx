import React from "react";
import Card from "./Card";
import Data from "./Data";
import PaperData from "./PaperData";
import MatrixPrint from "./MatrixPrint";

import Header from "./Header";
import Footer from "./Footer";

const Service = () => {
  return (
    <div>
      <Header head="OUR SERVICES" />

      <div>
        <h2 className="text-center">Offset-printing</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((value, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    textf={value.textf}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Papers</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {PaperData.map((value, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    textf={value.textf}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Dot matrix-printing</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {MatrixPrint.map((value, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    textf={value.textf}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Service;
