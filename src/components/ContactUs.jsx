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
      <div className="container-contact" style={{ backgroundImage: "url('/aboutus-back.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
        <div
          className="text-yellow-500 flex flex-col gap-16 mt-24 justify-center items-center p-10 min-h-screen"
        >
          <div className="flex md:flex-row flex-col justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
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
                href="https://maps.app.goo.gl/ethKcFEhLFqBfcD78"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faLocationDot} className="text-5xl" />
                <p>Dr. B R Ambedkar NIT, Jalandhar</p>
              </a>
              <a
                href="mailto:nitj.utk.accounts@nitj.ac.in"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 md:mt-32 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
                <p>nitj.utk.accounts@nitj.ac.in</p>
              </a>
              <a
                href="tel:7895285866"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 h-fit group hover:animate-bobble"
              >
                <FontAwesomeIcon icon={faPhone} className="text-5xl" />
                <p>+91 7508619568</p>
                <p>+91 8809190913</p>
              </a>
            </div>
            <a href="/" target="_blank">
              <img src="mainLogo.png" alt="" className="w-80 h-80" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
