import React, { useEffect, useState } from "react";
import Home from "../../pages/Home/Home";
import "./SpinLoader.css";

const SpinLoader = () => {
  const [showImg, setShowImg] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
    }, 5000);
  }, []);
  return (
    <>
      <div className="setloader">
        {showImg ? (
          <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*U2RiSXJx8U9K4thZ.gif" />
        ) : (
          //   <Home />
          <p>H</p>
        )}
      </div>
    </>
  );
};

export default SpinLoader;
