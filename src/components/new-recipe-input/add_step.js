import React, { useEffect } from "react";
import AddIngredientsForm from "./ingredients";
import { useState } from "react";

function AddStepsForm(props) {
  //Internal form in the new recipe form
  //at least one step
  //able to add more steps
  //each step has 0+ ingredients

  const [newStep, setNewStep] = useState({
    details: "",
    extradetails: "",
    ingredients: [],
    image: "",
  });

  const handleSubmit = () => {
    if (newStep.details === "") {
      alert("Input instruction details before saving the step.");
    } else {
      props.addStep(newStep);
      resetNewStep();
    }
  };

  const resetNewStep = () => {
    setNewStep({
      details: "",
      extradetails: "",
      ingredients: [],
      image: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewStep((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addIngredient = (newIngredient) => {
    setNewStep((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, newIngredient],
    }));
  };

  return props.trigger ? (
    <div>
      <p className="font-extrabold">Add Step</p>
      <textarea
        placeholder="Details"
        name="details"
        value={newStep.details}
        onChange={handleChange}
      />
      <br />
      <textarea
        placeholder="Extra Details"
        name="extradetails"
        value={newStep.extradetails}
        onChange={handleChange}
      />
      <br />
      <input
        type="url"
        placeholder="Enter Image URL"
        name="image"
        value={newStep.image}
        onChange={handleChange}
      />
      <br />
      <p className="font-bold">Step Ingredients</p>
      <AddIngredientsForm
        ingredientsList={newStep.ingredients}
        addIngredient={addIngredient}
      />
      <button
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save step
      </button>
    </div>
  ) : (
    ""
  );
}

export default AddStepsForm;
