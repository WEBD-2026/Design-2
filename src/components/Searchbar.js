import React from "react";
import "./Searchbar.css";

const Search = ({ search, setSearch }) => {
  return (
    <div className="brutalist-container">
       <input
      type="text"
      placeholder="TYPE HERE"
      className="brutalist-input smooth-type"
      value={search} // ✅ This ensures the input field shows the stored value
      onChange={(e) => setSearch(e.target.value)}
    />
      {/* <input
        placeholder="TYPE HERE"
        className="brutalist-input smooth-type"
        type="text"
        onChange={onSearchChange}
      /> */}
      <label className="brutalist-label">SEARCH The Event</label>
    </div>
  );
};

export default Search;
