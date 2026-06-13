import { useState, useEffect } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeDrawer.css";
import { deleteRecipeApi, updateRecipeAPI } from "../../Api/api";

export default function RecipeDrawer({ recipe, onClose }) {
  const { state, dispatch } = useRecipes();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const liveRecipe = recipe
    ? state.recipes.find((r) => r.id === recipe.id) || recipe
    : null;

  useEffect(() => {
    if (liveRecipe) {
      setName(liveRecipe.name || "");
      setImage(liveRecipe.image || "");
      setDescription(liveRecipe.description || "");
    }
  }, [liveRecipe]);

  if (!liveRecipe) return null;

  async function handleUpdate() {
    const isFile = image instanceof File;

    const payload = {
      name,
      description,
      image: isFile ? image : image,
    };

    const res = await updateRecipeAPI(liveRecipe.id, payload);

    dispatch({ type: "UPDATE", payload: res.update });
    setIsEditing(false);
  }

  const handleDelete = async () => {
    await deleteRecipeApi(liveRecipe.id);
    dispatch({ type: "DELETE", payload: liveRecipe.id });
    onClose();
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        {!isEditing ? (
          <div className="drawer-view">
            <img
              src={liveRecipe.image}
              alt={liveRecipe.name}
              className="drawer-hero-img"
            />

            <div className="drawer-header">
              <h2>{liveRecipe.name}</h2>
            </div>

            <p className="drawer-desc">{liveRecipe.description}</p>

            <div className="drawer-actions">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit Details
              </button>
              <button className="delete-btn-text" onClick={handleDelete}>
                Delete Recipe
              </button>
            </div>
          </div>
        ) : (
          <div className="drawer-edit-form">
            <h3>Update Recipe</h3>

            <div className="drawer-input-group">
              <label>Recipe Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Image URL or File</label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setImage(file);
                }}
              />

              <input
                value={typeof image === "string" ? image : ""}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Or paste image URL"
              />

              {image && (
                <div className="drawer-image-preview">
                  <img
                    src={
                      image instanceof File
                        ? URL.createObjectURL(image)
                        : image
                    }
                    alt="preview"
                  />
                </div>
              )}

              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="drawer-actions-vertical">
              <button className="save-btn" onClick={handleUpdate}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
