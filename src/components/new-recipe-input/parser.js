import React from "react";

function Parser({ ingredients }) {
  let details = ingredients;
  const parsedIngredients = details
    .replace("*", "|")
    .replace(".", "|")
    .split("|");

  const inputText = parsedIngredients.map((ingredient, index) => {
    return ingredient ? (
      <ul key={index} className="text-md">
        -{ingredient}
      </ul>
    ) : (
      ""
    );
  });
  return inputText;
}

export default Parser;
