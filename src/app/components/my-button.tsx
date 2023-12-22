"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./mybtn.scss";

const MyBtn = ({
  text,
  colorPasado,
}: {
  text: string;
  colorPasado?: string;
}) => {
  const handleClick = () => {
    console.log("Botón clickeado");
  };

  const btnStyles = {
    color: colorPasado || "black",
    borderColor: colorPasado || "black",
  };

  return (
    <button className="mybtn" onClick={handleClick} style={btnStyles}>
      {text}
      <div className="arroy">
        <FaArrowRight />
      </div>
    </button>
  );
};

export default MyBtn;
