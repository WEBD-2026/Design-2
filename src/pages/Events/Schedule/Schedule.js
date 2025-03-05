import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import eventsData from "../../../data/EventData.js";
import "./Schedule.css";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("10th April");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventType, setEventType] = useState("Technical");

  const handleEventTypeChange = (type) => {
    setEventType(type);
    setSelectedCategory(""); // Reset category when switching event type
  };

  return (
    <>
      <Navbar />


      <div className="schedule-container md:mt-0 mt-16 sm:h-lvh h-full overflow-scroll ">
        <div className="event_top_mid_schdeule">
          <h1>Schedule</h1>
        </div>
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
            onClick={() => handleEventTypeChange("Technical")}
            className={
              eventType === "Technical" ? "selected-tech" : "type-button"
            }
          >
            Technical
          </button>
          <button
            onClick={() => handleEventTypeChange("Cultural")}
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
            {eventsData[selectedDay] && eventsData[selectedDay][eventType] ? (
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
              )
            ) : (
              <p className="no-data">
                No events available for {eventType} on {selectedDay}
              </p>
            )}
          </div>

          {/* Right Section - Event Details */}
          <div className="p-5 pb-3 pt-10 w-full h-full sm:bg-white rounded-tl-2xl">
            <div className="event-details">
              {selectedCategory &&
                eventsData[selectedDay]?.[eventType]?.[selectedCategory] ? (
                <div>
                  <h2>
                    {selectedCategory} - {selectedDay} ({eventType})
                  </h2>
                  <ul>
                    {eventsData[selectedDay][eventType][selectedCategory].map(
                      (event, index) => (
                        <li key={index} className="event-item">
                          <strong>{event.name}</strong> <br />
                          Time: {event.Time} <br />
                          Venue: {event.venue}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ) : (
                <h2 className="no-selection">
                  Select an event category to see details
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;