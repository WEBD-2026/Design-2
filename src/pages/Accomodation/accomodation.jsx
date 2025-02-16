import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import "../Events/Event.css";
import "../Events/button_event.css";

const sections = [
  { pack: "One Day Pack", cost: "₹300" },
  { pack: "Two Day Pack", cost: "₹500" },
  { pack: "Three Day Pack", cost: "₹700" },
  { pack: "Three Day Pack", cost: "₹700" },
];
function Accomodation() {
  return (
    <div
      className="w-full h-full pt-24"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Accomodation_background.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-white text-8xl" style={{ fontFamily: "Salsa", WebkitTextStroke: "0px #ffffff", fontSize: "10vw", margin: "0" }}>Accommodation</h1>
        <div className="w-full h-full p-16 flex gap-10">
          {sections.map((details) => (
            <div className="brutalist-card mx-auto" key={details.pack}>
              <div className="brutalist-card__actions">
                <div className="brutalist-card_mess flex flex-col gap-5 text-black">
                  <p className="text-4xl">
                    {details.pack}
                  </p>
                  <hr />
                  <p className="text-4xl">
                    {details.cost}
                    <span className="text-sm">/Person</span>
                  </p>
                  <p className="text-2xl">
                    Combined Rooms
                  </p>
                </div>

                <div className="brutalist-card_butt">
                  <button className="btn-class-name mx-auto">
                    <button>Book Now</button>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accomodation;
