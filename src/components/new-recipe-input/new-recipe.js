import React from "react";
import "./new-recipe.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const unitOptions = ["cup", "tbsp", "tsp", "pinch"];
const defaultOption = unitOptions[0];

function NewRecipePopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add New Recipe</h1>
        <p>Fill out the form below to add a new recipe</p>
        <h3>Recipe Name:</h3>
        <input type="text" />
        <button>
          <h3>Add ingredient</h3>
        </button>
        <input type="text" />
        <p>Amount:</p>
        <input type="number" />
        <p>Unit:</p>
        <Dropdown
          options={unitOptions}
          // onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
        <h3>Steps:</h3>
        <input type="text" />
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Submit
        </button> */}
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewRecipePopup;
