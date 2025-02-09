import React, { useState } from "react";
import styled from "styled-components";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image1 from "../../images/background.png";

const Button = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link to={"/event"}>
          <button className="button">
            <div>
              <span>EVENT</span>
            </div>
          </button>
        </Link>
        <button className="button">
          <div>
            <span>COMPETATIONS</span>
          </div>
        </button>
        <button className="button">
          <div>
            <span>ACCOMODATION</span>
          </div>
        </button>
        <button className="button">
          <div>
            <span>SCHEDULE</span>
          </div>
        </button>
        <button className="button">
          <div>
            <span>CONTACT </span>
          </div>
        </button>
        <button className="button">
          <div>
            <span>REGISTER</span>
          </div>
        </button>
      </div>
      <div className="navbar_item">
        <div className="logo">
          <img src={image1} />
        </div>
        <div>
          <ul id="navbar_id" className={clicked ? "active" : ""}>
            <Link to={"/event"}>
              <li>Event</li>
            </Link>
            <li>Competations</li>
            <li>Accomodation</li>
            <li>Schedule</li>
            <li>Contact</li>
            <li>Register</li>
          </ul>
        </div>
        <div className="menu-icons" onClick={() => setClicked((prev) => !prev)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Button;
