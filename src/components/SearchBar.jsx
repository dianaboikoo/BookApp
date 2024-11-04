import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button className="search-icon">🔍</button>
    </div>
  );
}

export default SearchBar;
