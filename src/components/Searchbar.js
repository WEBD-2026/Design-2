import React from 'react';
import './Searchbar.css'
const Search = () => {
  return (
    <div className="brutalist-container">
      <input placeholder="TYPE HERE" className="brutalist-input smooth-type" type="text" />
      <label className="brutalist-label">SEARCH The Event</label>
    </div>
  );
}

export default Search;
