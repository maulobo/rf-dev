import React from "react";
import Form from "./form";
import "./footer.scss";
import { FooterSide } from "./footer-side";

const Footer = () => {
  return (
    <div className="footer-container">
      <Form />
      <FooterSide />
    </div>
  );
};

export default Footer;
