import React from "react";
import Ingredient from "./ingredient";

function StepIngredients(props) {
  const ingredients = props.ingredients.map((ingredient) => {
    return (
      <ol>
        <Ingredient ingredient={ingredient} />
      </ol>
    );
  });
  return (
    <div>
      <h3>Ingredients:{ingredients}</h3>
    </div>
  );
}

export default StepIngredients;
