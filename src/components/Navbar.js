import React from "react";
import { Link } from "react-router-dom";
import AfroLogo from "../images/afro-hair-logo.jpg";
const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <div className="logo">
        <img src={AfroLogo} alt="Afro logo" className="logo-image" />
      </div>
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/booking">Book</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
