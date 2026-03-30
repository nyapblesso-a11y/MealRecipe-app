import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(query);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
