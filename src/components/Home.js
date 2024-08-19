import React from "react";
import { Link } from "react-router-dom";
import video from "../images/hairdresser.mp4";
const Home = () => (
  <div className="home-container">
    <video autoPlay loop muted className="background-video">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="content">
      <h1>Welcome to Our Hairdressing Shop</h1>
      <p>Your style, our expertise.</p>

      <button>
        <Link to="/booking">Book Now</Link>
      </button>
    </div>
  </div>
);

export default Home;
