
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.css";

export default function RecipeList({ onSelect , recipes, dispatch}) {


  return (
    <div className="grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onSelect(recipe)}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}