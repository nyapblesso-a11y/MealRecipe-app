import React from "react";
import "./RecipeCard.css";
import { toggleFavoriteApi } from "../../Api/api";

const getImageSrc = (image) => {
  if (!image) return "";

  if (
    image.startsWith("http") ||
    image.startsWith("blob:") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  return `http://localhost:4040${image}`;
};
function RecipeCard({ recipe, onClick, dispatch }) {
  const handleToggleFavorite = async (e) => {
    e.stopPropagation();

    try {
      const res = await toggleFavoriteApi(recipe.id);

      dispatch({
        type: "UPDATE",
        payload: res.update,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card" onClick={onClick}>
      <div
        className={`heart-btn ${recipe.favorite ? "is-favorite" : ""}`}
        onClick={handleToggleFavorite}
      >
        {recipe.favorite ? "❤️" : "🤍"}
      </div>

      {recipe.image && (
        <div className="card-image-box">
          <img src={recipe.image} alt={recipe.name} />
        </div>
      )}

      <div className="card-content">
        <h3>{recipe.name}</h3>
        <p className="card-tag">Homemade Recipe</p>
        <span className="view-link">View Details →</span>
      </div>
    </div>
  );
}
export default RecipeCard;