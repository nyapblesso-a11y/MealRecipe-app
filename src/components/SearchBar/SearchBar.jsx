import React from 'react'
import "./SearchBar.css"
function SearchBar() {
  return (
    <div className='search-container'>
   <input type="text" className='search-input' placeholder='search your meal here' />
    </div>
  )
}

export default SearchBar