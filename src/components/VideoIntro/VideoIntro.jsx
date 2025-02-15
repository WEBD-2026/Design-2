import React from "react";
import "./VideoIntro.css"; // Import CSS for styling
// import video from "../../../public/concert.mp4";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/concert.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="content">
        <h1>Welcome to My Website</h1>
        <p>Your awesome content goes here!</p>
      </div> */}
    </div>
  );
};

export default VideoBackground;
