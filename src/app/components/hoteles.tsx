import React from "react";
import MyBtn from "./my-button";

const Hoteles = () => {
  return (
    <div className="hoteles-container">
      <div className="hoteles-section1">
        <div>
          <h2>HOTEL CRYSTAL</h2>
        </div>
        <p className="hoteles-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem amet
          natus iusto voluptate incidunt ex quas nostrum obcaecati
          reprehenderit. Rem dicta cumque velit suscipit debitis nobis nesciunt
          molestiae reprehenderit quod.
        </p>
        <MyBtn text="MAS INFO" colorPasado="red" />
      </div>
      <div className="hoteles-section2">
        <div>
          <h2>HOTEL IBERIA</h2>
        </div>
        <p className="hoteles-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate
          possimus labore qui laborum iusto atque harum quam totam, nihil
          expedita quia deserunt animi quod asperiores quo voluptas! Modi, ipsa?
        </p>
        <MyBtn text="MAS INFO" colorPasado="red" />
      </div>
    </div>
  );
};

export default Hoteles;
