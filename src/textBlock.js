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
            <h1 id="textblock-title">UTKANSH-25</h1>
            <span id="textblock-subtitle">Techno Cultural Fest of NITJ</span>
            <br />
            <br />
          </div>
          <p id="textblock-content">
            Utkansh is where culture and technology unite at NIT Jalandhar. Experience electrifying performances, innovative hackathons, and thrilling competitions. From fashion parades to drone shows, every moment is a celebration of creativity and technology. Join us for a festival where brilliance knows no boundaries.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBlock;
