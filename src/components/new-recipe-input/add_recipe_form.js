import React from "react";
import "./new-recipe.css";
import "react-dropdown/style.css";
import { useState } from "react";
import AddStepsForm from "./add_step";
import axios from "axios";
import { useEffect } from "react";

function AddRecipeForm({ handleSubmit, newRecipe, setNewRecipe }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [newSteps, setNewSteps] = useState([]);

  const addStep = (newStep) => {
    console.log(newStep);
    setNewSteps((prevState) => [...prevState, newStep]);
    console.log(newSteps);
  };

  useEffect(() => {
    setNewRecipe((prevState) => ({
      ...prevState,
      steps: newSteps,
    }));
  }, [newSteps]);

  return (
    // <div className="overscroll-auto bg-scroll  bg-[#C9B9AC]">
    <div className="max-w-lg max-h-fit min-w-full rounded-md mt-8 mx-auto pb-24 bg-opacity-60 p-2 shadow-xl">
      <div className="bg-white p-4">
        <h1 className="pt-2.5 font-extrabold text-center text-[#512C24]">
          Add New Recipe
        </h1>
        <form>
          <label className="font-bold mt-3">Recipe Details</label>
          <input
            className="w-full mt-1 rounded-sm"
            type="text"
            placeholder="Title"
            name="title"
            value={newRecipe.title}
            onChange={handleChange}
          />
          <textarea
            className="w-full mt-2 rounded-sm"
            placeholder="Description"
            name="description"
            value={newRecipe.description}
            onChange={handleChange}
          />
          <input
            className="w-full mt-2 rounded-sm"
            type="url"
            placeholder="Enter Image URL"
            name="image"
            value={newRecipe.image}
            onChange={handleChange}
          />
          <input
            className=" mt-2 rounded-sm"
            type="number"
            placeholder="Number of servings"
            name="servings"
            value={newRecipe.servings}
            onChange={handleChange}
          />
          <br />
          <input
            className=" mt-2 rounded-sm"
            placeholder="Prep Time"
            name="prepTime"
            type="text"
            value={newRecipe.prepTime}
            onChange={handleChange}
          />
          <br />
          <input
            className="mt-1.5 rounded-sm"
            placeholder="Cook Time"
            name="cookTime"
            type="text"
            value={newRecipe.cookTime}
            onChange={handleChange}
          />
          <br />
          <br />
          <AddStepsForm addStep={addStep} />
          <br />
          <button
            className="border-2 mt-2 text-xl px-5 hover:bg-white-500 hover:text-emerald-900 p-2 drop-shadow-md rounded-sm text-white bg-yellow-500 font-semibold"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
