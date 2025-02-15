import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import Hero from "../../components/Hero.js";
import SpinLoader from "../../components/Loader/SpinLoader.js";
// import Gallery from "../../components/ArcadeGallery.jsx";
import MegaEvents from "../../components/MegaEvents.jsx";
import VideoIntro from "../../components/VideoIntro/VideoIntro.jsx";

import Sponsers from "../../components/Sponsers.jsx";

import "./Home.css";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  let height = window.innerHeight;
  console.log(height);
  return (
    <div>
      {loading !== true ? (
        <>
          <Navbar />
          <Hero />
          <div>
            <VideoIntro />
            <MegaEvents />
          </div>
          <Sponsers/>
          <Footer />
        </>
      ) : (
        <SpinLoader />
      )}
    </div>
  );
};

export default Home;
