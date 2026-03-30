export const initialState = {
  recipes: [],
};

export function recipeReducer(state, action) {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD":
      return { ...state, recipes: [...state.recipes, action.payload] };
  }
}
