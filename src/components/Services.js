import React from "react";
import afroBarber1 from "../images/afro-barber.jpeg";
import afroBarber2 from "../images/afro-barber1.jpeg";

const Services = () => (
  <div className="service-container">
    <h1>Our Services</h1>
    <ul>
      <li className="service-item">
        <img src={afroBarber1} alt="Afro Barber 1" className="service-image" />
        <div className="service-info">
          <span className="service-name">Klip </span>
          <span className="service-price">200 kr</span>
        </div>
      </li>
      <li className="service-item">
        <img src={afroBarber2} alt="Afro Barber 2" className="service-image" />
        <div className="service-info">
          <span className="service-name">Klip og skæge</span>
          <span className="service-price">250 kr</span>
        </div>
      </li>
      <li className="service-item">
        <img src={afroBarber1} alt="Afro Barber 1" className="service-image" />
        <div className="service-info">
          <span className="service-name">Line og skæg </span>
          <span className="service-price">150 kr</span>
        </div>
      </li>
      <li className="service-item">
        <img src={afroBarber1} alt="Afro Barber 1" className="service-image" />
        <div className="service-info">
          <span className="service-name">Sort farve</span>
          <span className="service-price">100 kr</span>
        </div>
      </li>
    </ul>
  </div>
);

export default Services;
