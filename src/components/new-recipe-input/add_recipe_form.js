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
  const [selectedImage, setSelectedImage] = useState(null);

  const setImage = (imageUrl) => {
    setNewRecipe((prevState) => ({
      ...prevState,
      image: imageUrl,
    }));
  };
  console.log(newRecipe.image);

  const setImageDelete = (deleteHash) => {
    setNewRecipe((prevState) => ({
      ...prevState,
      imagedelete: deleteHash,
    }));
  };

  const setImageId = (imageId) => {
    setNewRecipe((prevState) => ({
      ...prevState,
      imageid: imageId,
    }));
  };

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
    <div className="max-w-xl max-h-fit min-w-full rounded-md mt-8 mx-auto pb-24 bg-opacity-60 p-2 shadow-xl">
      <div className="bg-white p-4 border-black">
        <h1 className="pt-2.5 text-center text-[#512C24]">Add New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <label className="font-bold mt-3">Recipe Details</label>
          <input
            className="w-full mt-1 rounded-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            placeholder="Title"
            name="title"
            required
            value={newRecipe.title}
            onChange={handleChange}
          />
          <span className="flex space-x-2">
            <input
              className="w-1/2 mt-1 rounded-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="text"
              placeholder="Author"
              name="author"
              required
              value={newRecipe.author}
              onChange={handleChange}
            />
            <input
              className="w-1/2 mt-1 rounded-sm "
              type="text"
              placeholder="Source (optional)"
              name="source"
              value={newRecipe.source}
              onChange={handleChange}
            />
          </span>
          <textarea
            className="w-full mt-2 rounded-sm"
            placeholder="Description"
            name="description"
            value={newRecipe.description}
            onChange={handleChange}
          />
          <textarea
            className="w-full mt-2 rounded-sm"
            placeholder="Ingredients"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleChange}
          />
          <hr />
          <p className="italic p-2">
            Upload your own image OR add the image address URL input box
          </p>
          <span className="flex items-center space-x-3 pb-2">
            <input
              className="w-50% mt-2 rounded-sm"
              type="url"
              placeholder="Enter Image URL"
              name="image"
              value={newRecipe.image}
              onChange={handleChange}
            />
            <UploadAndDisplayImage
              className="w-50%"
              setImageDelete={setImageDelete}
              setImageId={setImageId}
              setImage={setImage}
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
            />
          </span>
          <hr />
          <span className="flex items-center space-x-1">
            <input
              className=" mt-2 w-1/3 rounded-sm border-1 
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="text"
              placeholder="Servings"
              name="servings"
              value={newRecipe.servings}
              onChange={handleChange}
            />
            <br />
            <input
              className=" mt-2 w-1/3 rounded-sm"
              placeholder="Prep Time"
              name="prepTime"
              type="text"
              value={newRecipe.prepTime}
              onChange={handleChange}
            />
            <br />
            <input
              className="mt-1.5 w-1/3 rounded-sm"
              placeholder="Cook Time"
              name="cookTime"
              type="text"
              value={newRecipe.cookTime}
              onChange={handleChange}
            />
          </span>
          <br />
          <br />
          <AddStepsForm addStep={addStep} />
          <br />
          <button
            type="submit"
            className="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110
            border-2 mt-2 text-2xl px-5 hover:bg-white-500 hover:text-emerald-900 p-2 drop-shadow-md rounded-sm text-white bg-yellow-500 font-semibold"
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
