import React from "react";
import AddIngredient from "./ingredient-form";
import { useState } from "react";

function AddStep({ addStep }) {
  const [details, setDetails] = useState();
  const [extraDetails, setExtraDetails] = useState();
  const [stepIngredients, setStepIngredients] = useState([]);

  const handleSubmit = (e) => {
    addStep({
      details: details,
      extradeetails: extraDetails,
      ingredients: stepIngredients,
    });
    e.preventDefault();
  };

  // Open add ingredient form
  const [addIngredientButton, setAddIngredientButton] = useState(false);

  // Add ingredients to the step

  const addIngredient = (newIngredient) => {
    console.log(newIngredient);
    let ingredients = [...stepIngredients, newIngredient];
    setStepIngredients(ingredients);
  };

  const openIngredientForm = () => {
    return (
      <section>
        <h2>Add ingredient:</h2>
        <AddIngredient addIngredient={addIngredient} />
      </section>
    );
  };

  // if (addIngredientButton === true) {
  //   openIngredientForm();
  // }

  return (
    <div>
      <form>
        <label>Instruction</label>
        <br />
        <input
          name="details"
          type="text"
          value={details}
          placeholder="Enter brief instruction"
          onChange={(e) => setDetails(e.target.value)}
        />
        <br />
        <br />
        <label>Full details</label>
        <br />
        <input
          name="extraDetails"
          type="text"
          value={extraDetails}
          placeholder="Enter full instruction here"
          onChange={(e) => setExtraDetails(e.target.value)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit Step"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
      <button
        className="grey-container"
        onClick={() => {
          setAddIngredientButton(true);
        }}
      >
        Add Ingredient
      </button>
      {addIngredientButton === true && openIngredientForm()}
    </div>
  );
}

export default AddStep;
