import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import eventsData from "../../../data/EventData"; // Importing event data

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("24th December");
  const [selectedCategory, setSelectedCategory] = useState("");

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
        {/* Top Navigation for Days */}
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
              }}
            >
              {day}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          {/* Left Column for Event Categories */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              padding: "10px",
              backgroundColor: "black",
            }}
          >
            {Object.keys(eventsData[selectedDay]).map((category) => (
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
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Section for Displaying Events in Selected Category */}
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
                  {selectedCategory} - {selectedDay}
                </h2>
                <ul>
                  {eventsData[selectedDay][selectedCategory].map(
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
