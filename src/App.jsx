import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeList from "./components/RecipeList/RecipeList";
import ReceipeForm from "./components/RecipeForm/ReceipeForm";
import RecipeDrawer from "./components/RecipeDrawer/RecipeDrawer";
import { useRecipes } from "./context/RecipeContext";

function App() {
  const [selectRecipe, setSelectRecipe] = useState(null);
  const [search, setSearch] = useState("");
  const { state, dispatch } = useRecipes();

  const filteredRecipes = state.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("search", search)
  console.log("filtered search", filteredRecipes)

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <ReceipeForm setSearch={setSearch} />
      <RecipeList recipes={filteredRecipes} onSelect={setSelectRecipe} dispatch={dispatch}/>
      <RecipeDrawer
        recipe={selectRecipe}
        onClose={() => setSelectRecipe(null)}
      />
    </>
  );
}

export default App;
