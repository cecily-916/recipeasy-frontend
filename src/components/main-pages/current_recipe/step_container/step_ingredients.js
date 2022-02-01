import React from "react";
import Ingredient from "./ingredient";

function StepIngredients(props) {
  if (props.ingredients) {
    const ingredients = props.ingredients.map((ingredient) => {
      return (
        <ul>
          <Ingredient ingredient={ingredient} />
        </ul>
      );
    });
    return (
      <div>
        <h3 className="text-md font-semibold">Ingredients:</h3>
        <p>{ingredients}</p>
      </div>
    );
  }
  return null;
}

export default StepIngredients;
