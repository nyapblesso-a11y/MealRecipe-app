import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import RecipeCard from './components/RecipeCard/RecipeCard'

function App() {
  return (
    <>
    <SearchBar onSearch={()=>{}}/>
      <RecipeCard/>
    </>
  )
}

export default App