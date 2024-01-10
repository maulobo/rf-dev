"use client";
import Image from "next/image";
import React from "react";
import logo from "/public/images/rf.png";
import "./hero.scss";
import Scroll from "./scroll";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: {
    opacity: 0,
    x: "100",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1, stiffness: 200 },
  },
};
const pVariants = {
  hidden: {
    opacity: 0,
    x: "100",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1, stiffness: 200, delay: 0.5 },
  },
};

const HomeHero = () => {
  return (
    <div className="home-hero-container">
      <div className="home-hero-first">
        <Image src={logo} alt="logo" height={400} className="home-hero-img" />
        <Scroll />
      </div>
      <div className="home-hero-second">
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <h1>SOBRE </h1>
          <h1>NOSOTROS</h1>
        </motion.div>
        <motion.p variants={pVariants} initial="hidden" animate="visible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          provident ut quasi mollitia veniam earum, quas, nostrum, aspernatur
          saepe sequi perferendis quod molestiae laboriosam! Minima earum ipsa
          dignissimos provident odio.
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero;
