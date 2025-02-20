import React from 'react';

const aboutUs = () => {
    return (
        <div className="containerAbout w-full h-screen relative overflow-hidden" style={{ backgroundColor: "black" }}>
            <div className="overlay absolute top-0 left-0 w-full h-full inset-10" style={{ backdropFilter: "blur(2px)", background: "#0000007f" }}></div>
            <div className="w-full h-full relative">
                <div className="absolute bottom-0 left-40 h-5/6">
                </div>
            </div>

        </div>
    );
}

export default aboutUs;