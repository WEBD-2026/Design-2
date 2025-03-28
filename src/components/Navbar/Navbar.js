import React, { useState } from "react";
import styled from "styled-components";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/mainLogo.png";
import { useEffect } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="navbar">
        {/* <Link to={"/"}>
          <div className="Logo_navbar123">
            <img src={require("./LOGO BGFREE.svg").default} alt="Logo" />
          </div>
        </Link> */}
        <Link to={"/"}>
          <button className="button">
            <div>
              <span>HOME</span>
            </div>
          </button>
        </Link>


        <Link to={"/event"}>
          <button className="button">
            <div>
              <span>EVENT</span>
            </div>
          </button>
        </Link>
        <Link to={"/Accomodation"}>
          <button className="button">
            <div>
              <span>ACCOMMODATION</span>
            </div>
          </button>
        </Link>

        <Link to={"/schedule"}>
          <button className="button">
            <div>
              <span>SCHEDULE</span>
            </div>
          </button>
        </Link>

        <Link to={"/ContactUs"}>
          <button className="button">
            <div>
              <span>CONTACT </span>
            </div>
          </button>
        </Link>
        <Link to={"/Merch"}>
          <button className="button">
            <div>
              <span>MERCH </span>
            </div>
          </button>
        </Link>
        {/* <Link to = {"/Developers"}>
        { <button className="button">
          <div>
            <span>TEAMS</span>
          </div>
        </button> }
        </Link> */}
      </div>
      <div className="navbar_item">
        <div className="logo">
          <img src={image1} />
        </div>
        <div>
          <ul id="navbar_id" className={clicked ? "active" : ""}>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/event"}>
              <li>Event</li>
            </Link>
            <Link to={"/Accomodation"}>
              <li>Accomodation</li>
            </Link>
            <Link to={"/schedule"}>
              <li>Schedule</li>
            </Link>
            <Link to={"/ContactUs"}>
              <li>Contact</li>
            </Link>
            {/* <li>Contact</li> */}
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
// Add functionality to hide navbar on scroll up and show on scroll down

// const Button = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible, handleScroll]);

//   return (
//     <div className={`navbar ${visible ? "visible" : "hidden"}`}>
//       <Link to={"/"}>
//         <button className="button">
//           <div>
//             <span>HOME</span>
//           </div>
//         </button>
//       </Link>

//       <Link to={"/event"}>
//         <button className="button">
//           <div>
//             <span>EVENT</span>
//           </div>
//         </button>
//       </Link>
//       <Link to={"/Accomodation"}>
//         <button className="button">
//           <div>
//             <span>ACCOMODATION</span>
//           </div>
//         </button>
//       </Link>

//       <Link to={"/schedule"}>
//         <button className="button">
//           <div>
//             <span>SCHEDULE</span>
//           </div>
//         </button>
//       </Link>

//       <button className="button">
//         <div>
//           <span>CONTACT </span>
//         </div>
//       </button>
//       <button className="button">
//         <div>
//           <span>REGISTER</span>
//         </div>
//       </button>
//     </div>
//   );
// };

export default Navbar;
