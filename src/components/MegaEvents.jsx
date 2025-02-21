import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import React from 'react';



const sections = [
  { id: 1, text: "Vishal Mishra", img: "images-removebg-preview.png", des: "Live Concert", date: "10th March, 2024", location: "Main Ground" },
  { id: 2, text: "Sunidhi Chauhan", img: "sunidhi-removebg-preview.png", des: "Live Concert", date: "12th March, 2024", location: "Main Ground" },
];

export default function MegaEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const scrollThreshold = 20;
  const lastScrollTime = useRef(0);
  const scrollCooldown = 300;

  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
      setIsSwapped((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containerAbout w-full h-screen relative overflow-hidden">
      <div className="bgAbout w-full h-full absolute top-0" style={{
        background: "url('/crowd.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      </div>
      <div className="overlay absolute top-0 left-0 w-full h-full inset-10" style={{ backdropFilter: "blur(2px)", background:  "linear-gradient(8deg,  rgba(20,20,4,1) 0%,rgba(36, 30, 0, 0.203) 100%)"}}></div>
      <div className="w-full h-full relative">
        <div className="absolute bottom-0 left-40 h-5/6">
          <motion.img
            key={sections[activeIndex].img}
            src={sections[activeIndex].img}
            alt="About Us"
            className="h-full object-cover shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    
    </div>
  );
}






