import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar/Navbar";
import "./ContactUs.css"
export default function ContactUs() {
  return (
    <>
      <div className="text-yellow-500 flex flex-col gap-16 mt-24 justify-center items-center">
        <Navbar />
        <h1 className="font-bold text-6xl ">Contact Us</h1>
        <div className="flex justify-center items-center bg-black p-6 rounded-xl">
          <img src="mainLogo.png" alt="" className="w-80 h-80" />
          <div className="flex gap-6 text-xl border-l-2 border-yellow-500 pl-16">
            <a
              href="/Developers"
              target="_blank"
              className="flex flex-col gap-2 mt-32 h-fit group hover:animate-bobble"
            >
              <FontAwesomeIcon icon={faPeopleGroup} className="text-6xl" />
              <p>Team Utkansh</p>
            </a>
            <a
              href="https://shorturl.at/hoAjy"
              target="_blank"
              className="flex flex-col gap-2 h-fit group hover:animate-bobble"
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-6xl" />
              <p>Dr. B R Ambedkar NIT, Jalandhar</p>
            </a>
            <a
              href="mailto:xyz@gmail.com"
              target="_blank"
              className="flex flex-col gap-2 mt-32 h-fit group hover:animate-bobble"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-6xl" />
              <p>xyz@gmail.com</p>
            </a>
            <a
              href="tel:7895285866"
              target="_blank"
              className="flex flex-col gap-2 h-fit group hover:animate-bobble"
            >
              <FontAwesomeIcon icon={faPhone} className="text-6xl" />
              <p>+91 7895285866</p>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}
