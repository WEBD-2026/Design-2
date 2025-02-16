import React from "react";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Event from "./pages/Events/Event.jsx";
import Accommodation from "./pages/Accomodation/accomodation.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import Footer from "./components/Footer/Footer.js"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/event"} element={<Event />} />
      <Route path={"/Accomodation"} element={<Accommodation />} />
      <Route path={"/schedule"} element={<Schedule />} />
      <Route path={"/Footer"} element={<Footer />} />
    </Routes>
  );
}

export default App;
