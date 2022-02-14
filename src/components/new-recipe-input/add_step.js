import React, { useEffect } from "react";
import AddIngredientsForm from "./ingredients";
import { useState } from "react";
import UploadAndDisplayImage from "./image_upload";
import axios from "axios";

function AddStepsForm({ addStep }) {
  //Internal form in the new recipe form
  //at least one step
  //able to add more steps
  //each step has 0+ ingredients

  const [newStep, setNewStep] = useState({
    details: "",
    extradetails: "",
    ingredients: [],
    image: "",
    category: "",
  });

  const handleSubmit = () => {
    if (newStep.details === "") {
      alert("Input instruction details before saving the step.");
    } else {
      addStep(newStep);
      resetNewStep();
    }
  };

  const resetNewStep = () => {
    setNewStep({
      details: "",
      extradetails: "",
      ingredients: [],
      image: "",
      category: "",
    });
  };

  const addImage = (imageUrl) => {
    setNewStep((prevState) => ({
      ...prevState,
      image: imageUrl,
    }));
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

  return (
    <div>
      <p className="font-extrabold">Add Step</p>
      <textarea
        className="w-full mt-2 rounded-sm"
        placeholder="Details"
        name="details"
        value={newStep.details}
        onChange={handleChange}
      />
      <br />
      <textarea
        className="w-full mt-2 rounded-sm"
        placeholder="Extra Details"
        name="extradetails"
        value={newStep.extradetails}
        onChange={handleChange}
      />
      <br />
      <UploadAndDisplayImage setImage={addImage} />
      <br />
      <p className="font-bold mt-3">Step Ingredients</p>
      <br />
      <AddIngredientsForm
        ingredientsList={newStep.ingredients}
        addIngredient={addIngredient}
      />
      <button
        className="border-2 mt-2 hover:bg-yellow-500 hover:text-white p-2 drop-shadow-md rounded-sm text-emerald-900 font-semibold"
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save step
      </button>
    </div>
  );
}

export default AddStepsForm;
