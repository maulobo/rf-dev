import Image from "next/image";
import React from "react";
import logo from "/public/images/rf.png";
import "./hero.scss";
import Scroll from "./scroll";

const HomeHero = () => {
  return (
    <div className="home-hero-container">
      <div className="home-hero-first">
        <Image src={logo} alt="logo" height={400} />
        <Scroll />
      </div>
      <div className="home-hero-second">
        <div>
          <h1>SOBRE </h1>
          <h1>NOSOTROS</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          provident ut quasi mollitia veniam earum, quas, nostrum, aspernatur
          saepe sequi perferendis quod molestiae laboriosam! Minima earum ipsa
          dignissimos provident odio.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
