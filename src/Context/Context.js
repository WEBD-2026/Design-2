import { createContext, useState } from "react";
import {technical_events } from "../assets/Web-D/Technical_Events";
import {events } from "../assets/Web-D/Cultural_Events";


export const Context = createContext();

const ContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const value = {
    search,
    setSearch,
    events,
    technical_events,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
export default ContextProvider;
