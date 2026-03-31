import React from "react";
import "./RecipeCard.css";

function RecipeCard() {
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=600"
          alt="Yarm Sauce Dish"
        />
        <div className="card-content">
          <h3>Yarm Sauce</h3>
          <p>A rich, savory blend perfect for dipping.</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
