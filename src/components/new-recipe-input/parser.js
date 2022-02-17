import React from "react";

function Parser({ ingredients }) {
  let details = ingredients;
  const parsedIngredients = details.replace(/([.\n])/g, "|").split("|");

  const inputText = parsedIngredients.map((ingredient, index) => {
    return ingredient ? (
      <ul key={index} className="text-lg">
        {ingredient}
      </ul>
    ) : (
      ""
    );
  });
  return inputText;
}

export default Parser;
