import React from "react";
import AwetHaircut from "../images/Awet-haircut.jpg";
import Temesgenhaircut from "../images/Temesgen-haircut.jpg";

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    <h2>Learn more about our story and our team.</h2>
    <p>
      You will experience a space with a high ceiling, where we create the best
      individual look for you. At Frisør AFRO BARBER, we intend to make you
      beautiful, sharp, and stunning, no matter who you are
    </p>
    <p>
      At Frisør AFRO BARBER, you are assured that all our stylists have
      completed a well-rounded 8-year experience in hairdressing. We guarantee
      that our experienced and skilled stylists do not compromise on quality.
    </p>
    <p> "We look forward to seeing you in the chair! 😄"</p>
    <div className="team">
      <div className="team-member">
        <img src={AwetHaircut} alt="Awet Haircut" className="team-image" />
        <div className="member-info">
          <h2>Awet Ab</h2>
          <p>
            Awet is an experienced barber with over 8 years in the industry. He
            specializes in modern styles and classic cuts.
          </p>
          <a
            href="https://aafrobarber7365.setmore.com/awetabraha"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-link"
          >
            Book with Awet
          </a>
        </div>
      </div>
      <div className="team-member">
        <img
          src={Temesgenhaircut}
          alt="Temesgen Haircut"
          className="team-image"
        />
        <div className="member-info">
          <h2>Tomas</h2>
          <p>
            Tomas is a talented stylist known for his creativity and attention
            to detail. He loves working with clients to create unique looks.
          </p>
          <a
            href="https://aafrobarber7365.setmore.com/awetabraha"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-link"
          >
            Book with Tomas
          </a>
        </div>
      </div>
      <div className="team-member">
        <img
          src="https://via.placeholder.com/150"
          alt="Abriham"
          className="team-image"
        />
        <div className="member-info">
          <h2>Abriham</h2>
          <p>
            Abriham has a passion for barbering and is always up-to-date with
            the latest trends. His skills in fades and shaves are exceptional.
          </p>
          <a
            href="https://aafrobarber7365.setmore.com/awetabraha"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-link"
          >
            Book with Abriham
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
