import React from 'react'

const VideoIntro = () => {
    return (
        <div className="relative w-full h-auto">
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-black z-10"></div>

            {/* Video Section */}
            <video
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./video/concert.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-black z-10"></div>
        </div>
    );
}

export default VideoIntro