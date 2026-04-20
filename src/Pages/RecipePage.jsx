import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeList from "../components/RecipeList/RecipeList";
import ReceipeForm from "../components/RecipeForm/ReceipeForm";
import RecipeDrawer from "../components/RecipeDrawer/RecipeDrawer";
import { useRecipes } from "../context/RecipeContext";

function RecipePage() {
  const [selectRecipe, setSelectRecipe] = useState(null);
  const [search, setSearch] = useState("");
  const { state, dispatch } = useRecipes();
  const [filter, setFilter] = useState("all");
  const filteredRecipes = state.recipes
    .filter((recipe) => {
      const name = recipe.name || "";
      const query = search || "";

      return name.toLowerCase().includes(query.toLowerCase());
    })
    .filter((recipe) => (filter === "favorites" ? recipe.favorite : true));
  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setFilter={setFilter}
        state={state}
        filter={filter}
      />
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

export default RecipePage;
