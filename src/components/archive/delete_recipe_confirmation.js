import axios from "axios";
import React from "react";

function DeleteRecipePopup({ recipeID, setTrigger, trigger, setChange }) {
  // Opens a popup that allows user to soft delete (archive) the recipe

  const handleDelete = (recipeID) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/archive/${recipeID}}`)
      .then((response) => {
        console.log(response);
        alert(`Recipe successfully deleted!`);
        setChange(recipeID);
      })
      .catch((error) => {
        console.log("error: Deletion request failed.");
      });
    console.log(recipeID);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner text-center rounded-md">
        <button
          className="absolute top-8 right-16 text-lg font-bold close-btn"
          onClick={() => setTrigger(false)}
        >
          X
        </button>
        <h1>Delete Recipe</h1>
        <br />
        <p className="text-lg">
          Are you sure you want to permanently delete this recipe? <br />{" "}
          Deleted recipes cannot be restored.
        </p>
        <button
          onClick={() => {
            handleDelete();
            setTrigger(false);
          }}
        >
          <br />
          <p className="text-lg text-red-700 font-extrabold border rounded-lg p-2 hover:bg-slate-200 drop-shadow-md">
            Confirm
          </p>
        </button>
        <br />
      </div>
    </div>
  ) : (
    ""
  );
}

export default DeleteRecipePopup;
