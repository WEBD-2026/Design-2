import React from "react";
import "./VideoIntro.css"; // Import CSS for styling

const VideoBackground = () => {
  return (
    <div className="video-container">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black via-transparent to-transparent"></div>
      <video autoPlay muted loop inline className="background-video"
      >
        <source src="https://res.cloudinary.com/diiyq5fwx/video/upload/v1742741330/concert_naxqpy.mp4" type="video/mp4" />


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
