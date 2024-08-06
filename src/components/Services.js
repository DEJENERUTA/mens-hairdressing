import React from "react";

const Services = () => (
  <div className="service-container">
    <h1>Our Services</h1>
    <ul>
      <li className="service-item">
        <span className="service-name">Haircut</span>
        <span className="service-price">150 kr</span>
      </li>
      <li className="service-item">
        <span className="service-name">Haircut and Shave</span>
        <span className="service-price">200 kr</span>
      </li>
      <li className="service-item">
        <span className="service-name">Shave</span>
        <span className="service-price">100 kr</span>
      </li>
      <li className="service-item">
        <span className="service-name">Beard Trim</span>
        <span className="service-price">100 kr</span>
      </li>
      <li className="service-item">
        <span className="service-name">Coloring</span>
        <span className="service-price">100 kr</span>
      </li>
    </ul>
  </div>
);

export default Services;
