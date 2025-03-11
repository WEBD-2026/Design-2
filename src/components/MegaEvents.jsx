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
    <div className="containerAbout w-full h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="bgAbout w-full h-full absolute top-0 bottom-0"
        style={{
          background: "url('/jubin-Nautyail.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Top Black Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-1/6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)",
        }}
      ></div>

      {/* Centered Star of the Night Text */}
      <h1
        className="absolute text-white sm:text-5xl md:text-7xl lg:text-8xl text-center "
        style={{
          fontFamily: "Rockybilly",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        }}
      >
        Jubin Nautiyal
      </h1>

      {/* Bottom Black Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/6"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
        }}
      ></div>
    </div>
  );
}
