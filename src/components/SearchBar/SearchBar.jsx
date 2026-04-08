import React, { useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar({ search, setSearch, setFilter, state, filter }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const totalRecipes = state.recipes.length;

  const favoriteRecipes = state.recipes.filter(
    (recipe) => recipe.favorite
  ).length;
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <header className="app-header">
        <div className="logo-section">
          <div className="app-logo">
            <img
              src="https://img.icons8.com/color/100/null/restaurant.png"
              alt="image-logo"
            />
          </div>
          <h1 className="app-title">
            Flavor<span>Node</span>
          </h1>
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
        <div className="filter">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All <span className="badge">{totalRecipes}</span>
          </button>

          <button
            className={filter === "favorites" ? "active" : ""}
            onClick={() => setFilter("favorites")}
          >
            Favorites <span className="badge">{favoriteRecipes}</span>
          </button>
        </div>

        <div className="them">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </header>
    </>
  );
}

export default SearchBar;
