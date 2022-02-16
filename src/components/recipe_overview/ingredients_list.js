import React from "react";

// List of total ingredients for recipe.
// Called by both the main recipe overview and the recipe walkthrough screens.
// Props to be sent in: ingredients = recipeData.ingredients

function IngredientsList({ ingredients }) {
  // Map the recipe items to display individual recipes
  // if (ingredients) {
  //   const ingredientsItems = ingredients.map((ingredient, index) => {
  //     console.log(ingredient, index);
  //     return (
  //       <li key={index}>
  //         {ingredient.Name} | {ingredient.Quantity} {ingredient.Unit}
  //       </li>
  //     );
  //   });

  return ingredients ? (
    <div className="mb-8">
      <p className="text-xl font-bold">Ingredients:</p>
      <ul>{ingredients}</ul>
    </div>
  ) : (
    ""
  );
}

export default IngredientsList;
