const BASE_URL = "http://localhost:4040/api/recipes"

// Get all Recipes

export const fetchRecipes = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}