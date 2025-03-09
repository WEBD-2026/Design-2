import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import eventsData from "../../../data/EventData.js";
import "./Schedule.css";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("10th April");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventType, setEventType] = useState("Technical");
  const [events, setEvents] = useState(false);

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

        {/* Toggle Button for Small Screens */}
        <div className="sm:hidden flex justify-center mt-4">
          <button onClick={() => setEvents(!events)} className="toggle-events-button bg-black p-3 rounded-xl ">
            {events ? "Hide Events" : "Show Events"}
          </button>
        </div>

        {events && (
          <div className="absolute top-32 left-4 bg-[#0a0808b3] w-11/12 h-1/2 flex flex-col p-10 z-50 rounded-xl shadow-lg backdrop-blur-xl">
            <button onClick={() => setEvents(false)} className="close-button self-end p-2">✖</button>
            <div className="category-sidebar w-full overflow-scroll flex flex-col gap-5">
              {eventsData[selectedDay] && eventsData[selectedDay][eventType] ? (
                Object.keys(eventsData[selectedDay][eventType]).map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setEvents(false);
                      }}
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
          </div>
        )}

        <div className="schedule-content flex sm:flex-row flex-col sm:overflow-hidden overflow-scroll h-full">
          {/* Left Sidebar - Event Categories */}
          {(window.innerWidth >= 640) && (
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
          )}

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
                          <strong>{event.name} : </strong>
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
