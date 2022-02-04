import React from "react";

function IngredientsList(props) {
  // Map the recipe items to display individual recipes
  if (props.ingredients) {
    const ingredientsItems = props.ingredients.map((ingredient) => {
      return (
        <li key={ingredient.ID}>
          {ingredient.Name} | {ingredient.Quantity} {ingredient.Unit}
        </li>
      );
    });

    return (
      <div>
        <p className="text-xl font-bold">Ingredients:</p>
        <ul>{ingredientsItems}</ul>
      </div>
    );
  }
  return null;
}

export default IngredientsList;
