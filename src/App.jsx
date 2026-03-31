import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import RecipeList from './components/RecipeList/RecipeList'
import ReceipeDrawer from './components/RecipeForm/ReceipeForm'

function App() {
  const [selectRecipe, setSelectRecipe] = useState(null)
  return (
    <>
    <SearchBar onSearch={()=>{}}/>
      <ReceipeDrawer/>
    <RecipeList onSelect={setSelectRecipe}/>
    </>
  )
}

export default App