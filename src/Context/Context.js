import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const value = {
    search,
    setSearch,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
export default ContextProvider;
