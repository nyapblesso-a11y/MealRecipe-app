export const initialState = {
  recipes: [],
};

export function recipeReducer(state, action) {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD":
      return { ...state, recipes: [...state.recipes, action.payload] };
    case "UPDATE":
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
      };
    case "DELETE":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
  }
}
