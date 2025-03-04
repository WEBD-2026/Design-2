import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import eventsData from "../../../data/EventData";
import "./Schedule.css";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("24th December");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventType, setEventType] = useState("Technical");

  return (
    <>
      <Navbar />
      <div className="schedule-container">
        {/* Day Selection */}
        <div className="day-selection">
          {Object.keys(eventsData).map((day) => (
            <button
              key={day}
              onClick={() => {
                setSelectedDay(day);
                setSelectedCategory("");
              }}
              className={selectedDay === day ? "selected-day" : "day-button"}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Event Type Selection */}
        <div className="event-type-selection">
          <button
            onClick={() => setEventType("Technical")}
            className={eventType === "Technical" ? "selected-tech" : "type-button"}
          >
            Technical
          </button>
          <button
            onClick={() => setEventType("Cultural")}
            className={eventType === "Cultural" ? "selected-cultural" : "type-button"}
          >
            Cultural
          </button>
        </div>

        <div className="schedule-content">
          {/* Left Sidebar - Event Categories */}
          <div className="category-sidebar">
            {eventsData[selectedDay] &&
              Object.keys(eventsData[selectedDay][eventType]).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "selected-category" : "category-button"}
                >
                  {category}
                </button>
              ))}
          </div>

          {/* Right Section - Event Details */}
          <div className="event-details">
            {selectedCategory ? (
              <div>
                <h2>
                  {selectedCategory} - {selectedDay} ({eventType})
                </h2>
                <ul>
                  {eventsData[selectedDay][eventType][selectedCategory].map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
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
