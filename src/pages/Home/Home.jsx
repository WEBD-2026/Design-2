import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero.js";
import SpinLoader from "../../components/Loader/SpinLoader.js";
import MegaEvents from "../../components/MegaEvents.jsx";
import VideoIntro from "../../components/VideoIntro/VideoIntro.jsx";
import Sponsers from "../../components/Sponsers.jsx";

import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); 
  const [opacity, setOpacity] = useState(false)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      const scrollingDown = scrollY > lastScrollY;
      const scrollingUp = scrollY < lastScrollY;

      if (scrollingDown && scrollY > 5 && !hasScrolled) {
        window.scrollTo({ top: screenHeight+5, behavior: "smooth" });
        setOpacity(true)
        setHasScrolled(true);
      }

      if (scrollingUp && scrollY < screenHeight - 5 && hasScrolled) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOpacity(false)
        setHasScrolled(false);
      }

      setLastScrollY(scrollY); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled, lastScrollY]);

  return (
    <div>
      {!loading ? (
        <>
          <Navbar />
          <div className="sticky top-0">
            <Hero />
          </div>

          <div className={`${opacity ? "opacity-100":"opacity-0"} transition-all duration-1000`}>
            <VideoIntro />
            <MegaEvents />
            <Sponsers />
            <Footer />
          </div>
        </>
      ) : (
        <SpinLoader />
      )}
    </div>
  );
};

export default Home;
