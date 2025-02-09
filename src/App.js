import React from "react";
import Navbar from "../src/components/Navbar/Navbar.js";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Event from "./pages/Events/Event.jsx";
import SpinLoader from "./components/Loader/SpinLoader.js";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SpinLoader /> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/event"} element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
