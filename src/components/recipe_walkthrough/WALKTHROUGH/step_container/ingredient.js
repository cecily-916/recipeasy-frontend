import React from "react";

// Ingredients for an individual step used on the recipe walkthrough feature
function Ingredient(props) {
  return (
    <div>
      {props.ingredient.amount} {props.ingredient.unit} of{" "}
      {props.ingredient.ingredient}
    </div>
  );
}

export default Ingredient;
