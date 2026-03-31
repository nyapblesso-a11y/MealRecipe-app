import React, { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";
function ReceipeDrawer() {
  const { dispatch } = useRecipes();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const newRecipe = {
      id: Date.now(),
      name,
      image,
      favorite: false,
    };

    dispatch({
      type: "ADD",
      payload: newRecipe,
    });

    setImage("");
    setName("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Recipe</button>
      </form>
    </>
  );
}

export default ReceipeDrawer;
