import React from "react";

const Searchbar = ({ updateSearchTerm, searchTerm }) => {
  return (
    <div className="iconContainer">
      <input
        key="search-input"
        id="searchInput"
        onChange={updateSearchTerm}
        value={searchTerm}
        placeholder="Search by title"
      ></input>
      <i id="searchLens" className="fas fa-search"></i>
    </div>
  );
};

export default Searchbar;
