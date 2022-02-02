// allow  user to select the unit of the ingredient from the list below:

import React from "react";
import { useState } from "react";

function AddIngredient({ addIngredient }) {
  /* 
    Props:
    StepID
    New Ingredient (State) to be added to JSON for committing to the DB

    Fields: 
    Ingredient (ingredient)
    Unit of measurement (unit)
    Amount (amount)
    IngredientOrder (order)
    Completed 

    */
  const [ingredient, setIngredient] = useState();
  const [amount, setAmount] = useState();
  const [unit, setUnit] = useState();

  const handleSubmit = (e) => {
    addIngredient([ingredient, amount, unit]);
    e.preventDefault();
  };

  const units = [
    "select",
    "pinch",
    "tbsp",
    "tsp",
    "cup",
    "pint",
    "quart",
    "gallon",
    "fluid ounce",
    "ml",
    "l",
    "pound",
    "mg",
    "g",
    "kg",
  ];

  const unitOptions = units.map((unit) => {
    return <option name={unit}>{unit}</option>;
  });

  return (
    <div className="grey-container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Ingredient:</label>
        <br />
        <input
          name="ingredient"
          type="text"
          value={ingredient}
          placeholder="Enter ingredient"
          onChange={(e) => setIngredient(e.target.value)}
        />
        <br />
        <br />

        <label>Amount</label>
        <br />
        <input
          name="amount"
          type="int"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />

        <label>Measurement Unit</label>
        <br />
        <select
          value={unit}
          placeholder="Select"
          onChange={(e) => setUnit(e.target.value)}
        >
          {unitOptions}
        </select>
        <br />

        <br />
        <input type="submit" value="Submit Ingredient" />
      </form>
    </div>
  );
}

export default AddIngredient;
