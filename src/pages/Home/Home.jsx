import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Hero from "../../components/Hero.js";
import SpinLoader from "../../components/Loader/SpinLoader.js";
import Gallery from "../../components/ArcadeGallery.jsx";

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
          <Hero />
          {/* <Gallery /> */}
        </>
      ) : (
        <SpinLoader />
      )}
    </div>
  );
};

export default Home;
