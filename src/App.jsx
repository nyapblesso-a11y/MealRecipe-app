import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import RecipeList from './components/RecipeList/RecipeList'

function App() {
  const [selectRecipe, setSelectRecipe] = useState(null)
  return (
    <>
    <SearchBar onSearch={()=>{}}/>
    <RecipeList onSelect={setSelectRecipe}/>
    </>
  )
}

export default App