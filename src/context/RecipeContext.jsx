import { React, useContext, useReducer, useEffect, createContext } from "react";
import { initialState, recipeReducer } from "./RecipeReducer";
import { createElement } from "react";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  //local storage loading
  useEffect(() => {
    const storeRecipe = localStorage.getItem("recipes");
    if (storeRecipe) {
      dispatch({
        type: "SET_RECIPES",
        payload: JSON.parse(storeRecipe),
      });
    }
  }, []);

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