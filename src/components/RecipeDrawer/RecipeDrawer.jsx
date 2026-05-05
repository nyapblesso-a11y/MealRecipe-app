import { useState, useEffect } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeDrawer.css";
import {
  deleteRecipeApi,
  updateRecipeAPI,
  fetchRecipes,
} from "../../Api/api";

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
    }
  }, [recipe]);

  if (!recipe) return null;

  const handleUpdate = async () => {
    await updateRecipeAPI(recipe.id, {
      name,
      description,
      image,
    });

    const updated = await fetchRecipes();

    dispatch({
      type: "SET_RECIPES",
      payload: updated,
    });

    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteRecipeApi(recipe.id);

    const updated = await fetchRecipes();

    dispatch({
      type: "SET_RECIPES",
      payload: updated,
    });

    onClose();
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>✖</button>

        {!isEditing ? (
          <>
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        ) : (
          <>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={handleUpdate}>Save</button>
          </>
        )}
      </div>
    </div>
  );
}