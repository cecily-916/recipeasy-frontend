import React from "react";
import IngredientsList from "./ingredients_list";
import StepsList from "./steps_list";
import { Link } from "react-router-dom";

function RecipeOverview(props) {
  return (
    <div className="align-center">
      <h1 className="mt-8">{props.recipe.title}</h1>
      {props.recipe.author ? (
        <p className="font-bold text-emerald-900">By: {props.recipe.author}</p>
      ) : (
        ""
      )}
      <br />

      <br />
      <section>
        <p className="font-bold inline">Prep Time:&nbsp;</p>
        {props.recipe.prepTime}&ensp;&ensp;
        <p className="font-bold inline">Total Time:&nbsp;</p>
        {props.recipe.cookTime}&ensp;&ensp;
        <p className="font-bold inline-flex">Servings:&nbsp; </p>
        {props.recipe.servings}&ensp;&ensp;
      </section>
      <br />

      <h2>{props.recipe.description}</h2>

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
