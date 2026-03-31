import { useRecipes } from "../../context/RecipeContext";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.css";

export default function RecipeList({ onSelect }) {
  const { state } = useRecipes();
  return (
    <div className="grid">
      {state.recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onSelect(recipe)}
        />
      ))}
    </div>
  );
}