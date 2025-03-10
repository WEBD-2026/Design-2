import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="containerAbout w-full h-screen relative overflow-hidden">
      <div
        className="bgAbout w-full h-full absolute top-0"
        style={{
          background: "url('/FINAL MARKETING BROUCHUER.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="overlay absolute top-0 left-0 w-full h-full inset-10"
        style={{
          backdropFilter: "blur(2px)",
          background:
            "linear-gradient(8deg, black 10%, rgba(36, 30, 0, 0.203) 100%)",
        }}
      >
        <h1 className="mt-5 text-white z-10 md:text-8xl sm:text-6xl text-4xl font-semibold py-4 w-full text-center">
          Announcing Soon...
        </h1>
      </div>
      <div className="w-full h-full relative flex justify-center items-center">
        <div className="absolute bottom-0 left-40 h-5/6">
          {/* <motion.img
            key={sections[activeIndex].img}
            src={sections[activeIndex].img}
            alt="About Us"
            className="h-full object-cover shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          /> */}

          {/* <p className="mt-5 text-white z-10 text-6xl font-semibold py-4 w-full text-center ">Announcing Soon...</p> */}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-1/6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)",
        }}
      ></div>
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
