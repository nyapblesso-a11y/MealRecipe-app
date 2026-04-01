import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, onClick, dispatch }) {
  return (
    <div>
      <div className="card" onClick={onClick}>
        <img src={recipe.image} alt="recipe image" />
        <div className="card-content">
          <h3>{recipe.name}</h3>
        </div>

        <span
          className="heart"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({
              type: "TOGGLE_FAVORITE",
              payload: recipe.id,
            });
          }}
        >{recipe.favorite ? "❤️" : "🤍"}</span>
      </div>
    </div>
  );
}

export default RecipeCard;
