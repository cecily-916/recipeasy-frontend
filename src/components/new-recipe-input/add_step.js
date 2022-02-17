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
    imagedelete: "",
    imageid: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    if (newStep.details === "") {
      alert("Enter instruction details before saving the step.");
    } else if (newStep.ingredients.length === 0) {
      if (
        window.confirm(
          "This step does not have any ingredients saved. Proceed?"
        )
      ) {
        addStep(newStep);
        resetNewStep();
        setSelectedImage(null);
      }
    } else {
      addStep(newStep);
      resetNewStep();
      setSelectedImage(null);
    }
  };

  const resetNewStep = () => {
    setNewStep({
      details: "",
      extradetails: "",
      ingredients: [],
      image: "",
      category: "",
      imagedelete: "",
      imageid: "",
    });
  };

  const setImage = (imageUrl) => {
    setNewStep((prevState) => ({
      ...prevState,
      image: imageUrl,
    }));
  };

  const setImageDelete = (deleteHash) => {
    setNewStep((prevState) => ({
      ...prevState,
      imagedelete: deleteHash,
    }));
  };

  const setImageId = (imageId) => {
    setNewStep((prevState) => ({
      ...prevState,
      imageid: imageId,
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
  //
  return (
    <div>
      <p className="font-extrabold">Add Step</p>
      <textarea
        className="w-full mt-2 rounded-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        placeholder="Title or category"
        name="details"
        value={newStep.details}
        onChange={handleChange}
      />
      <br />
      <textarea
        className="w-full mt-2 rounded-sm"
        placeholder="Instructions"
        name="extradetails"
        value={newStep.extradetails}
        onChange={handleChange}
      />
      <br />
      <p className="italic p-2">Each step can have its own image.</p>
      <span className="flex items-center space-x-3 pb-2">
        <input
          className="w-50% mt-2 rounded-sm"
          type="url"
          placeholder="Enter Image URL"
          name="image"
          value={newStep.image}
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
