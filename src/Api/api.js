const BASE_URL = "http://localhost:4040/api/recipes"

// Get all Recipes

export const fetchRecipes = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}

// create recipes (file or Url Images)

export const creatRecipeApi = async (data, isFile) => {
   if (isFile) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image);

    const res = await fetch(BASE_URL, {
      method: "POST",
      body: formData,
    });

    return res.json();
  }else {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  }
}

// delete recipe

export const deleteRecipeApi = async(id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })
}

// toggle favorite 

export const toggleFavoriteApi = async(id) =>{
    const res = await fetch(`${BASE_URL}/${id}/favorite`, {
        method: "PATCH",
    })

    return res.json()
}