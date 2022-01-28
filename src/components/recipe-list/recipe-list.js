// Recipe list component displays all recipe items in an ordered list.
// The recipe information is displayed in either a listed grid format.
// The list has sortable columns for rating, servings, etc.
import { useState } from "react";
import Recipe from "./recipe";

function RecipeList(props) {
  const [currentRecipe, setCurrentRecipe] = useState(0);

  console.log(props.recipes);
  // Map the recipe items to display individual recipes
  const recipeItems = props.recipes.map((recipe) => {
    return (
      <ol>
        <Recipe
          recipe={recipe}
          trigger={currentRecipe}
          setTrigger={setCurrentRecipe}
        />
      </ol>
    );
  });

  // Return list of recipe jsx items to be displayed in the list container
  return <div>{recipeItems}</div>;
}

export default RecipeList;
