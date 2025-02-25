import React from "react";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Event from "./pages/Events/Event.jsx";
import Accommodation from "./pages/Accomodation/accomodation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Developers from "./pages/Developers/Developers.jsx"
import Schedule from "./pages/Events/Schedule/Schedule.jsx";
import ContactUs from "./components/ContactUs.jsx";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/event"} element={<Event />} />
      <Route path={"/event/:eventId"} element={<EventDetails />} />
      <Route path={"/Accomodation"} element={<Accommodation />} />
      <Route path={"/Schedule"} element={<Schedule />} />
      <Route path={"/Footer"} element={<Footer />} />
      <Route path={"/ContactUs"} element={<ContactUs />} />
      <Route path={"/Developers"} element={<Developers />} />
    </Routes>
  );
}

export default App;
