import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";
import Navbar from "../components/Navbar/Navbar.js";

const EventDetails = () => {
  const { eventId } = useParams();
  const { events, technical_events } = useContext(Context);
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    if (!events || !technical_events) return;

    // Convert `eventId` to number
    const id = Number(eventId);

    // Search in both cultural and technical events
    const foundEvent =
      events.find((item) => item.id === id) ||
      technical_events.find((item) => item.id === id);

    setEventsData(foundEvent || null);
  }, [eventId, events, technical_events]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-yellow-400">
      <Navbar />
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto py-10 px-4 sm:px-6 mt-16">
        {eventsData ? (
          <div
            className="bg-gray-900 text-yellow-400 p-6 sm:p-8 rounded-xl shadow-2xl border border-yellow-500/50 
            animate-fade-in transition-all duration-500"
          >
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-6 animate-fade-up drop-shadow-lg">
              {eventsData.name}
            </h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
              <span className="bg-yellow-500 text-black px-4 sm:px-5 py-2 text-sm sm:text-lg font-semibold rounded-full shadow-md">
                {eventsData.category}
              </span>
              <span className="bg-gray-800 px-4 sm:px-5 py-2 text-sm sm:text-lg font-semibold rounded-full shadow-md text-yellow-400">
                {eventsData.head}
              </span>
            </div>

            <hr className="my-6 border-yellow-400/60" />

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
              <p className="font-bold flex items-center">
                📅 Date:{" "}
                <span className="ml-2 text-white">{eventsData.date}</span>
              </p>
              <p className="font-bold">📖 Description:</p>
              <p className="text-gray-300">{eventsData.description}</p>
              <p className="font-bold">
                🎟️ Entry:{" "}
                <span className="text-gray-300">{eventsData.entry}</span>
              </p>
              <p className="font-bold">
                🏆 Prize:{" "}
                <span className="text-gray-300">{eventsData.prize}</span>
              </p>

              <p className="font-bold">📜 Rules:</p>
              <p className="text-gray-300 whitespace-pre-line">
                {eventsData.rules}
              </p>
            </div>

            <hr className="my-6 border-yellow-400/60" />

            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg 
                rounded-lg shadow-md hover:shadow-yellow-400/80 transition-all duration-300 transform hover:scale-105 
                animate-pulse"
              >
                Register
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-60">
            <div className="h-10 sm:h-12 w-10 sm:w-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
