import React, { useContext, useEffect } from "react";
import "./Event.css";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar";
import { Context } from "../../Context/Context";

const Event = () => {
  const { search, setSearch } = useContext(Context);
  const [containers, setContainers] = React.useState([
    "ABC",
    "ABD",
    "ABE",
    "ABF",
    "ABG",
    "ABH",
    "ABI",
  ]);
  const [filteredContainers, setFilteredContainers] =
    React.useState(containers);
  const applyFilter = () => {
    let productsCopy = [];
    if (search) {
      setFilteredContainers(
        containers.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredContainers(containers);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="events">
        <div className="event_top">
          <div className="event_top_top">
            <h1>Welcome to Clystra</h1>
          </div>
          <div className="event_top_mid">
            <h1>Events</h1>
          </div>
          <div className="event_top_bot">
            <button>Register Now</button>
          </div>
        </div>
        <div className="event_mid">
          <div className="event_mid_top">
            <h1>All Events</h1>
            <Searchbar />
          </div>
          <div className="event_mid_mid">
            {filteredContainers.map((item, index) => (
              <div key={index} className="container">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
