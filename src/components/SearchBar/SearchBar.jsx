import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({search, setSearch}) {
 
  return (
    <>
  <header className="app-header">
  <div className="logo-section">
    <div className="logo-icon">💜</div> {/* You can replace this emoji with an <img> tag */}
    <h1 className="app-title">Yarm<span>Recipes</span></h1>
  </div>

  <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <span className="search-icon">🔍</span>
  </div>
</header>
</>
  );
}

export default SearchBar;
