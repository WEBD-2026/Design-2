import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import Hero from "../../components/Hero.js";
import SpinLoader from "../../components/Loader/SpinLoader.js";
import Gallery from "../../components/ArcadeGallery.jsx";
import MegaEvents from "../../components/MegaEvents.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading !== true ? (
        <>
          <Navbar />
          <Hero/>
          
          <MegaEvents/>
          {/* <Gallery /> */}

          <Gallery />
          <Footer />
        </>
      ) : (
        <SpinLoader />
      )}
    </div>
  );
};

export default Home;
