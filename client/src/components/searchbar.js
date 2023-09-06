import React from 'react';
import './searchbar.css'; 

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes"
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
