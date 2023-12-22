import React from "react";
import MyBtn from "./my-button";

const Hoteles = () => {
  return (
    <div className="hoteles-container">
      <div className="hoteles-section1">
        <div>
          <h2>HOTEL CRYSTAL</h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        </p>
        <MyBtn text="MAS INFO" colorPasado="red" />
      </div>
      <div className="hoteles-section2">
        <div>
          <h2>HOTEL IBERIA</h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          accusantium eaque
        </p>
        <MyBtn text="MAS INFO" colorPasado="red" />
      </div>
    </div>
  );
};

export default Hoteles;
