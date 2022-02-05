import React from "react";
import StepsList from "../recipe_overview/steps_list";
import RecipeOverview from "../recipe_overview/recipe_container";
function NewRecipePreview({ newRecipe }) {
  return (
    <div className="max-w-lg max-h-fit rounded-md mt-16 pb-24">
      <p className="text-lg font-bold text-emerald-900 italic">Preview:</p>
      {/* <h1>{newRecipe.title}</h1>
      <br />
      <h2>{newRecipe.description}</h2>
      <br />
      <p>
        Prep Time: {newRecipe.prepTime} Cook Time: {newRecipe.cookTime}{" "}
        Servings: {newRecipe.servings} */}
      {/* </p> */}
      <RecipeOverview recipe={newRecipe} />
      <br />
    </div>
  );
}

export default NewRecipePreview;
