import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import "../Events/Event.css";
import "../Events/button_event.css";

const sections = [
  { pack: "One Day Pack", cost: "₹300" },
  { pack: "Two Day Pack", cost: "₹500" },
  { pack: "Three Day Pack", cost: "₹700" },
];
function Accomodation() {
  return (
    <div
      className="w-full h-full pt-24"
      style={{
        background: "url('Accomodation_background.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-white text-8xl">Accomodation</h1>
        <div className="w-full h-full p-16 flex gap-10">
          {sections.map((details) => (
            <div className="brutalist-card mx-auto">
              <div className="brutalist-card__header">
                <img
                  src={require("../Events/background_image/background_event.png")}
                  alt="Event"
                />
              </div>

              <div className="brutalist-card__actions">
                <div className="brutalist-card_mess">
                  <p className="brutalist-card__button brutalist-card__button--read">
                    {details.pack}
                  </p>
                  <p className="brutalist-card__button brutalist-card__button--read">
                    {details.cost}
                    <span>/Person</span>
                  </p>
                  <p className="brutalist-card__button brutalist-card__button--read">
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
