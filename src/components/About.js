import React from "react";
import { Link } from "react-router-dom";
import AwetHaircut from "../images/Awet-haircut.jpg";

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    <h2>Learn more about our story and our team.</h2>
    <p>
      Du vil opleve et rum med højt til loftet, hvor vi skaber det bedste
      individuelle look til dig. Vi har hos Frisør AFRO BARBER tænkt os, at gøre
      dig skøn, skarp og smuk, uanset hvem du er.
    </p>
    <p>
      Hos Frisør AFRO BARBER er du sikret, at alle Stylisterne har gennemgået en
      veloverstået 8 årig erfaring Frisør Vi sikrer dig, at vores erfarne og
      dygtige Stylister, ikke går på kompromis med kvaliteten.
    </p>
    <p> Vi glæder os til at se dig i stolen! 😄</p>
    <div className="team">
      <div className="team-member">
        <img src={AwetHaircut} alt="Awet Haircut" className="team-image" />
        <div className="member-info">
          <h2>Awet Ab</h2>
          <p>
            Awet is an experienced barber with over 8 years in the industry. He
            specializes in modern styles and classic cuts.
          </p>
          <Link to={`/booking?hairdresser=Awet Ab`} className="booking-link">
            Book with Awet
          </Link>
        </div>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member 2" />
        <div className="member-info">
          <h2>Temesgen Brhane </h2>
          <p>
            Temesgen is a talented stylist known for his creativity and
            attention to detail. He loves working with clients to create unique
            looks.
          </p>
          <Link
            to={`/booking?hairdresser=Temesgen Brhane `}
            className="booking-link"
          >
            Book with Temesgen
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
