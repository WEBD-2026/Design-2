import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar/Navbar";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div style={{ backgroundImage: "url('/contact-us-back.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <div
          className="text-yellow-500 flex flex-col gap-16 mt-24 justify-center items-center p-10 min-h-screen"
        >

          {/* <h1 className="text-6xl text-black" style={{ fontFamily: "Rockybilly", WebkitTextStroke: "px #ffffff", fontSize: "4vw", margin: "1vw" }}>Contact Us</h1> */}
          <div className="flex md:flex-row flex-col justify-center items-center bg-black p-6 rounded-xl">
            <div className="flex md:flex-row flex-col gap-6 text-center md:border-r-2 md:border-b-0 border-b-2 border-yellow-500 md:pr-16 md:pb-0 pb-16">
              <a
                href="/Developers"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 md:mt-32 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faPeopleGroup} className="text-5xl" />
                <p>Team Utkansh</p>
              </a>
              <a
                href="https://shorturl.at/hoAjy"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faLocationDot} className="text-5xl" />
                <p>Dr. B R Ambedkar NIT, Jalandhar</p>
              </a>
              <a
                href="mailto:xyz@gmail.com"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 md:mt-32 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
                <p>xyz@gmail.com</p>
              </a>
              <a
                href="tel:7895285866"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faPhone} className="text-5xl" />
                <p>+91 7895285866</p>
              </a>
            </div>
            <img src="mainLogo.png" alt="" className="w-80 h-80" />
          </div>
        </div>
      </div>
    </>
  );
}
