const BASE_URL = "http://localhost:4040/api/recipes"

// Get all Recipes

export const fetchRecipes = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}

// create recipes (file or Url Images)
export const creatRecipeApi = async (data, isFile) => {
  const options = {
    method: "POST",
    body: data instanceof FormData ? data : JSON.stringify(data),
  };

  if (!isFile) {
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  const res = await fetch(BASE_URL, options);
  return res.json();
};

// handle update

export const updateRecipeAPI = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// delete recipe

export const deleteRecipeApi = async(id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })

    return res.json()
}

// toggle favorite 

export const toggleFavoriteApi = async(id) =>{
    const res = await fetch(`${BASE_URL}/${id}/favorite`, {
        method: "PATCH",
    })

    return res.json()
}