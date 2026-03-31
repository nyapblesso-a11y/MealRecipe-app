import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({search, setSearch}) {
 
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
