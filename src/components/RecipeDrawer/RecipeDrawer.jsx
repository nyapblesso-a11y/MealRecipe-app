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
        {/* Close Button with proper class */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {!isEditing ? (
          <div className="drawer-view">
            <img src={recipe.image} alt={recipe.name} className="drawer-hero-img" />
            <div className="drawer-header">
              <h2>{recipe.name}</h2>
            </div>
            <p className="drawer-desc">{recipe.description}</p>

            <div className="drawer-actions">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Details</button>
              <button className="delete-btn-text" onClick={handleDelete}>Delete Recipe</button>
            </div>
          </div>
        ) : (
          <div className="drawer-edit-form">
            <h3>Update Recipe</h3>
            
            <div className="drawer-input-group">
              <label>Recipe Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name your masterpiece" />
              
              <label>Image Source</label>
              <input
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                  setPreview(e.target.value);
                }}
                placeholder="Image URL"
              />

              <div className="drawer-image-preview">
                 {preview && <img src={preview} alt="preview" />}
              </div>

              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Precision instructions..."
              />
            </div>

            <div className="drawer-actions-vertical">
              <button className="save-btn" onClick={handleUpdate}>Save Changes</button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}