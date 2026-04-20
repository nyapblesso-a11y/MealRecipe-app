import React, { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeForm.css";
import { creatRecipeApi } from "../../Api/api";

function ReceipeForm({ setSearch }) {
  const { dispatch } = useRecipes();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name) return;

  let payload;
  let isFile = false;

  if (imageFile) {
    payload = new FormData();
    payload.append("name", name);
    payload.append("description", description);
    payload.append("image", imageFile);
    isFile = true;
  } else {
    payload = {
      name,
      description,
      imageUrl: imageUrl,
    };
  }

  const newRecipe = await creatRecipeApi(payload, isFile);

  dispatch({
    type: "ADD",
    payload: newRecipe.recipe || newRecipe,
  });

  setName("");
  setDescription("");
  setImageUrl("");
  setImageFile(null);
  setPreview("");
  setShowForm(false);
};

  return (
    <div className="container">
      {!showForm && (
        <button className="toggle-btn" onClick={() => setShowForm(true)}>
          + Add New Recipe
        </button>
      )}

      {showForm && (
        <div className="form-overlay">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Create Recipe</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            <div className="input-group">
        
              <input
                type="text"
                placeholder="Recipe name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImageFile(null);
                  setPreview(e.target.value);
                }}
              />

              <div className="divider">
                <span>OR</span>
              </div>

             
              <label className="file-upload-zone">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    setImageFile(file);
                    setImageUrl("");

                    const objectUrl = URL.createObjectURL(file);
                    setPreview(objectUrl);
                  }}
                />

                {!preview ? (
                  <div className="upload-prompt">
                    <p>Click to upload image</p>
                  </div>
                ) : (
                  <div className="preview-container">
                    <img
                      src={preview}
                      alt="preview"
                      className="image-preview"
                    />
                    <div className="preview-overlay">Change Image</div>
                  </div>
                )}
              </label>

              <textarea
                placeholder="Recipe description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              onClick={() => setSearch("")}
            >
              Add Recipe
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ReceipeForm;