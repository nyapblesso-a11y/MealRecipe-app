// const BASE_URL = "https://meal-recipe-server.onrender.com/api/recipes";

 const BASE_URL = "http://localhost:3000/api/recipes";

// GET all recipes
export const fetchRecipes = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error("Failed to fetch recipes");

  return res.json();
};

// CREATE recipe
export const creatRecipeApi = async (data, isFile) => {
  let options;

  if (isFile) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image);

    options = {
      method: "POST",
      body: formData,
    };
  } else {
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        imageUrl: data.image,
      }),
    };
  }

  const res = await fetch(BASE_URL, options);
  return res.json();
};

// UPDATE
export const updateRecipeAPI = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

// DELETE
export const deleteRecipeApi = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// TOGGLE FAVORITE
export const toggleFavoriteApi = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}/favorite`, {
    method: "PATCH",
  });

  return res.json();
};