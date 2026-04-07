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
  const [filter, setFilter] = useState("all");

const filteredRecipes = state.recipes
  .filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter((recipe) =>
    filter === "favorites" ? recipe.favorite : true
  );
  console.log("search", search);
  console.log("filtered search", filteredRecipes);

  return (
    <>
      
      <SearchBar search={search} setSearch={setSearch} setFilter={setFilter} />
      <ReceipeForm setSearch={setSearch} />
      <RecipeList
        recipes={filteredRecipes}
        onSelect={setSelectRecipe}
        dispatch={dispatch}
      />
      <RecipeDrawer
        recipe={selectRecipe}
        onClose={() => setSelectRecipe(null)}
      />
    </>
  );
}

export default App;
