import React from "react";
import Ingredient from "./ingredient";

function StepIngredients({ ingredients }) {
  if (ingredients.length !== 0) {
    const ingredientsList = ingredients.map((ingredient, index) => {
      return (
        <ul key={index} className="w-4/5">
          <Ingredient ingredient={ingredient} />
        </ul>
      );
    });
    return (
      <div>
        <br />
        <div className="h-4">{ingredientsList}</div>
      </div>
    );
  }
  return null;
}

export default StepIngredients;
