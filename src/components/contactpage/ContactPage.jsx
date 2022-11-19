import React from "react";
import "./style.css";
import iconperson from "../../icons/person-circle.svg";
import mapicon from "../../icons/geo-alt-fill.svg";
import emailicon from "../../icons/at.svg";
import cellphoneicon from "../../icons/phone-fill.svg";
import linkedinicon from "../../icons/linkedin.svg";

function ContactPage() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-icons">
          <img src={iconperson} alt="" />
          <img src={mapicon} alt="" />
          <img src={emailicon} alt="" />
          <img src={cellphoneicon} alt="" />
          <img src={linkedinicon} alt="" />
        </div>
        <div className="card-descriptions">
          <p>Samir Schabel</p>
          <p>Margaretha-Rothe-Weg 5, 22455 Hamburg</p>
          <a href="mailto:samirschabel.dev@web.de">samirschabel.dev@web.de</a>
          <p>+49 0176 - 610 845 80</p>
          <a href="https://www.linkedin.com/in/samir-a-schabel-47232a137/">
            https://www.linkedin.com/in/samir-a-schabel-47232a137/
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
