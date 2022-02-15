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
      <div className="popup-inner text-center rounded-md">
        <button
          className="absolute top-8 right-16 close-btn"
          onClick={() => setTrigger(false)}
        >
          <span class="material-icons">highlight_off</span>
        </button>
        <h1>Archive Recipe</h1>
        <br />
        <p className="text-lg">Are you sure you want to archive this recipe?</p>
        <button
          onClick={() => {
            handleArchive();
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

export default ArchiveRecipePopup;
