import React, { useContext, useEffect, useState } from "react";
import "./Event.css";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar";
import { Context } from "../../Context/Context";
import Dropdown from "../../components/dropdown";
import "./button_event.css";
import { Link, Links } from "react-router-dom";

const Event = () => {
  const { search, setSearch, events, technical_events } = useContext(Context);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(events);

  useEffect(() => {
    let updatedEvents = [];

    if (selectedCategory === "technical") {
      updatedEvents = technical_events;
    } else if (selectedCategory === "cultural") {
      updatedEvents = events;
    } else {
      updatedEvents = [...events, ...technical_events]; // Default: Show all events
    }

    if (search) {
      updatedEvents = updatedEvents.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredEvents(updatedEvents.slice(0, 41));
  }, [search, events, technical_events, selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="events">
        <div className="event_top">
          <div className="event_top_top">
            <h1>Welcome to Utkansh</h1>
          </div>
          <div className="event_top_mid">
            <h1>Events</h1>
          </div>
        </div>
        <div className="event_mid">

          <div className="event_mid_top">
            <Dropdown onSelectCategory={setSelectedCategory} />
            <Searchbar onSearchChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="event_mid_mid">
            {filteredEvents.map((item, index) => (
              <div key={index} className="brutalist-card">
                <div className="brutalist-card__header">
                  <img
                    src={require("./background_image/background_event.png")}
                    alt="Event"
                  />
                </div>
                <div className="brutalist-card__actions">
                  <div className="brutalist-card_mess">
                    <a className="brutalist-card__button brutalist-card__button--read">
                      {item.name}
                    </a>
                  </div>
                  <div className="brutalist-card_butt">
                    <button className="btn-class-name">
                      <button>Register</button>
                    </button>
                    <Link to={`/event/${item.id}`}>
                      <button className="btn-class-name">
                        <button>More Info</button>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
