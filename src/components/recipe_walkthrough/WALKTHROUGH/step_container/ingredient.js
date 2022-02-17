import React from "react";
import tbsp from "../../../../assets/tbsp.png";
import tsp from "../../../../assets/tsp.png";
import cup from "../../../../assets/cup.png";

// Ingredients for an individual step used on the recipe walkthrough feature
function Ingredient({ ingredient }) {
  const unitImage = () => {
    if (ingredient.unit === "tbsp" || ingredient.unit === "tablespoon") {
      return (
        <span>
          <span class="material-icons-outlined absolute right-28 text-teal-800 text-3xl bottom-4">
            table_bar
          </span>
          <img
            src={tbsp}
            className="h-8 absolute right-20 bottom-4"
            alt="tbsp"
          />
        </span>
      );
    } else if (ingredient.unit === "tsp" || ingredient.unit === "teaspoon") {
      return (
        <span>
          <img src={tsp} className="h-9 absolute right-20 bottom-4" alt="tsp" />
          <span class="material-icons-outlined absolute right-28 text-amber-700 text-2xl bottom-4">
            emoji_food_beverage
          </span>
        </span>
      );
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
        {ingredient.amount > 0 ? (
          <p className="m-3 text-2xl self-center font-bold text-center  grid-row-1">
            {ingredient.amount}{" "}
          </p>
        ) : ingredient.amountwhole === 0 ? (
          <p className="m-3 text-2xl self-center font-bold text-center  grid-row-1">
            {ingredient.amountfrac}
          </p>
        ) : (
          <p className="m-3 text-xl self-center font-bold text-center  grid-row-1">
            {ingredient.amountwhole} &nbsp;&nbsp;
            {ingredient.amountfrac}
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
