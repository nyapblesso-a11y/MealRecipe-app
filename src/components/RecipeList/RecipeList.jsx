
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.css";

export default function RecipeList({ onSelect , recipes}) {


  return (
    <div className="grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onSelect(recipe)}
        />
      ))}
    </div>
  );
}