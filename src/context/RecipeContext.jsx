import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

import { initialState, recipeReducer } from "./RecipeReducer";
import { fetchRecipes } from "../Api/api";

const STORAGE_KEY = "savor_recipes";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        dispatch({ type: "SET_RECIPES", payload: data });
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };
    loadRecipes();
  }, []);

  useEffect(() => {
    if (state.recipes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.recipes));
    }
  }, [state.recipes]);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
