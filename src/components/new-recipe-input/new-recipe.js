import React from "react";
import "./new-recipe.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";

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

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add New Recipe</h1>
        <form onSubmit={submitNewRecipe}>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={formFields.title}
            placeholder="Title"
            required
          />
          <p>Preview: {formFields.title}</p>
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
