import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import Hero from "../../components/Hero.js";
import SpinLoader from "../../components/Loader/SpinLoader.js";
// import Gallery from "../../components/ArcadeGallery.jsx";
import MegaEvents from "../../components/MegaEvents.jsx";
import VideoIntro from "../../components/VideoIntro/VideoIntro.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  let height = window.innerHeight
  console.log(height)
  return (
    <div>
      {loading !== true ? (
        <>
          <Navbar />
          <div>
            <Hero />
          </div>
          <div>
            <VideoIntro />
          </div>
          <div >
            <MegaEvents />
          </div>
          <Footer />
        </>
      ) : (
        <SpinLoader />
      )}
    </div>
  );
};

export default Home;
