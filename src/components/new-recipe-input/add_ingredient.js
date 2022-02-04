import React from "react";
import AddIngredient from "./ingredient-form";
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

  // // Open add ingredient form
  // const [addIngredientButton, setAddIngredientButton] = useState(false);

  // // Add ingredients to the step

  // const addIngredient = (newIngredient) => {
  //   console.log(newIngredient);
  //   let ingredients = [...stepIngredients, newIngredient];
  //   setStepIngredients(ingredients);
  // };

  // const openIngredientForm = () => {
  //   return (
  //     <section>
  //       <h2>Add ingredient:</h2>
  //       <AddIngredient addIngredient={addIngredient} />
  //     </section>
  //   );
  // };

  // if (addIngredientButton === true) {
  //   openIngredientForm();
  // }

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
