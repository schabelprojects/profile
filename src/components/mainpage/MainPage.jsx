import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import iconperson from "../../icons/person-circle.svg";
import iconcv from "../../icons/person-lines-fill.svg";
import telephone from "../../icons/telephone-fill.svg";
import { Link } from "react-router-dom";


function MainPage() {
  return (
    <>
      <div className="title">
        <h1>Samir Schabel</h1>
      </div>

      <div className="navbtn">
        <Link to="/profile" className="link-nav">
          <Button variant="outline-primary">
            <img src={iconperson} className="iconprofile" />
            About Me
          </Button>
        </Link>
        <Link to="/cv" className="link-nav">
        <Button variant="outline-primary">
          <img src={iconcv} className="iconprofile" />
          Curriculum Vitae
        </Button>
        </Link>
        <Link to="/contact" className="link-nav">
        <Button variant="outline-primary">
          <img src={telephone} className="iconprofile" />
          Contact
        </Button>
        </Link>
      </div>
    </>
  );
}

export default MainPage;
