import React, { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeForm.css"
function ReceipeForm({setSearch}) {
  const { dispatch } = useRecipes();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image ) {
      return
    };

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
    setShowForm(false)
  };
  return (
    <>
     <div className="container">
      {/* 1. The Toggle Button */}
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
              <button type="button" className="close-btn" onClick={() => setShowForm(false)}>✕</button>
            </div>

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
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <textarea
              placeholder="Recipe description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="submit-btn" onClick={()=> setSearch("")}>Add Recipe</button>
          </form>
        </div>
      )}
    </div>
    </>
  );
}

export default ReceipeForm;
