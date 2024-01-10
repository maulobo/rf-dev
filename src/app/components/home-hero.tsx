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
    transition: { type: "spring", duration: 1, stiffness: 200, delay: 0.5 },
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
    transition: { type: "spring", duration: 1, stiffness: 200, delay: 0.8 },
  },
};

const HomeHero = () => {
  return (
    <div className="home-hero-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="home-hero-first"
      >
        <Image src={logo} alt="logo" height={230} className="home-hero-img" />
        <Scroll />
      </motion.div>
      <div className="home-hero-second">
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <h1>SOBRE </h1>
          <h1>NOSOTROS</h1>
        </motion.div>
        <motion.p variants={pVariants} initial="hidden" animate="visible">
          Somos una empresa multifacética comprometida con la excelencia en
          diversos sectores. Desde tecnología innovadora hasta soluciones
          creativas, abarcamos una amplia gama de rubros para ofrecer calidad y
          eficiencia en cada proyecto. Nuestra pasión por la excelencia impulsa
          nuestro compromiso de ofrecer resultados excepcionales en cada área en
          la que trabajamos
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero;
