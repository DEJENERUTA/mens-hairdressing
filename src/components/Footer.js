import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => (
  <div className="footer">
    <div className="footer-left">
      <p>&copy; 2024 Our Hairdressing Shop</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms-of-service">Terms of Service</a>
      </p>
    </div>
    <div className="footer-right">
      <a
        href="https://www.instagram.com/afrobarbers49/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
);

export default Footer;
