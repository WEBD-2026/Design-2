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
            <div className="styled-wrapper">
              <button className="merch-button">
                <p className="merch-button__text">
                  <span style={{ '--index': 0 }}>B</span>
                  <span style={{ '--index': 1 }}>U</span>
                  <span style={{ '--index': 2 }}>Y</span>
                  <span style={{ '--index': 3 }}> </span>
                  <span style={{ '--index': 4 }}>N</span>
                  <span style={{ '--index': 5 }}>O</span>
                  <span style={{ '--index': 6 }}>W</span>
                  <span style={{ '--index': 7 }}> </span>
                </p>
                <div className="merch-button__circle">
                  <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="merch-button__icon" width={14}>
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width={14} xmlns="http://www.w3.org/2000/svg" className="merch-button__icon merch-button__icon--copy">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
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
