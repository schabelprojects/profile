import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

function MainPage() {
  return (
    <>
      <div className="title">
        <h1>Samir Schabel - Profile </h1>
      </div>

      <div className="navbtn">
        <Button variant="outline-primary">Profile</Button>
        <Button variant="outline-primary">Curriculum Vitae</Button>
      </div>
    </>
  );
}

export default MainPage;
