import React from 'react';
import Navbar from "../../components/Navbar/Navbar.js";
import "./merct.css";

const Merch = () => {
  return (
    <div className="w-screen min-h-screen pt-24 bg-left-bottom bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Navbar />
      <div className="flex flex-col items-center px-2">
        <div className='merch-head'>
          <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center"
            style={{ fontFamily: "Rockybilly", WebkitTextStroke: "1px #ffffff", fontSize: "4vw", marginTop: "5vw" }}>
            Merchandise
          </h1>
          <a href="https://forms.gle/vU1mspH4nRW2pU5h6" className="button-merch">
            Buy Now
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        {/* ✅ Fix: Add a flex container to align cards side by side */}
        <div className="card-container">
          {/* T-Shirt 1 */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="3.png" alt="T-shirt front" className='mercht' />
              </div>
              <div className="card-back">
                <img src="4.png" alt="T-shirt back" className='mercht' />
              </div>
            </div>
          </div>
          {/* T-Shirt 2 */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="6.png" alt="T-shirt front" className='mercht' />
              </div>
              <div className="card-back">
                <img src="5.png" alt="T-shirt back" className='mercht' />
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>
  );
}

export default Merch;
