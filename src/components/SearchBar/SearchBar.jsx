import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({search, setSearch}) {
 
  return (
    <>
  <header className="app-header">
  <div className="logo-section">
    <div className="app-logo"><img src="https://img.icons8.com/color/100/null/restaurant.png" alt="image-logo" /></div>
    <h1 className="app-title">Flavor<span>Node</span></h1>
  </div>

  <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</header>
</>
  );
}

export default SearchBar;
