import { createContext, useState } from "react";
import { events, technical_events } from "../assets/Events";

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
