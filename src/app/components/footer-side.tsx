import Image from "next/image";
import React from "react";
import logo from "/public/images/rf.png";
import { Icons } from "../utils/icons";

export const FooterSide = () => {
  return (
    <div className="footer-side-container">
      <div className="footer-side-logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="footer-side-icons">
        {Icons.map((icon) => (
          <div key={`${icon.id}_id`} className="footer-side-icons-i">
            <icon.icon />
          </div>
        ))}
      </div>
    </div>
  );
};
