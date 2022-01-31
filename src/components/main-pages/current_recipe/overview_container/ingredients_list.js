import React from "react";

function IngredientsList(props) {
  // Map the recipe items to display individual recipes
  if (props.ingredients) {
    const ingredientsItems = props.ingredients.map((ingredient) => {
      return (
        <ol>
          {ingredient.Name} | {ingredient.Quantity} {ingredient.Unit}
        </ol>
      );
    });
    return (
      <div>
        <h4>Ingredients:</h4>
        <p>{ingredientsItems}</p>
      </div>
    );
  }
  return null;
}

export default IngredientsList;
