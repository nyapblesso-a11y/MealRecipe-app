import React from "react";
import "./RecipeCard.css";

function RecipeCard() {
  return (
    <div>
      <div className="card">
<img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600" alt="Yarm sauce" />
        <div className="card-content">
          <h3>Yarm Sauce</h3>
          <p>
            A spicy, savory blend perfect for dipping or drizzling over fresh
            meals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
