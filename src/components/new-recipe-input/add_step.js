import React from "react";
import AddIngredientsForm from "./add_ingredient";
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
    order: "",
  });

  const handleSubmit = () => {
    props.addStep(newStep);
    resetNewStep();
  };

  const resetNewStep = () => {
    setNewStep({
      details: "",
      extradetails: "",
      ingredients: [],
      order: "",
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

  const [newIngredientButton, setNewIngredientButton] = useState(false);

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

      <button
        type="button"
        className="inline-block
        py-2
        px-7
        border border-[#E5E7EB]
        rounded-md 
        text-base text-body-color 
        font-medium 
        shadow-sm 
        m-3 
        p-3 
        bg-emerald-800 text-white"
        onClick={() => setNewIngredientButton(true)}
      >
        Add Ingredient to Step
      </button>
      <AddIngredientsForm
        trigger={newIngredientButton}
        setTrigger={setNewIngredientButton}
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
