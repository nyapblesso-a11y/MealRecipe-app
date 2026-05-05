import React, { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeForm.css";
import { creatRecipeApi, fetchRecipes } from "../../Api/api";

function RecipeForm({ setSearch }) {
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

    const isFile = !!imageFile;

    await creatRecipeApi(
      {
        name,
        description,
        image: imageFile || imageUrl,
      },
      isFile
    );

    // 🔥 IMPORTANT: re-fetch from DB (fixes disappearing issue)
    const updatedRecipes = await fetchRecipes();

    dispatch({
      type: "SET_RECIPES",
      payload: updatedRecipes,
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
            <h3>Create Recipe</h3>

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

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                setImageFile(file);
                setImageUrl("");

                const url = URL.createObjectURL(file);
                setPreview(url);
              }}
            />

            {preview && <img src={preview} alt="preview" />}

            <textarea
              placeholder="Recipe description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Add Recipe</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default RecipeForm;