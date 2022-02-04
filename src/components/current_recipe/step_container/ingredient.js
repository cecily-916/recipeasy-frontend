import React from "react";

function Ingredient(props) {
  return (
    <div>
      {props.ingredient.amount} {props.ingredient.unit} of{" "}
      {props.ingredient.ingredient}
    </div>
  );
}

export default Ingredient;
