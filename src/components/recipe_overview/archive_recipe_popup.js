import axios from "axios";
import React from "react";

function ArchiveRecipePopup({ recipe, setTrigger, trigger }) {
  // Opens a popup that allows user to soft delete (archive) the recipe

  const handleArchive = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${recipe.ID}`)
      .then((response) => {
        console.log(response);
        alert(`${recipe.title} successfully archived`);
        window.location = "/Home";
      })
      .catch((error) => {
        console.log("error: Delete request failed.");
      });
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Archive Recipe</h1>
        <br />
        <br />
        <p>Are you sure you want to archive this recipe?</p>
        <button
          onClick={() => {
            handleArchive();
            setTrigger(false);
          }}
        >
          <p className="text-lg font-extrabold">Confirm</p>
        </button>
        <br />
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ArchiveRecipePopup;
