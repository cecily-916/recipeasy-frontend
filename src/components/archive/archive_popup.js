import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Userfront from "@userfront/react";
import DeleteRecipePopup from "./delete_recipe_confirmation";

function ArchivePopup({ userID, trigger, setTrigger, setChange, change }) {
  // Opens a popup that allows user restore archived recipes

  const [archiveData, setArchiveData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/${userID}/archive`)
      .then((response) => {
        console.log(response);
        setArchiveData(response.data);
      })
      .catch((error) => {
        console.log("error: Get request failed.");
      });
  }, [change]);

  const handleRestore = (recipeID) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/archive/${recipeID}}`)
      .then((response) => {
        console.log(response);
        alert(`Recipe successfully restored!`);
        setChange(recipeID);
      })
      .catch((error) => {
        console.log("error: Restoration request failed.");
      });
    console.log(recipeID);
  };

  const handleDelete = (recipeID) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/archive/${recipeID}`)
        .then((response) => {
          console.log(response);
          alert(`Recipe successfully deleted!`);
          setChange(recipeID);
        })
        .catch((error) => {
          console.log("error: Deletion request failed.");
        });
    }
  };

  const archivedRecipes = archiveData.map((recipe, index) => {
    return (
      <div key={index}>
        <br />
        <p className="font-bold inline">{recipe.title}</p>
        <section className="space-x-14">
          <button
            className="text-green-700 hover:text-lg hover:font-bold underline"
            onClick={() => {
              handleRestore(recipe.ID);
            }}
          >
            Restore
          </button>
          <button
            className="underline text-red-600 hover:font-bold hover:text-lg inline-block"
            onClick={() => handleDelete(recipe.ID)}
          >
            Delete
          </button>
        </section>
      </div>
    );
  });

  return trigger ? (
    <div className="popup z-50">
      <div className="popup-inner text-center rounded-md">
        <button
          className="font-bold absolute top-8 right-16 close-btn"
          onClick={() => setTrigger(false)}
        >
          X
        </button>
        <h1>Archived Recipes</h1>
        <br />
        {
          {
            0: <p>You have no archived recipes.</p>,
          }[archiveData.length]
        }
        {archivedRecipes}
        <br />
      </div>
    </div>
  ) : (
    ""
  );
}

export default ArchivePopup;
