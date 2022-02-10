import React from "react";
import IngredientsList from "./ingredients_list";
import Step from "./step";

function ExtractedRecipeOverview(recipe) {
  console.log(recipe.title);
  return (
    <div>
      <h1>{recipe.recipe.title}</h1>
      <h2>{recipe.recipe.description}</h2>
      <p>
        Rating: {recipe.recipe.rating} Cook Time: {recipe.recipe.readyInMinutes}{" "}
        Servings:
        {recipe.recipe.servings}
      </p>
      <a href="{url}">Source {recipe.recipe.creditsText}</a>
      <br />
      <br />
      <p className="text-xl font-bold">Steps:</p>
      {/* <Step step={recipe.recipe.instructions} /> */}
      {/* <br /> */}
      {/* {recipe.instructions} */}
      {/* <br /> */}
      <br />
      <IngredientsList ingredients={recipe.recipe.extendedIngredients} />
      {/* <StepIngredients ingredients={ingredients}/> */}
    </div>
  );
}

export default ExtractedRecipeOverview;
