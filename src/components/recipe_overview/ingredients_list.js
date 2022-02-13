import React from "react";

// List of total ingredients for recipe.
// Called by both the main recipe overview and the recipe walkthrough screens.
// Props to be sent in: ingredients = recipeData.ingredients

function IngredientsList(props) {
  // Map the recipe items to display individual recipes
  if (props.ingredients) {
    const ingredientsItems = props.ingredients.map((ingredient, index) => {
      console.log(ingredient, index);
      return (
        <li key={index}>
          {ingredient.Name} | {ingredient.Quantity} {ingredient.Unit}
        </li>
      );
    });

    return (
      <div className="mb-8">
        <p className="text-xl font-bold">Ingredients:</p>
        <ul>{ingredientsItems}</ul>
      </div>
    );
  }
  return null;
}

export default IngredientsList;
