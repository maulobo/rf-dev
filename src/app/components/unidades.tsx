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
          Nuestra empresa se destaca por su diversidad de unidades de negocio,
          cada una especializada en su sector. Desde servicios tecnológicos
          hasta soluciones creativas y más, nuestras diversas unidades de
          negocio están dedicadas a satisfacer las necesidades variadas de
          nuestros clientes con enfoque, experiencia y excelencia en cada área.
        </motion.p>
      </section>
    </div>
  );
};

export default Unidades;
