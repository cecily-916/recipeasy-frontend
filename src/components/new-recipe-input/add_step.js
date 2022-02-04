import React from "react";
import AddIngredient from "./ingredient-form";
import { useState } from "react";

function AddStepsForm({ props }) {
  const stepsData = {
    details: "details",
    extradetails: "extradetails",
    // ingredients: [{
    //   ingredient: 'ingredient',
    //   unit: 'unit',
    //   amount:'amount',
    //   order: 'order'
  };

  const handleFieldChange = (index) => (event, value, selectedKey) => {
    let data = { ...props.value };

    data[index] = value;

    props.onChange(null, data);
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

  return (
    <div>
      {props.value.map((subform, index) => (
        <AddStepsForm
          key={subform.key}
          value={subform}
          onChange={handleFieldChange(index)}
        />
      ))}
    </div>
  );
}

export default AddStepsForm;
