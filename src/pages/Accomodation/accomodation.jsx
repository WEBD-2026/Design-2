import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import './accomodation.css';
import Footer from "../../components/Footer/Footer.jsx";
import "../Events/Event.css";
import "../Events/button_event.css";

const sections = [
  { pack: "Two Day", type: "Meal Included", cost: "₹1499" },
  { pack: "Four Day", type: "Meal Excluded", cost: "₹1399" },
  { pack: "Four Day", type: "Meal Included", cost: "₹1999" }
];

function Accomodation() {
  return (
    <div
      className="w-screen min-h-screen pt-24 bg-cover bg-no-repeat "
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Accomodation_background.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center px-4">
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center"
          style={{ fontFamily: "Rockybilly", WebkitTextStroke: "`px #ffffff", fontSize: "5vw", margin: "5vw" }}>
          Accommodation
        </h1>

        {/* Responsive Cards */}
        <div className="w-full h-full p-6 flex flex-wrap justify-center gap-3 content-center">
          {sections.map((details) => (
            <div className="brutalist-card mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-lg" key={details.pack}>
              <div className="brutalist-card__actions">
                <div className="brutalist-card_mess flex flex-col gap-3 text-black">
                  <p className="text-8xl md:text-6xl font-bold ">{details.pack}</p>
                  <hr />
                  <p className="text-xl md:text-2xl text-red-900 font-semibold">
                    {details.type}
                  </p>
                  <p className="text-xl md:text-2xl">
                    {details.cost}
                    <span className="text-sm"> /Person</span>
                  </p>
                  <p className="text-lg md:text-sm"> Non-participating participants will not be eligible for accommodation.

                  </p>
                </div>

                <div className="brutalist-card_butt">
                  <a href="https://forms.gle/9UpxxBcGGyHgeAAb6">
                  <button className="btn-class-name mx-auto">
                    Book Now
                  </button>
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Accomodation;
