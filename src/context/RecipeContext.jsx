import { React, useContext, useReducer, useEffect, createContext } from "react";
import { initialState, recipeReducer } from "./RecipeReducer";
import { fetchRecipes } from "../Api/api";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
const [state, dispatch] = useReducer(
  recipeReducer,
  initialState
);

useEffect(()=>{
  const loadRecipes = async () => {
    const data = await fetchRecipes()
    dispatch({ type: "SET_RECIPES", payload: data });
  }

  loadRecipes()
}, [])

  return (
    <RecipeContext.Provider value={{state, dispatch}}>
       {children}
    </RecipeContext.Provider>
  )
}


export function useRecipes() {
    return useContext(RecipeContext)
}