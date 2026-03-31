import "./RecipeDrawer.css";

export default function RecipeDrawer({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="drawer-overlay">
      <div className="drawer">

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <img src={recipe.image} alt={recipe.name} />

        <h2>{recipe.name}</h2>

        <p>{recipe.description || "No description available"}</p>

      </div>
    </div>
  );
}