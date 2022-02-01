import React from "react";
import IngredientsList from "./ingredients_list";
import StepsList from "./steps_list";

function RecipeOverview(props) {
  return (
    <div>
      <h1>{props.recipe.title}</h1>
      <h2>{props.recipe.description}</h2>
      <p>
        Rating: {props.recipe.rating} Prep Time: {props.recipe.prepTime} Cook
        Time: {props.recipe.cookTime}
      </p>
      <p className="text-xl font-bold">Steps:</p>
      <StepsList steps={props.recipe.steps} />
      <IngredientsList ingredients={props.recipe.ingredients} />
      {/* <StepIngredients ingredients={ingredients}/> */}
    </div>
  );
}

export default RecipeOverview;
