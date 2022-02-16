import React from "react";

function IngredientsList({ ingredients }) {
  if (ingredients.length !== 0) {
    const ingredientsList = ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          {ingredient.amountWhole}&nbsp;
          {ingredient.amountFrac} {ingredient.unit} of {ingredient.ingredient}
        </div>
      );
    });

    return (
      <div>
        <h3 className="text-md font-semibold">Ingredients:</h3>
        <div>{ingredientsList}</div>
      </div>
    );
  }
  return null;
}
export default IngredientsList;
