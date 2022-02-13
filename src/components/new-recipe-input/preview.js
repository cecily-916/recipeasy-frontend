import React from "react";
import StepsList from "../recipe_overview/steps_list";
import RecipeOverview from "../recipe_overview/recipe_container";
import StepCard from "./step_card";

function NewRecipePreview({ newRecipe }) {
  return (
    <div className="max-w-lg max-h-fit rounded-md mt-16 pb-24">
      <p className="text-lg font-bold text-emerald-900 italic">Preview:</p>
      <div className="align-center">
        <h1>{newRecipe.title}</h1>
        <br />

        <p className="font-bold text-emerald-900">
          By: {newRecipe.originalcreator}
        </p>
        <br />

        <br />
        <section>
          <p className="font-bold inline">Prep Time:</p>
          {newRecipe.prepTime}&ensp;&ensp;
          <p className="font-bold inline">Total Time:</p>
          {newRecipe.cookTime}&ensp;&ensp;
          <p className="font-bold inline-flex">Servings: </p>
          {newRecipe.servings}&ensp;&ensp;
        </section>
        <br />

        <h2>{newRecipe.description}</h2>

        <br />
        <StepCard />
        <br />
      </div>
    </div>
  );
}

export default NewRecipePreview;
