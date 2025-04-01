import { useState, useEffect } from "react";
import React from "react";

const sections = [
  {
    id: 1,
    text: "Vishal Mishra",
    img: "images-removebg-preview.png",
    des: "Live Concert",
    date: "10th March, 2024",
    location: "Main Ground",
  },
  {
    id: 2,
    text: "Sunidhi Chauhan",
    img: "sunidhi-removebg-preview.png",
    des: "Live Concert",
    date: "12th March, 2024",
    location: "Main Ground",
  },
];

export default function MegaEvents() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/jubin-Nautyail.png')" }}
      ></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Centered Text */}
      <h1
        className="absolute text-white text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center font-bold px-4"
        style={{
          fontFamily: "Rockybilly, sans-serif",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 1.5)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        Jubin Nautiyal
      </h1>

      {/* Top Black Gradient */}
      <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black to-transparent"></div>

      {/* Bottom Black Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}