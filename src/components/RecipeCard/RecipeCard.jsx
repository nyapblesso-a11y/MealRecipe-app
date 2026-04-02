import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, onClick, dispatch }) {
  return (
    <div>
<div className="card" onClick={onClick}>
  <div className="heart-container">
    <span
      className="heart"
      onClick={(e) => {
        e.stopPropagation();
        dispatch({
          type: "TOGGLE_FAVORITE",
          payload: recipe.id,
        });
      }}
    >
      {recipe.favorite ? "❤️" : "🤍"}
    </span>
  </div>

  <img src={recipe.image} alt={recipe.name} />
  
  <div className="card-content">
    <h3>{recipe.name}</h3>
    <span className="view-details">View Details →</span>
  </div>
</div>
    </div>
  );
}

export default RecipeCard;
