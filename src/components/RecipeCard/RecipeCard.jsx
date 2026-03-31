import React from "react";
import "./RecipeCard.css";

function RecipeCard({recipe, onClick}) {
  return (
    <div>
      <div className="card" onClick={onClick}>
        <img src={recipe.image} alt='recipe image'/>
        <div className="card-content">
          <h3>{recipe.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
