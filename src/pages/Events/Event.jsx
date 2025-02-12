import React, { useContext, useEffect } from "react";
import "./Event.css";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar";
import { Context } from "../../Context/Context";
import Dropdown from "../../components/dropdown";
import "./button_event.css";
import styled from "styled-components";

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
  const handleSearchChange = (event) => {
    setSearch(event.target.value); // Update search state on input change
  };
  useEffect(() => {
    applyFilter();
  }, [search, containers]);
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
            <div className="button-wrapper">
              <button className="button_event">
                <p className="button__text">
                  <span style={{ "--index": 0 }}>R</span>
                  <span style={{ "--index": 1 }}>E</span>
                  <span style={{ "--index": 2 }}>G</span>
                  <span style={{ "--index": 3 }}>I</span>
                  <span style={{ "--index": 4 }}>S</span>
                  <span style={{ "--index": 5 }}>T</span>
                  <span style={{ "--index": 6 }}>E</span>
                  <span style={{ "--index": 7 }}>R</span>
                  <span style={{ "--index": 8 }}>A</span>
                  <span style={{ "--index": 9 }}>T</span>
                  <span style={{ "--index": 10 }}>I</span>
                  <span style={{ "--index": 11 }}>O</span>
                  <span style={{ "--index": 12 }}>N</span>
                  <span style={{ "--index": 13 }}> </span>
                  <span style={{ "--index": 14 }}>O</span>
                  <span style={{ "--index": 15 }}>P</span>
                  <span style={{ "--index": 16 }}>E</span>
                  <span style={{ "--index": 17 }}>N</span>
                </p>
                <div className="button__circle">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon"
                    width={14}
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon button__icon--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="event_mid">
          <div className="event_mid_top">
            <Dropdown />
            <Searchbar onSearchChange={handleSearchChange} />
          </div>
          <div className="event_mid_mid">
            {/* {filteredContainers.map((item, index) => (
              <div key={index} className="container">
                {item}
              </div>
            ))} */}
            {filteredContainers.map((item, index) => (
              <div className="brutalist-card">
                <div className="brutalist-card__header">
                  {/* <div className="brutalist-card__icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  </div>
                  <div className="brutalist-card__alert">Warning</div> */}
                  <img src="logo192.png" alt="" />
                </div>
                {/* <div className="brutalist-card__message">{item}</div> */}
                <div className="brutalist-card__actions">
                  {/* <a
                    className="brutalist-card__button brutalist-card__button--mark"
                    href="#"
                  >
                    Mark as Read
                  </a> */}
                  <div className="brutalist-card_mess">
                    <a className="brutalist-card__button brutalist-card__button--read">
                      {item}
                    </a>
                  </div>
                  <div className="brutalist-card_butt">
                    <button className="btn-class-name ">
                      <span className="back" />
                      <span className="front">Register</span>{" "}
                    </button>
                    <button className="btn-class-name">
                      <span className="back" />
                      <span className="front">More Info</span>
                    </button>
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
