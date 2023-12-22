import React from "react";
import "./superposition.scss";
import Petroleo from "./petroleo";
import Metalurgica from "./metalurgica";
import Hoteles from "./hoteles";

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
          <div className=" superposition-box4">4</div>
        </div>
      </section>
    </div>
  );
};

export default Superposition;
