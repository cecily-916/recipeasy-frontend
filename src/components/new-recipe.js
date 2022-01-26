import React from "react";
import "./new-recipe.css";

function NewRecipePopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add New Recipe</h1>
        <p>Fill out the form below to add a new recipe</p>

        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Submit
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewRecipePopup;
