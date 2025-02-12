import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import React from 'react';



const sections = [
  { id: 1, text: "Vishal Mishra", img: "images-removebg-preview.png", des:"Live Concert", date:"10th March, 2024", location:"Main Ground"},
  { id: 2, text: "Sunidhi Chauhan", img: "sunidhi-removebg-preview.png", des:"Live Concert", date:"12th March, 2024", location:"Main Ground"},
];

export default function MegaEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const scrollThreshold = 20;
  const lastScrollTime = useRef(0);
  const scrollCooldown = 300;

  const [isSwapped, setIsSwapped] = useState(false);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const currentTime = new Date().getTime();

  //     if (currentTime - lastScrollTime.current < scrollCooldown) {
  //       return;
  //     }

  //     if (event.deltaY > scrollThreshold && activeIndex < sections.length - 1) {
  //       setActiveIndex((prev) => prev + 1);
  //       setIsSwapped(!isSwapped);
  //       lastScrollTime.current = currentTime;
  //     } else if (event.deltaY < -scrollThreshold && activeIndex > 0) {
  //       setActiveIndex((prev) => prev - 1);
  //       setIsSwapped(!isSwapped);
  //       lastScrollTime.current = currentTime;
  //     }
  //   };

  //   window.addEventListener("wheel", handleScroll);
  //   return () => window.removeEventListener("wheel", handleScroll);
  // }, [activeIndex]);

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
        background:"url('/crowd.jpg')",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}>
      </div>
      <div className="overlay absolute top-0 left-0 w-full h-full inset-10" style={{backdropFilter:"blur(2px)", background:"#0000007f"}}></div>
      <div className="w-full h-full relative">
        <div className="absolute bottom-0 left-40 h-5/6">
        <motion.img
          key={sections[activeIndex].img}
          src={sections[activeIndex].img}
          alt="About Us"
          className="h-full object-cover shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 1 }}
        />
        </div>
        <div className="content w-full h-screen flex items-center justify-center absolute -right-60 top-40">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`text absolute top-0 w-fit h-fit p-16 rounded-lg shadow-md text-center transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100 z-10 " : "opacity-0 z-0"
            } rounded-xl`}
            style={{background:"#e0c2ff33", boxShadow:"inset 0px 0px 10px white"}}
          >
            
            <h2 className="text-5xl font-semibold text-white" style={{fontFamily: "Style Script"}}>{section.text}</h2>
            <p className="text-4xl text-purple-200 mt-5 font-semibold" style={{fontFamily: "Style Script"}}>{section.des}</p>
            <p className="text-4xl text-purple-200 mt-5 font-semibold" style={{fontFamily: "Style Script"}}>{section.date}</p>
            <p className="text-4xl text-purple-200 mt-5 font-semibold" style={{fontFamily: "Style Script"}}>{section.location}</p>
          </motion.div>
        ))}
      </div>
      </div> 
      
    </div>
  );
}


     

      

