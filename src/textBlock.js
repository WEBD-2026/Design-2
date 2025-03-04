import "./App.css";
import "./textblock.css";
function TextBlock() {
  return (
    <div id="textblock">
      <div id="textblock-container">
        <div id="head-container">
          <img src="mainLogo.png" id="logo" />
        </div>
        <div className="text">
          <div id="title-container">
            <h1 id="textblock-title">UTKANSH 25</h1>
            <span id="textblock-subtitle">From Circuits To Symphonies</span>
            <br />
            <br />
          </div>
          <p id="textblock-content" class="text-justify">
            Utkansh-25 at NIT Jalandhar blends culture and technology in perfect harmony. Experience electrifying performances like Panache, Megasonic, BDM Night, and Star Night, alongside innovative events like Hackathons, RC Racing, NIT-yaan, Startup Mela, and Avishkar Exhibitions. Enjoy ISRO sessions, E-Gaming, and more, culminating in a breathtaking Drone Show. This is Utkansh-where brilliance knows no boundaries, and the future takes center stage. Join us for an unforgettable celebration of talent, innovation, and creativity that promises to inspire and entertain.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBlock;
