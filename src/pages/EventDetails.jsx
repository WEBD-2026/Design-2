import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";

const EventDetails = () => {
  const { eventId } = useParams();
  const { events, technical_events } = useContext(Context);
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    if (!events || events.length === 0) return; // Ensure events exist

    const foundEvent = events.find((item) => item.id === Number(eventId));
    if (foundEvent) {
      setEventsData(foundEvent);
    } else {
      console.log("No matching event found");
    }
  }, [eventId, events]);

  return (
    <div>
      {eventsData ? (
        <div>
          <h1>{eventsData.name}</h1>
          <h3>{eventsData.description}</h3>
          <p>{eventsData.prize}</p>
          <p>{eventsData.Date}</p>
          <p>{eventsData.entry}</p>
          <p>{eventsData.rules}</p>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default EventDetails;
