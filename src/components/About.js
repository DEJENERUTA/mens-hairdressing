import React from "react";
import { Link } from "react-router-dom";
import AwetHaircut from "../images/Awet-haircut.jpg";

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    <h2>Learn more about our story and our team.</h2>
    <p>
      Welcome to Afro Barber, where we celebrate the art of African
      hairdressing. Our team of highly skilled professionals has extensive
      experience in the industry.
    </p>
    <p>
      When you choose Afro Barber, you're choosing excellence in hair cutting,
      styling, and grooming. Our services include precision haircuts, meticulous
      beard grooming, and sharp lining techniques.
    </p>
    <p>
      Additionally, we offer expert hair and beard coloring services. Stay tuned
      because we have exciting new services coming soon. Join us at Afro Barber
      and experience the epitome of African hairdressing.
    </p>
    <div className="team">
      <div className="team-member">
        <img src={AwetHaircut} alt="Awet Haircut" className="team-image" />
        <div className="member-info">
          <h2>John Doe</h2>
          <p>
            John is an experienced barber with over 10 years in the industry. He
            specializes in modern styles and classic cuts.
          </p>
          <Link to={`/booking?hairdresser=John Doe`} className="booking-link">
            Book with John
          </Link>
        </div>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member 2" />
        <div className="member-info">
          <h2>Jane Smith</h2>
          <p>
            Jane is a talented stylist known for her creativity and attention to
            detail. She loves working with clients to create unique looks.
          </p>
          <Link to={`/booking?hairdresser=Jane Smith`} className="booking-link">
            Book with Jane
          </Link>
        </div>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member 3" />
        <div className="member-info">
          <h2>Mike Johnson</h2>
          <p>
            Mike has a passion for barbering and is always up-to-date with the
            latest trends. His skills in fades and shaves are exceptional.
          </p>
          <Link
            to={`/booking?hairdresser=Mike Johnson`}
            className="booking-link"
          >
            Book with Mike
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default About;
