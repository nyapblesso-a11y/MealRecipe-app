import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeList from "./components/RecipeList/RecipeList";
import ReceipeForm from "./components/RecipeForm/ReceipeForm";
import RecipeDrawer from "./components/RecipeDrawer/RecipeDrawer";

function App() {
  const [selectRecipe, setSelectRecipe] = useState(null);
  return (
    <>
      <SearchBar onSearch={() => {}} />
      <ReceipeForm />
      <RecipeList onSelect={setSelectRecipe} />
      <RecipeDrawer
        recipe={selectRecipe}
        onClose={() => setSelectRecipe(null)}
      />
    </>
  );
}

export default App;
