import React from "react";
import "./Footer.css";
import { FaInstagram,FaPhone, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Button = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Section - Branding & Register Button */}
        <div style={{marginBottom: "60px"}}>
          <div className="footer-logo" style={{width: "180px", height:"180px"}}>
            <h1 className="hero1">CELESTRA</h1>
          </div>
         
        </div>

        {/* Right Section - Social Media Buttons */}
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", }}>
          <div className="footer-socials">
            <button className="button">
            <div style={{width: "50px", height:"50px", justifyContent:"center", alignContent:"center"}}><FaInstagram className="social-icon"/></div>
            </button>
            <button className="button">
            <div  style={{width: "50px", height:"50px", justifyContent:"center", alignContent:"center"}}><FaLocationDot className="social-icon"/></div>
            </button>
            <button className="button">
              <div style={{width: "50px", height:"50px", justifyContent:"center", alignContent:"center"}}><FaTwitter className="social-icon"/></div>
            </button>
            <button className="button">
              <div style={{width: "50px", height:"50px", justifyContent:"center", alignContent:"center"}}><FaPhone className="social-icon"/></div>
            </button>
          </div>
          <button className="button" >
            <div style={{padding:"5px", fontSize:"36px", justifyContent:"center", alignContent:"center"}}>
              <span>Register Now!!</span>
            </div>
          </button>
            <iframe
              title="NIT Jalandhar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.194812799187!2d75.53300407607013!3d31.395826654708146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5f8a49cb41%3A0x278cfaf3cf8df4b5!2sDr.%20B.%20R.%20Ambedkar%20National%20Institute%20of%20Technology%2C%20Jalandhar!5e0!3m2!1sen!2sin!4v1707774735653!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
        </div>
        <button className="button">
            <div>
              <span>
              <div>Made with ❤️ by developers of NITJ</div>
              </span>
            </div>
        </button>
      </div>
    </footer>
  );
};

export default Button;
