import React from "react";
import "./new-recipe.css";
import "react-dropdown/style.css";
import { useState } from "react";
import AddStepsForm from "./add_step";
import axios from "axios";
import { useEffect } from "react";
import UploadAndDisplayImage from "./image_upload";

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
    setNewSteps((prevState) => [...prevState, newStep]);
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
      <div className="bg-white p-4 border-black">
        <h1 className="pt-2.5 font-extrabold text-center text-[#512C24]">
          Add New Recipe
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="font-bold mt-3">Recipe Details</label>
          <input
            className="w-full mt-1 rounded-sm"
            type="text"
            placeholder="Title"
            name="title"
            required
            value={newRecipe.title}
            onChange={handleChange}
          />
          <input
            className="w-full mt-1 rounded-sm"
            type="text"
            placeholder="Author"
            name="author"
            required
            value={newRecipe.author}
            onChange={handleChange}
          />
          <input
            className="w-full mt-1 rounded-sm"
            type="text"
            placeholder="Source"
            name="source"
            value={newRecipe.source}
            onChange={handleChange}
          />
          <textarea
            className="w-full mt-2 rounded-sm"
            placeholder="Description"
            name="description"
            value={newRecipe.description}
            onChange={handleChange}
          />
          <p className="text-sm">
            To add an image, drop the URL below. You can easily upload your
            image to the web using&nbsp;
            <a
              href="https://imgur.com/upload"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold underline"
            >
              Imgur
            </a>
          </p>
          <UploadAndDisplayImage />
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
            required
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
            type="submit"
            className="border-2 mt-2 text-xl px-5 hover:bg-white-500 hover:text-emerald-900 p-2 drop-shadow-md rounded-sm text-white bg-yellow-500 font-semibold"
            // onClick={() => {
            //   handleSubmit();
            // }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
