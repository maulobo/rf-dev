import React from "react";
import "./superposition.scss";
import Petroleo from "./petroleo";
import Metalurgica from "./metalurgica";
import Hoteles from "./hoteles";
import Footer from "./footer";

const Superposition = () => {
  return (
    <div className="superposition-container">
      <section className="superposition-section">
        <div className="superposition-container">
          <div className="superposition-box superposition-box1">
            <Petroleo />
          </div>
          <div className="superposition-box superposition-box2">
            <Metalurgica />
          </div>
          <div className="superposition-box superposition-box3">
            <Hoteles />
          </div>
          <div className=" superposition-box4">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Superposition;
