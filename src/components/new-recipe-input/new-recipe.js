import React from "react";
import "./new-recipe.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";
import StepsList from "../main-pages/current_recipe/steps_list";
import newStep from "./steps";

function NewRecipePopup(props) {
  const [formFields, setFormFields] = useState({
    title: "",
  });

  const titleChangeHandler = (changeEvent) => {
    setFormFields({
      title: changeEvent.target.value,
    });
  };

  const submitNewRecipe = (submitEvent) => {
    submitEvent.preventDefault();
    props.createNewRecipe({ title: formFields.title });
    setFormFields({
      title: "",
    });
  };
  const addNewStep = () => {
    return <newStep />;
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add New Recipe</h1>
        <form>
          {/* onSubmit={submitNewRecipe} */}
          <input
            type="text"
            onChange={titleChangeHandler}
            value={formFields.title}
            placeholder="Title"
            required
          />
          <p>Preview: {formFields.title}</p>
          <button onClick={addNewStep}>Add new step</button>
          <input
            type="Submit"
            // className="close-btn"
          />
        </form>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close Form
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewRecipePopup;
