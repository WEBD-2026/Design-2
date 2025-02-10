import React, { useContext } from "react";
import { Context } from "../Context/Context";
import "../components/Searchbar.css";

const Searchbar = () => {
  const { search, setSearch } = useContext(Context);
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default Searchbar;
