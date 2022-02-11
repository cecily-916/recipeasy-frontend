import React from "react";
import IngredientsList from "./ingredients_list";
import StepsList from "./steps_list";

function RecipeOverview(props) {
  return (
    <div>
      <h1>{props.recipe.title}</h1>
      <br />
      <h2>{props.recipe.description}</h2>
      <br />
      <p>
        <p className="font-bold inline">Prep Time:</p>
        {props.recipe.prepTime}&ensp;&ensp;
        <p className="font-bold inline">Total Time:</p>
        {props.recipe.cookTime}&ensp;&ensp;
        <p className="font-bold inline-flex">Servings: </p>
        {props.recipe.servings}&ensp;&ensp;
      </p>
      <br />
      <p className="text-xl font-bold">Steps:</p>
      <StepsList steps={props.recipe.steps} />
      <br />
      <IngredientsList ingredients={props.recipe.ingredients} />
      {/* <StepIngredients ingredients={ingredients}/> */}
    </div>
  );
}

export default RecipeOverview;
