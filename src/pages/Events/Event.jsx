import React, { useContext, useEffect, useState } from "react";
import "./Event.css";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar";
import { Context } from "../../Context/Context";
import Dropdown from "../../components/dropdown";
import "./button_event.css";
import { Link, Links } from "react-router-dom";
import Marquee from "react-fast-marquee";



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

    setFilteredEvents(updatedEvents.slice(0, 70));
  }, [search, events, technical_events, selectedCategory]);


  return (
    <>
      <Navbar />
      <div className="events">
        <div className="event_top">

          <div className="event_top_mid">
            <h1>Events</h1>
          </div>
          <div className="event_top_top">
            <Marquee
              speed={80}
              pauseOnHover={true}
              className="bg-black-200 w-70% overflow-hidden pt-3 bg-black-900 backdrop-blur-lg rounded-lg shadow-lg"
            >
              <div className="flex gap-10 py-2 t-2xl ">
                <h1>Registration will be starting soon </h1>

              </div>
            </Marquee>
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
                    src={item.image}
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
