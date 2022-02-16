import React, { useEffect } from "react";
import { useState } from "react";

function AddIngredientsForm({ ingredientsList, addIngredient }) {
  //Internal form in the new step form
  //each step has 0+ ingredients
  const savedIngredients = ingredientsList.map((ingredient, index) => {
    return (
      <tr className="text-center border-b-2" key={index}>
        <td>
          {ingredient.amountWhole}
          &nbsp;
          {ingredient.amountFrac}
        </td>
        <td>{ingredient.unit}</td>
        <td>{ingredient.ingredient}</td>
      </tr>
    );
  });

  const [newIngredient, setNewIngredient] = useState({
    ingredient: "",
    unit: "",
    amountWhole: null,
    amountFrac: null,
  });

  const handleSubmit = () => {
    console.log(newIngredient);

    if (
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
      amountWhole: "whole",
      amountFrac: "fractions",
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

  const twoHundred = Array.from({ length: 100 }, (_, index) => index + 1);

  const numOptions = twoHundred.map((num, index) => {
    return (
      <option key={index} num={num}>
        {num}
      </option>
    );
  });

  const fractions = [
    "-",
    "1/8",
    "1/4",
    "1/3",
    "3/8",
    "1/2",
    "5/8",
    "2/3",
    "3/4",
    "7/8",
  ];

  const fractionOptions = fractions.map((num, index) => {
    return (
      <option key={index} num={num}>
        {num}
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
          <tr>
            <th>&nbsp; </th>
            <th>&nbsp; </th>
            <th>&nbsp; </th>
          </tr>
          <tr>
            <td className="inline-block">
              {/* <input
                className="w-24 text-center rounded-sm mr-1"
                type="text"
                placeholder="Amount"
                name="amount"
                value={newIngredient.amount}
                onChange={handleChange}
              /> */}
              <select
                className="w-16 text-center max-h-40 rounded-sm mr-1"
                name="amountWhole"
                value={newIngredient.amountWhole}
                onChange={handleChange}
              >
                <option>-</option>
                {numOptions}
              </select>
              <select
                className="w-18 text-center max-h-40 rounded-sm mr-1"
                name="amountFrac"
                value={newIngredient.amountFrac}
                onChange={handleChange}
              >
                {fractionOptions}
              </select>
            </td>
            <td>
              <select
                className="w-38 text-center rounded-sm mr-1"
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
      <button
        className="border-2 mt-2 hover:bg-yellow-500 hover:text-white py-1 px-2 text-md drop-shadow-md rounded-sm text-emerald-900 font-semibold"
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
