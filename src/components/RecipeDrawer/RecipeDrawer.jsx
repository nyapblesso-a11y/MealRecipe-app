import { useState, useEffect } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeDrawer.css";

export default function RecipeDrawer({ recipe, onClose }) {
  const { dispatch } = useRecipes();

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setName(recipe.name || "");
      setImage(recipe.image || "");
      setDescription(recipe.description || "");
      setIsEditing(false);
    }
  }, [recipe]);

  if (!recipe) return null;

  function handleUpdate() {
    dispatch({
      type: "UPDATE",
      payload: {
        id: recipe.id,
        name,
        image,
        description,
      },
    });

    setIsEditing(false);
  }

  return (
    <div className="drawer-overlay">
      <div className="drawer">

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {!isEditing ? (
          <>
            <img src={recipe.image} alt={recipe.name} />

            <h2>{recipe.name}</h2>

            <p>{recipe.description}</p>

            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        ) : (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Recipe name"
            />

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />

            <button onClick={handleUpdate}>
              Save
            </button>
          </>
        )}

      </div>
    </div>
  );
}