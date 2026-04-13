import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, onClick, dispatch }) {
  return (
    <div className="card" onClick={onClick}>
      {/* HEART BUTTON */}
      <div 
        className={`heart-btn ${recipe.favorite ? "is-favorite" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_FAVORITE",
            payload: recipe.id,
          });
        }}
      >
        {recipe.favorite ? "❤️" : "🤍"}
      </div>

      <div className="card-image-box">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      
      <div className="card-content">
        <h3>{recipe.name}</h3>
        <p className="card-tag">Homemade Recipe</p>
        <span className="view-link">View Details →</span>
      </div>
    </div>
  );
}

export default RecipeCard;