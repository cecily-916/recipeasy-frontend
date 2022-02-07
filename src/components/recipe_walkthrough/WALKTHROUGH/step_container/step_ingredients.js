import React from "react";
import Ingredient from "./ingredient";

function StepIngredients({ ingredients }) {
  if (ingredients.length !== 0) {
    const ingredientsList = ingredients.map((ingredient, index) => {
      return (
        <ul key={index}>
          <Ingredient ingredient={ingredient} />
        </ul>
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

export default StepIngredients;
