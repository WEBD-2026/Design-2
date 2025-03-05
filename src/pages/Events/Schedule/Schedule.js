import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import eventsData from "../../../data/EventData";
import "./Schedule.css";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("10th April");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventType, setEventType] = useState("Technical");

  return (
    <>
      <Navbar />
      <div className="schedule-container md:mt-0 mt-16 sm:h-lvh h-full overflow-scroll ">
        {/* Day Selection */}
        <div className="day-selection sm:overflow-hidden overflow-scroll mt-10">
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
            className={
              eventType === "Technical" ? "selected-tech" : "type-button"
            }
          >
            Technical
          </button>
          <button
            onClick={() => setEventType("Cultural")}
            className={
              eventType === "Cultural" ? "selected-cultural" : "type-button"
            }
          >
            Cultural
          </button>
        </div>

        <div className="schedule-content flex sm:flex-row flex-col sm:overflow-hidden overflow-scroll h-full">
          {/* Left Sidebar - Event Categories */}
          <div className="category-sidebar w-full sm:w-1/5 overflow-scroll flex sm:flex-col flex-row gap-5 sm:gap-1">
            {eventsData[selectedDay] &&
              Object.keys(eventsData[selectedDay][eventType]).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "selected-category"
                        : "category-button"
                    }
                  >
                    {category}
                  </button>
                )
              )}
          </div>

          {/* Right Section - Event Details */}
          <div className="p-5 pb-3 pt-10 w-full h-full sm:bg-white rounded-tl-2xl">
            <div className="event-details">
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
      </div>
    </>
  );
};

export default Schedule;
