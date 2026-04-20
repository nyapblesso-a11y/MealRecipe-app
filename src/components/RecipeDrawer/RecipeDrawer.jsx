import { useState, useEffect } from "react";
import { useRecipes } from "../../context/RecipeContext";
import "./RecipeDrawer.css";
import { deleteRecipeApi, updateRecipeAPI } from "../../Api/api";

export default function RecipeDrawer({ recipe, onClose }) {
  const { dispatch } = useRecipes();

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageMode, setImageMode] = useState("url");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setName(recipe.name || "");
      setImage(recipe.image || "");
      setDescription(recipe.description || "");
      if (
        recipe.image?.startsWith("data:") ||
        recipe.image?.startsWith("blob:")
      ) {
        setImageMode("file");
      } else {
        setImageMode("url");
      }
      setIsEditing(false);
    }
  }, [recipe]);

  if (!recipe) return null;

  async function handleUpdate() {
    const res = await updateRecipeAPI(recipe.id, {
      name, description, image
    })
    dispatch({
      type: "UPDATE",
      payload: res.update
     
    });

    setIsEditing(false);
  }

  const handledelete = async() => {
 
    await deleteRecipeApi(recipe.id)

    dispatch({
      type: "DELETE",
      payload: recipe.id,
    });

    onClose();
  }

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {!isEditing ? (
          <>
            <img src={recipe.image} alt={recipe.name} />

            <h2>{recipe.name}</h2>

            <p>{recipe.description}</p>

            <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
            <button onClick={handledelete}>Delete Recipe</button>
          </>
        ) : (
          <>
            <>
              <h2>Edit Recipe</h2>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Recipe name"
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

              <input
                className="upload-prompt"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (image && image.startsWith("blob:")) {
                    URL.revokeObjectURL(image);
                  }
                  setImageMode("file");
                  const preview = URL.createObjectURL(file);
                  setImage(preview);
                }}
              />

              {image && <img src={image} alt="preview" />}

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="recipe"
              />

              <button onClick={handleUpdate}>Save</button>
            </>
          </>
        )}
      </div>
    </div>
  );
}
