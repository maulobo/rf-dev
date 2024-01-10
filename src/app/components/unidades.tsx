"use client";
import React from "react";
import HomeVisionMision from "./mision";
import { motion } from "framer-motion";

const unidadesVariants = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 200,
      delay: 0.5,
    },
  },
};
const pVariants2 = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 200,
      delay: 1,
    },
  },
};

const Unidades = () => {
  return (
    <div className="unidades-container">
      <HomeVisionMision />
      <section className="unidades-section">
        <motion.div
          className="unidades-title"
          variants={unidadesVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <h2>UNIDADES</h2>
          <h2>DE NEGOCIO</h2>
        </motion.div>
        <motion.p
          variants={pVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          obcaecati ad harum, maiores molestiae sed atque blanditiis amet minus
          dolores vitae dolore? Tempora, quidem? Repellendus facere deleniti non
          facilis at.
        </motion.p>
      </section>
    </div>
  );
};

export default Unidades;
