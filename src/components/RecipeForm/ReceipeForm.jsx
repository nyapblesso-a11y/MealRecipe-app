import React, { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeForm.css";
function ReceipeForm({ setSearch }) {
  const { dispatch } = useRecipes();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageMode, setImageMode] = useState("url");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) {
      return;
    }

    const newRecipe = {
      id: Date.now(),
      name,
      image,
      description,
      favorite: false,
    };

    dispatch({
      type: "ADD",
      payload: newRecipe,
    });

    setImage("");
    setName("");
    setDescription("");
    setShowForm(false);
  };
  return (
    <>
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
                  value={imageMode === "url" ? image : ""}
                  onChange={(e) => {
                    setImageMode("url");
                    setImage(e.target.value);
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
                      const file = e.target.files[0];
                      if (!file) return;
                      setImageMode("file");
                      setImage(URL.createObjectURL(file));
                    }}
                  />

                  {!image ? (
                    <div className="upload-prompt">
                      {/* <span className="icon">📸</span> */}
                      <p>Click to upload image</p>
                    </div>
                  ) : (
                    <div className="preview-container">
                      <img
                        src={image}
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
    </>
  );
}

export default ReceipeForm;
