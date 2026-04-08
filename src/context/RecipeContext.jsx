import { React, useContext, useReducer, useEffect, createContext } from "react";
import { initialState, recipeReducer } from "./RecipeReducer";


const RecipeContext = createContext();

export function RecipeProvider({ children }) {
const [state, dispatch] = useReducer(
  recipeReducer,
  initialState,
  (initial) => {
    const stored = localStorage.getItem("recipes");
    return stored
      ? { recipes: JSON.parse(stored) }
        : initial;
  }
);


  useEffect(()=> {
   localStorage.setItem('recipes', JSON.stringify(state.recipes))
  }, [state.recipes])
  
  return (
    <RecipeContext.Provider value={{state, dispatch}}>
       {children}
    </RecipeContext.Provider>
  )
}


export function useRecipes() {
    return useContext(RecipeContext)
}