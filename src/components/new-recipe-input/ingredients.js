import React from "react";
import { useState } from "react";

function AddIngredientsForm({ ingredientsList, addIngredient }) {
  //Internal form in the new step form
  //each step has 0+ ingredients
  const savedIngredients = ingredientsList.map((ingredient, index) => {
    return (
      <tr className="text-center border-b-2" key={index}>
        <td>{ingredient.amount}</td>
        <td>{ingredient.unit}</td>
        <td>{ingredient.ingredient}</td>
      </tr>
    );
  });

  const [newIngredient, setNewIngredient] = useState({
    ingredient: "",
    unit: "",
    amount: 0.0,
  });

  const handleSubmit = () => {
    if (
      newIngredient.amount === 0 ||
      newIngredient.unit === "" ||
      newIngredient.unit === "Select Unit" ||
      newIngredient.ingredient === ""
    ) {
      alert("Input valid ingredient details before clicking save.");
    } else {
      addIngredient(newIngredient);
      resetNewIngredient();
    }
  };

  const resetNewIngredient = () => {
    setNewIngredient({
      ingredient: "",
      unit: "",
      amount: 0.0,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewIngredient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const units = [
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

  const unitOptions = units.map((unit, index) => {
    return (
      <option key={index} name={unit}>
        {unit}
      </option>
    );
  });

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr className="text-center border-b-2">
            <th>Amount</th>
            <th>Unit</th>
            <th>Ingredient</th>
          </tr>
        </thead>
        <tbody>
          {savedIngredients}
          <br />
          <tr>
            <td>
              <input
                className="w-24 text-center rounded-sm mr-1"
                type="number"
                step=".1"
                placeholder="Amount"
                name="amount"
                value={newIngredient.amount}
                onChange={handleChange}
              />
            </td>
            <td>
              <select
                className="w-40 text-center rounded-sm mr-1"
                name="unit"
                value={newIngredient.unit}
                onChange={handleChange}
              >
                <option>Select Unit</option>
                {unitOptions}
              </select>
            </td>
            <td>
              <input
                className=" text-center rounded-sm mr-1"
                type="text"
                placeholder="Ingredient"
                name="ingredient"
                value={newIngredient.ingredient}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button
        className="border-2 mt-2 hover:bg-yellow-500 hover:text-white p-2 drop-shadow-md rounded-sm text-emerald-900 font-semibold"
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save Ingredient
      </button>
    </div>
  );
}

export default AddIngredientsForm;
