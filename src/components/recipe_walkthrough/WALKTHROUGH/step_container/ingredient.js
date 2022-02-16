import React from "react";
import tbsp from "../../../../assets/tbsp.png";
import tsp from "../../../../assets/tsp.png";
import cup from "../../../../assets/cup.png";

// Ingredients for an individual step used on the recipe walkthrough feature
function Ingredient({ ingredient }) {
  const unitImage = () => {
    if (ingredient.unit === "tbsp" || ingredient.unit === "tablespoon") {
      return <img src={tbsp} className="h-8" alt="tbsp" />;
    } else if (ingredient.unit === "tsp" || ingredient.unit === "teaspoon") {
      return <img src={tsp} className="h-8" alt="tsp" />;
    } else if (ingredient.unit === "cup" || ingredient.unit === "cups") {
      return <img src={cup} className="h-8" alt="cup" />;
    }
  };
  console.log(ingredient);
  return (
    <div className="bg-[#F1F1F1] border-b-2 mb-2 rounded-md relative">
      <div className="grid grid-cols-4 grid-rows-1">
        <p className="m-3 text-xl font-semibold self-center text-center grid-row-1 ">
          {ingredient.ingredient}
        </p>
        {ingredient.amount ? (
          <p className="m-3 text-2xl self-center font-bold text-center  grid-row-1">
            {ingredient.amount}{" "}
          </p>
        ) : (
          <p className="m-3 text-2xl self-center font-bold text-center  grid-row-1">
            {ingredient.amountWhole}
            {ingredient.amountFrac}
          </p>
        )}
        <p className="m-3 text-2xl self-center font-bold text-center grid-row-1">
          {ingredient.unit}
        </p>
        <p className="m-3 text-2xl self-center font-bold text-center grid-row-1">
          {unitImage()}
        </p>
      </div>
    </div>
  );
}

export default Ingredient;
