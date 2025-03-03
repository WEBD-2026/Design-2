import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import eventsData from "../../../data/EventData"; // Import event data
import "./Schedule.css";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("24th December");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventType, setEventType] = useState("Technical"); // Default to Technical

  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {/* Day Selection */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            backgroundColor: "black",
          }}
        >
          {Object.keys(eventsData).map((day) => (
            <button
              key={day}
              onClick={() => {
                setSelectedDay(day);
                setSelectedCategory("");
              }}
              style={{
                padding: "10px",
                backgroundColor: selectedDay === day ? "yellow" : "white",
                border: "1px solid black",
                cursor: "pointer",
                color: "black",
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Slicer Buttons for Technical & Cultural */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setEventType("Technical")}
            style={{
              padding: "10px",
              backgroundColor:
                eventType === "Technical" ? "lightblue" : "white",
              border: "2px solid blue",
              cursor: "pointer",
              color: "black",
            }}
          >
            Technical
          </button>
          <button
            onClick={() => setEventType("Cultural")}
            style={{
              padding: "10px",
              backgroundColor:
                eventType === "Cultural" ? "lightcoral" : "white",
              border: "2px solid red",
              cursor: "pointer",
              color: "black",
            }}
          >
            Cultural
          </button>
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          {/* Left Sidebar - Event Categories */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              padding: "10px",
              backgroundColor: "black",
            }}
          >
            {eventsData[selectedDay] &&
              Object.keys(eventsData[selectedDay][eventType]).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      backgroundColor:
                        selectedCategory === category ? "pink" : "white",
                      border: "2px solid magenta",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    {category}
                  </button>
                )
              )}
          </div>

          {/* Right Section - Event Details */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
            }}
          >
            {selectedCategory ? (
              <div>
                <h2>
                  {selectedCategory} - {selectedDay} ({eventType})
                </h2>
                <ul>
                  {eventsData[selectedDay][eventType][selectedCategory].map(
                    (event, index) => (
                      <li key={index}>{event}</li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <h2>Select an event category to see details</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
